const { Schema, model, models } = require("mongoose");

const Noticia = Schema({
    tipo:{
        type:String,
        require:true
    },
    texto:{
        type:String,
        require:true
    },
},{
    timestamps:true,
});


export default models.Noticia || model('Noticia',Noticia);