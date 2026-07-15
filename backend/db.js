const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "DATABASE_IP",
    user: "appuser",
    password: "P@ssword",
    database: "appdb"
});

connection.connect((err) => {
    if (err) {
        console.log("Database Connection Failed");
    } else {
        console.log("Database Connected Successfully");
    }
});

module.exports = connection;