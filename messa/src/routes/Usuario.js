import routerx from 'express-promise-router';
import UsuarioController from '../controllers/UsuarioController';

const router = routerx();
//Rutas para cada uno de los metodos del controlador de usuario
router.post('/add',UsuarioController.add);
router.get('/query',UsuarioController.query);
router.get('/list',UsuarioController.list);
//router.put('/update',UsuarioController.update);
router.delete('/remove/:id',UsuarioController.remove);
router.post('/login',UsuarioController.login);

export default router;