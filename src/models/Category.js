const { Schema, model, models } = require("mongoose");

const Rubro = new Schema({
    nombre:{
        type:String,
        required:true
    }
});

export default models.Rubro || model('Rubro',Rubro);