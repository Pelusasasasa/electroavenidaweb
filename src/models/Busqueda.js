const { Schema, models, model } = require("mongoose");

const Busqueda = new Schema({
    texto:{
        type:String,
        required:true
    },   
},{
    timestamps:true,
});

export default models.Busqueda || model('Busqueda',Busqueda);