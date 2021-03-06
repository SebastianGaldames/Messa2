import models from "../models";
import bcrypt from 'bcryptjs';
import token from '../services/token';
export default {
    //Metodo para crear un usuario (registro)
    add: async (req,res,next) =>{
        try{
            req.body.password = await bcrypt.hash(req.body.password,10);
            const reg = await models.Usuario.create(req.body);
            res.status(200).json(reg);
        } catch (e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    //Metodo para obtener un usuario mediante _id
    query: async (req,res,next) =>{
        try {
            const reg=await models.Usuario.findOne({_id:req.query._id});
            if(!reg){
                res.status(404).send({
                    message: 'El registro no existe'
                });
            }
            else{
                res.status(200).json(reg);
            }
        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    //Metodo para listar a todos los usuarios registrados
    list: async (req,res,next) =>{
        try {
            const reg= await models.Usuario.find({});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    update: async (req,res,next) =>{
        try {
            const reg0 = await models.Usuario.findOne({_id:req.body._id});  
            const reg= await models.Usuario.findByIdAndUpdate({_id:req.body._id},{compras:req.body.compras});
                res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    remove: async (req,res,next) =>{
        try {
            const{id} = req.params;
            const reg = await models.Usuario.findByIdAndDelete({_id: id});
            res.status(200).json(reg);

        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    //Metodo login que busca por nombreUsuario y compara la contrase??a encriptada de la BD 
    login: async (req,res,next) => {
        try{
            let user = await models.Usuario.findOne({nombreUsuario: req.body.nombreUsuario});
            if(user){//existe un usuario con ese nombre de usuario
                console.log(req.body.email + "email");
                console.log("email");
                let match = await bcrypt.compare(req.body.password,user.password); //comparamos si son iguales las contrase??as
                if(match){
                    let tokenReturn = await token.encode(user._id, user.rol, user.nombreUsuario);
                    
                    res.status(200).json({user, tokenReturn});
                } else{
                    res.status(404).send({
                        message: 'password incorrecta'
                    });
                }
            } else{
                res.status(404).send({
                    message: 'No existe este usuario'
                });
            }

        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    }
}