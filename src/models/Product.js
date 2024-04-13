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
    stock: {
        type: Number,
        required: true,
    },
    precio_venta: {
        type:Number,
        required:true
    },
    marca: {
        type:String,
        default:"",
        trim:true,
        set: ( valor ) => valor.toUpperCase() 
    },
    rubro:{
        type:Number,
        default: 0
    },
    subRubro:{
        type:String,
        default:"",
        trim:true,
        set: ( valor ) => valor.toUpperCase()
    },
    oferta:{
        type:Boolean,
        default:false
    },
    precioOferta:{
        type:Number,
        default:0,
        set: ( valor ) => valor.toFixed(2)
    },
    destacado:{
        type:Boolean,
        default:false
    },
    datos:{
        type:Array,
        default:[]
    },
    web:{
        type:Boolean,
        default:true
    }
},{
    timestamps: true
});


export default models.Producto ||  model('Producto',Producto);