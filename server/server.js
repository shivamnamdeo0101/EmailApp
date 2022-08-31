const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const morgan = require("morgan")
const cors = require("cors");

app.use(cors());


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
