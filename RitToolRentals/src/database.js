const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',  // or the IP address of your MySQL server
    user: 'newuser',       // replace with your MySQL username
    password: 'Student!1',       // replace with your MySQL password
    database: 'rit' // replace with your database name
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

module.exports = db;
