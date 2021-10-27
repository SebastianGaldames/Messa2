// import mongoosse,{Schema} from 'mongoose';
const mongoosse = require('mongoose');
const {Schema} = require('mongoose');

const productoSchema = new Schema({
    nombre: {type:String, maxlength:50, required:true },
    precio: {type:Number, required: true},
    stockS: {type:Number, default: 0},
    stockM: {type:Number, default: 0},
    stockL: {type:Number, default: 0},
    stockXL: {type:Number, default: 0},
    descripcion: {type:String, maxlength:200, required:true},
    categoria: {type:String, maxlength:50, required:true},
    genero: {type:String, maxlength:30, required:true},
    temporada: {type:String, maxlength:30, required:true},
    disponible: {type:Boolean, default:true},
    imagen: {type:String, required: true, default:"https://www.webempresa.com/foro/wp-content/uploads/wpforo/attachments/3200/318277=80538-Sin_imagen_disponible.jpg"}
});

const Producto = mongoosse.model('Producto',productoSchema);

module.exports = Producto;