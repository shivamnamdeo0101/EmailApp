const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const morgan = require("morgan")
const cors = require("cors");

const app = express(); 

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
    origin:"http://localhost:3000"
}));



//database connection
require("./mongo")

//Models
require("./model/User");

//Middleware
app.use(bodyParser.json())
    .use(morgan());

  
//Routes
app.use("/users", require("./routes/users"))

app.listen(3001, function () {
    console.log("Server is running on port 3001");
})
