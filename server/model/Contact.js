const mongoose = require("mongoose");


const contact_schema = mongoose.Schema({
    email: {
        type: String,
    },
    title:{
        type:String,
    }
    
})


module.exports = mongoose.model("Contact", contact_schema)