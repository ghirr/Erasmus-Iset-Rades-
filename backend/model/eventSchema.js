const mongoose = require('mongoose');  //import module mongoose 

const eventSchema= mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    dateDebut:{
        type: Date,
        required: true,
    },
    dateFin:{
        type: Date,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
})

const event = mongoose.model("event",eventSchema) 

module.exports=event