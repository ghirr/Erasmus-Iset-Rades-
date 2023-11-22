const mongoose = require('mongoose');  //import module mongoose 

const partenaireSchema= mongoose.Schema({
    partenaireName:{
        type: String,
        required: true,
    },
    dateDePartenariat:{
        type: Date,
        required: true,
    },
    nomPays:{type:String},
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

const partenaire = mongoose.model("partenaire",partenaireSchema) 

module.exports=partenaire