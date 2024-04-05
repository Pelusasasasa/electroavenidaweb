import { obtenerFechaHoraBuenosAires } from "@/utils/funcion";

const { Schema, models, model } = require("mongoose");

const Busqueda = new Schema({
    texto:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:obtenerFechaHoraBuenosAires()
    }
},{
    timestamps:true,
});

export default models.Busqueda || model('Busqueda',Busqueda);