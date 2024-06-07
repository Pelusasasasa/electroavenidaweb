const { Schema, models, model, set} = require("mongoose");
const { unique } = require("next/dist/build/utils");

const User = new Schema({

    email:{
        type:String,
        unique:true,
        required:true,
        set: (value => value.toUpperCase())
    },
    password:{
        type:String,
        required:true,
        set: (value => value.toUpperCase())
    },
    direccion:{
        type:String,
        required:true,
        set: (value => value.toUpperCase())
    },
    telefono:{
        type:String,
        required:true,
        set: (value => value.toUpperCase())
    },
    cuit:{
        type:String,
        required:true,
        set: (value => value.toUpperCase())
    }
});

export default models.User || model('User', User);