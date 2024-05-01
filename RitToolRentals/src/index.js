const express = require('express');
const db = require('./database');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const basicAuth = require('basic-auth');
const logger = require('./logger');
const bcrypt = require('bcryptjs');
app.set('trust proxy',true)

app.use((req, res, next) => {
    const forwarded = req.headers['x-forwarded-for'];
    const ip = req.ip || (forwarded ? forwarded.split(',')[0] : '') || req.connection.remoteAddress;
    req.realIp = ip;
    next();
});

const authenticateUser = (req, res, next) => {
    const credentials = basicAuth(req);
    if (!credentials) {
        return res.status(401).json({ message: 'Access denied: No credentials provided' });
    }

    const { name, pass } = credentials;

    db.query('SELECT * FROM users WHERE username = ?', [name], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Internal server error' });
        }
        if (results.length > 0) {
            const user = results[0];
            bcrypt.compare(pass, user.password, (err, result) => {
                if (result) {
                    req.user = user;  // Store user information in request object
                    next();
                } else {
                    return res.status(401).json({ message: 'Authentication failed' });
                }
            });
        } else {
            return res.status(404).json({ message: 'User not found' });
        }
    });
};

app.get('/api/protected', authenticateUser, (req, res) => {
    // This data is only returned if the user is authenticated
    res.json({
        message: 'This is a protected API endpoint.'
    });
});


app.get('/api/locations', (req, res) => {
    logger.info('API /api/locations endpoint hit', { ip: req.realIp });
    db.query('SELECT * FROM pickupLocation', (error, results) => {
        if (error) {
            logger.error(`Error fetching locations: ${error.message}`, { ip });
            res.status(500).json({ error: 'Failed to fetch locations' });
        } else {
            res.json(results);
        }
    });
});

app.get('/api/toolTypes', (req, res) => {
    logger.info('API /api/toolTypes endpoint hit', { ip: req.realIp });
    db.query('SELECT DISTINCT ToolType FROM Inventory', (error, results) => {
        if (error) {
            logger.error(`Error fetching tool types: ${error.message}`, { ip });
            res.status(500).json({ error: 'Failed to fetch tool types' });
        } else {
            res.json(results);
        }
    });
});

app.get('/api/inventory', (req, res) => {
    logger.info('API /api/inventory endpoint hit', { ip: req.realIp });
    db.query('SELECT * FROM Inventory', (error, results) => {
        if (error) {
            logger.error(`Error fetching inventory: ${error.message}`, { ip: req.realIp });
            res.status(500).json({ error: 'Failed to fetch inventory' });
        } else {
            res.json(results);
        }
    });
});

app.get('/api/renters', (req, res) => {
    logger.info('API /api/renters endpoint hit', { ip: req.realIp });
    db.query('SELECT * FROM Renter', (error, results) => {
        if (error) {
            logger.error(`Error fetching renters: ${error.message}`, { ip: req.realIp });
            res.status(500).json({ error: 'Failed to fetch renters' });
        } else {
            res.json(results);
        }
    });
});

app.post('/api/addItem', (req, res) => {
    const { name, toolType, locationName, description, available, photo } = req.body;
    console.lo

    logger.info('API /api/addItem endpoint hit', { ip: req.realIp });
    const sql = `
        INSERT INTO Inventory (Name, ToolType, locationName, description, available, photo)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [name, toolType, locationName, description, available, photo], (error, results) => {
        if (error) {
            logger.error('Failed to insert new inventory item: ' + error.message, { ip: req.realIp });
            res.status(500).send('Failed to insert new inventory item.');
        } else {
            logger.info('Inventory item created successfully.');
            res.status(201).send('Inventory item created successfully.');
        }
    });
});

app.get('/api/inventory/:itemID', (req, res) => {
    const itemID = req.params.itemID;

    logger.info(`API /api/inventory/${itemID} endpoint hit`, { ip: req.realIp });
    const sql = 'SELECT * FROM Inventory WHERE itemID = ?';

    db.query(sql, [itemID], (error, results) => {
        if (error) {
            logger.error('Failed to retrieve inventory item: ' + error.message, { ip: req.realIp });
            res.status(500).send('Failed to retrieve inventory item.');
        } else if (results.length > 0) {
            res.json(results[0]);
        } else {
            logger.warn('Inventory item not found with ID: ' + itemID, { ip: req.realIp });
            res.status(404).send('Inventory item not found.');
        }
    });
});

app.get('/api/lenderInventory/:lender', (req, res) => {
    const lender = req.params.lender;

    logger.info(`API /api/lenderInventory/${lender} endpoint hit`, { ip: req.realIp });
    const sql = 'SELECT * FROM Inventory WHERE lender = ?';

    db.query(sql, [lender], (error, results) => {
        if (error) {
            logger.error('Failed to retrieve inventory items: ' + error.message, { ip: req.realIp });
            res.status(500).send('Failed to retrieve inventory items.');
        } else if (results.length > 0) {
            res.json(results);
        } else {
            logger.warn('No inventory items found for the specified lender: ' + lender, { ip: req.realIp });
            res.status(404).send('No inventory items found for the specified lender.');
        }
    });
});

app.put('/api/inventory/:itemID', (req, res) => {
    const itemID = req.params.itemID;
    const { name, toolType, locationName, description, available, photo } = req.body;
    logger.info(`API /api/inventory/${itemID} endpoint hit`, { ip: req.realIp });
    const sql = `
        UPDATE Inventory
        SET Name = ?, ToolType = ?, locationName = ?, description = ?, available = ?, photo = ?
        WHERE itemID = ?
    `;

    db.query(sql, [name, toolType, locationName, description, available, photo, itemID], (error, results) => {
        if (error) {
            logger.error('Failed to update inventory item: ' + error.message, { ip: req.realIp });
            res.status(500).send('Failed to update inventory item.');
        } else if (results.affectedRows > 0) {
            logger.info('Inventory item updated successfully with ID: ' + itemID, { ip: req.realIp });
            res.send('Inventory item updated successfully.');
        } else {
            logger.warn('Inventory item not found for update with ID: ' + itemID, { ip: req.realIp });
            res.status(404).send('Inventory item not found.');
        }
    });
});

app.delete('/api/inventory/:itemID', (req, res) => {
    const itemID = req.params.itemID;
    logger.info(`API /api/inventory/${itemID} endpoint hit`, { ip: req.realIp });
    const sql = 'DELETE FROM Inventory WHERE itemID = ?';

    db.query(sql, [itemID], (error, results) => {
        if (error) {
            logger.error('Failed to delete inventory item: ' + error.message, { ip: req.realIp });
            res.status(500).send('Failed to delete inventory item.');
        } else if (results.affectedRows > 0) {
            logger.info('Inventory item deleted successfully with ID: ' + itemID, { ip: req.realIp });
            res.send('Inventory item deleted successfully.');
        } else {
            logger.warn('Inventory item not found for deletion with ID: ' + itemID, { ip: req.realIp });
            res.status(404).send('Inventory item not found.');
        }
    });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
});
