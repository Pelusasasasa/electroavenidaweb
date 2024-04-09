const { Schema, models,model } = require("mongoose");


const Banner = new Schema({
    Titulo:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true,
    },
    mostrar:{
        type:Boolean,
        required:true,
        default:true
    },
    direccion:{
        type:String,
        default:""
    }
});

export default models.Banner || model('Banner',Banner);
