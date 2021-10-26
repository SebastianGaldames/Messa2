import jwt from 'jsonwebtoken';
import models from '../models';

/**
 * @author Francisco Quevedo
 * @param {*} token 
 * @returns 
 * retorna el token y el rol del usuario del token
 */
async function checkToken(token){
    let __id = null;
    try{
        const {_id}= await jwt.decode(token);
        __id = _id;
    } catch (e){
        return false;
    }
    const user = await models.Usuario.findOne({_id:__id,estado:1});
    if (user){
        const token = jwt.sign({_id:__id},'clavesecretaparagenerartoken',{expiresIn:'1d'});
        return {token,rol:user.rol};
    } else {
        return false;
    }
}

export default {
    /**
     * @author Francisco Quevedo
     * @param {*} _id 
     * @param {*} rol 
     * @param {*} nombreUsuario 
     * @returns token
     * Codifica el token el cual contiene el id, rol y nombre de usuario del usuario que se conecta
     */
    encode: async (_id, rol, nombreUsuario) => {
        const token = jwt.sign({_id:_id,rol:rol,nombreUsuario: nombreUsuario},'clavesecretaparagenerartoken',{expiresIn: '1d'});
        return token;
    },
    /**
     * @author Francisco Quevedo
     * @param {*} token 
     * @returns 
     * retorna el token decodificado
     */
    decode: async (token) => {
        try {
            const {_id} = await jwt.verify(token,'clavesecretaparagenerartoken');
            const user = await models.Usuario.findOne({_id,estado:1});
            if (user){
                return user;
            } else{
                return false;
            }
        } catch (e){
            const newToken = await checkToken(token);
            return newToken;
        }
    }
}