import { obtenerFechaHoraBuenosAires } from "@/utils/funcion";

const { Schema, model } = require("mongoose");

const ClienteWeb = new Schema({
    nombre:{
        type:String,
        required:true
    },
    direccion:{
        type:String,
        required:true
    },
    localidad:{
        type:String,
        default:""
    },
    dni:{
        type:String,
        required:true
    },
    telefono:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    createAt:{
        type:Date,
        default:obtenerFechaHoraBuenosAires()
    }
},{
    timestamps:true
}
);

export default models.ClienteWeb || model('ClienteWeb',ClienteWeb);

