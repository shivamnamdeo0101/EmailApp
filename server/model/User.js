const mongoose = require("mongoose");

const user_schema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
		trim: true,
		lowercase: true,
		unique: [true, "Email already exists"],
        
    }
})


module.exports = mongoose.model("User", user_schema)