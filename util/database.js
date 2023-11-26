const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'newdatabase',
    password: 'Pandey@131'
});

module.exports = pool.promise();