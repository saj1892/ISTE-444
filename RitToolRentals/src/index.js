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
app.get('/api/data', cors(corsOptions), (req, res) => {
    db.query('SELECT * FROM pickupLocation', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});
/*
            All ToolTypes
            All Locations
            All Location Infromation
            All renter infromation 
*/
app.get('/invetory', cors(corsOptions), (req, res) => {
    db.query('SELECT * FROM Inventory', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});
// Add more endpoints as needed

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
