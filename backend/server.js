const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Backend Running Successfully");
});

app.get("/users", (req, res) => {

    db.query("SELECT * FROM users", (err, result) => {

        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }

    });

});

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});