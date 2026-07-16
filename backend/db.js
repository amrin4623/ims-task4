const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "172.31.38.219",
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

