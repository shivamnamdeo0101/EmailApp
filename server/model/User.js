const mongoose = require("mongoose");

const user_schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model("User", user_schema)