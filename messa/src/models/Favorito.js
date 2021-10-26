import mongoosse,{Schema} from 'mongoose';

const favoritoSchema = new Schema({    
    nombre: {type:String, minlength:8, maxlength:200, required:true },
    foto: {type:String, required: true, default:"https://us.123rf.com/450wm/thesomeday123/thesomeday1231709/thesomeday123170900021/85622928-icono-de-perfil-de-avatar-predeterminado-marcador-de-posici%C3%B3n-de-foto-gris-vectores-de-ilustraciones.jpg?ver=6"},
    talla: {type:String, minlength:1, maxlength:4, unique:false, required: true},      
});

const Favorito = mongoosse.model('Favorito',favoritoSchema);

export default Favorito;