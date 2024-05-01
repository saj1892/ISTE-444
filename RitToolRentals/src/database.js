const mysql = require('mysql');
const bcrypt = require('bcryptjs');
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
const users = [
    { username: 'alice', password: 'password123' },
    { username: 'bob', password: 'password456' }
];
users.forEach(user => {
    db.query('SELECT username FROM users WHERE username = ?', [user.username], (err, results) => {
        if (err) throw err;
        if (results.length === 0) {
            // User does not exist, proceed with insertion
            bcrypt.hash(user.password, 10, (err, hash) => {
                if (err) throw err;
                db.query('INSERT INTO users (username, password) VALUES (?, ?)', [user.username, hash], (err, result) => {
                    if (err) throw err;
                    console.log(`User ${user.username} added.`);
                });
            });
        } else {
            console.log(`User ${user.username} already exists.`);
        }
    });
});
module.exports = db;
