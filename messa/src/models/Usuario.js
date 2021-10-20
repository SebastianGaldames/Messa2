import mongoosse,{Schema} from 'mongoose';

const usuarioSchema = new Schema({
    nombre: {type:String, minlength:8, maxlength:200, required:true },
    rut: {type:String, minlength:9, maxlength:20, unique:true, required: true},
    nombreUsuario: {type:String,  minlength:8, maxlength:25, unique:true, required:true },
    email: {type:String, minlength:8, maxlength:320, unique:true, required:true },
    telefono: {type:Number, minlength:9, maxlength:9, default: 0},
    direccion: {type:String, maxlength:50, required:true },
    numero: {type:Number, maxlength:8, required:true },
    comuna: {type:String, maxlength:50, required:true},
    ciudad: {type:String, maxlength:50, required:true},
    region: {type:String, maxlength:50, required:true},
    password: {type:String, minlength:9, maxlength:100, required:true},
    imagen: {type:String, required: true, default:"https://us.123rf.com/450wm/thesomeday123/thesomeday1231709/thesomeday123170900021/85622928-icono-de-perfil-de-avatar-predeterminado-marcador-de-posici%C3%B3n-de-foto-gris-vectores-de-ilustraciones.jpg?ver=6"}
});

const Usuario = mongoosse.model('Usuario',usuarioSchema);

export default Usuario;