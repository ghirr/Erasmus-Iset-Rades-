const mongoose = require('mongoose');  //import module mongoose 

const contactSchema= mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    subject:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    }
})

const contact = mongoose.model("contact",contactSchema) 

module.exports=contact