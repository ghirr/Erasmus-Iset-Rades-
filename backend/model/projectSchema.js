const mongoose = require('mongoose');  //import module mongoose 

const projectSchema= mongoose.Schema({
    projectName:{
        type: String,
        required: true,
    },
    catagorie:{
        type: String,
        required: true,
        enum:['ka1','cbhe'],
    },
    description:{type:String},
    dateDebutProject:{
        type: Date,
        required: true,
    },
    dateFinProject:{
        type: Date,
        required: true,
    },
    image:{
        type: String,
    },
})

const project = mongoose.model("project",projectSchema) 

module.exports=project