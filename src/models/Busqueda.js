const { Schema, models, model } = require("mongoose");

function obtenerFechaHoraBuenosAires() {
    const now = new Date();
    const nuevaFecha = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString();
    console.log(nuevaFecha)
    return nuevaFecha;
  }
  

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