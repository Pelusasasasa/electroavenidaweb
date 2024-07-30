const {Schema, model, models} = require("mongoose");

const Marca = Schema({

    marca:{
        type: String,
        require: true
    },
    imgUrl:{
        type: String,
        default: ''
    },
    url:{
        type: String,
        default: ''
    }

});

export default models.Marca || model('Marca', Marca);