// Require DotEnv in Project
const dotenv = require('dotenv');
dotenv.config();
// Required Express JS APP
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path")
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const mongoose = require("./database");



// Get Auth Routes

const authRoute = require("./routes/authRoutes");
const appRoute = require("./routes/appRoutes");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors())

app.use("/", authRoute)
app.use("/", appRoute)


app.use('*', (req, res) => {
    res.send("404")
})



app.listen(PORT, () => console.log("Server Running At Port " + PORT));

