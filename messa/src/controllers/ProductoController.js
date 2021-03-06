import models from "../models";
export default {
    //Metodo para añadir un producto
    add: async (req,res,next) =>{
        try{
            const reg = await models.Producto.create(req.body);
            res.status(200).json(reg);
        } catch (e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    //Metodo para obtener un producto mediante _id
    query: async (req,res,next) =>{
        try {
            const reg=await models.Producto.findOne({_id:req.query._id});
            if(!reg){
                res.status(404).sed({
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
    //Metodo para listar todos los productos actuales en la BD
    list: async (req,res,next) =>{
        try {
            const reg= await models.Producto.find({});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    //Metodo para actualizar un producto en concreto mediante el _id
    update: async (req,res,next) =>{
        try {
            const reg= await models.Producto.findByIdAndUpdate({_id:req.body._id},{nombre:req.body.nombre,precio:req.body.precio,
                stockS:req.body.stockS,stockM:req.body.stockM,stockL:req.body.stockL,stockXL:req.body.stockXL,
                descripcion:req.body.descripcion,categoria:req.body.categoria,genero:req.body.genero,temporada:req.body.temporada,
                disponible:req.body.disponible,imagen:req.body.imagen});
                res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    //Metodo para eliminar un producto mediante _id
    remove: async (req,res,next) =>{
        try {
            const{id} = req.params;
            const reg = await models.Producto.findByIdAndDelete({_id: id});
            res.status(200).json(reg);

        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    //Metodo para activar un producto
    activate: async (req,res,next) =>{
        try {
            const reg = await models.Producto.findByIdAndDelete({_id:req.body._id},{estado:1});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    //Metodo para desactivar un producto
    deactivate: async (req,res,next) =>{
        try {
            const reg = await models.Producto.findByIdAndDelete({_id:req.body._id},{estado:0});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    }
}