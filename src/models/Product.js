import { Schema, model, models } from "mongoose";

const Producto = new Schema({
    _id:{
        type:String,
        unique:true,
        required: [true,'El codigo es requerido'],
        trim:true
    },
    cod_fabrica: {
        type: String,
        default: "",
        trim: true,
        
    },
    descripcion: {
        type: String,
        required: true,
        set: ( valor ) => valor.toUpperCase(),
        trim:true
    },
},{
    timestamps: true
});


export default models.Producto ||  model('Producto',Producto);