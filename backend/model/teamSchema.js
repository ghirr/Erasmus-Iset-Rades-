const mongoose = require('mongoose');  //import module mongoose 

const teamSchema= mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    profession:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    image:{
        type: String,
        required: true,
    },
})

const team = mongoose.model("team",teamSchema) 

module.exports=team