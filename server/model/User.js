const mongoose = require("mongoose");

const Contact = require("../model/Contact");

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
        
    },
    password:{
        type:String,
        required:true
    },
    contact: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contact' }],
        
    
})


module.exports = mongoose.model("User", user_schema)