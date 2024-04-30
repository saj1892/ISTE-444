const express = require('express');
const db = require('./database');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:5173', 
    optionsSuccessStatus: 200 // For legacy browser support
};
app.use(cors(corsOptions));

// Fetch data example
app.get('/api/locations', cors(corsOptions), (req, res) => {
    db.query('SELECT * FROM pickupLocation', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

app.get('/api/inventory', cors(corsOptions), (req, res) => {
    db.query('SELECT * FROM Inventory', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

app.get('/api/renters', cors(corsOptions), (req, res) => {
    db.query('SELECT * FROM Renter', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});




app.post('/api/addItem', (req, res) => {
    const { name, toolType, locationName, description, available, photo } = req.body;
    const userId = req.header('Shib-User-Id');  // Assuming Shibboleth sends the user ID in this header

    // SQL to insert a new item, using placeholder values for prepared statements
    const sql = `
        INSERT INTO Inventory (Name, ToolType, locationName, description, available, lendie, lender, photo)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    // Execute the SQL query
    db.query(sql, [name, toolType, locationName, description, available, null, userId, photo], (error, results) => {
        if (error) {
            console.error('Failed to insert new inventory item:', error);
            res.status(500).send('Failed to insert new inventory item.');
        } else {
            res.status(201).send('Inventory item created successfully.');
        }
    });
});

app.get('/api/inventory/:itemID', (req, res) => {
    const itemID = req.params.itemID;

    // SQL to select the inventory item
    const sql = 'SELECT * FROM Inventory WHERE itemID = ?';

    // Execute the SQL query
    db.query(sql, [itemID], (error, results) => {
        if (error) {
            console.error('Failed to retrieve inventory item:', error);
            res.status(500).send('Failed to retrieve inventory item.');
        } else {
            if (results.length > 0) {
                res.json(results[0]);  // Send the first (and should be only) item found
            } else {
                res.status(404).send('Inventory item not found.');
            }
        }
    });
});
app.get('/api/lenderInventory/:lender', (req, res) => {
    const lender = req.params.lender;

    // SQL query to select inventory where the lender matches the parameter
    const sql = 'SELECT * FROM Inventory WHERE lender = ?';

    // Execute the SQL query
    db.query(sql, [lender], (error, results) => {
        if (error) {
            console.error('Failed to retrieve inventory items:', error);
            res.status(500).send('Failed to retrieve inventory items.');
        } else {
            if (results.length > 0) {
                res.json(results);  // Send all items found
            } else {
                res.status(404).send('No inventory items found for the specified lender.');
            }
        }
    });
});

app.put('/api/inventory/:itemID', (req, res) => {
    const itemID = req.params.itemID;
    const { name, toolType, locationName, description, available, photo } = req.body;

    // SQL query to update the inventory item
    const sql = `
        UPDATE Inventory
        SET Name = ?, ToolType = ?, locationName = ?, description = ?, available = ?, photo = ?
        WHERE itemID = ?
    `;

    // Execute the SQL query
    db.query(sql, [name, toolType, locationName, description, available, photo, itemID], (error, results) => {
        if (error) {
            console.error('Failed to update inventory item:', error);
            res.status(500).send('Failed to update inventory item.');
        } else {
            if (results.affectedRows > 0) {
                res.send('Inventory item updated successfully.');
            } else {
                res.status(404).send('Inventory item not found.');
            }
        }
    });
});

// Add more endpoints as needed

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
