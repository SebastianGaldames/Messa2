// import routerx from 'express-promise-router';
// import UsuarioController from '../controllers/UsuarioController';
// var cors = require('cors')

const routerx = require('express-promise-router');
const UsuarioController = require('../controllers/UsuarioController');
const cors = require('cors');

const router = routerx();
//Rutas para cada uno de los metodos del controlador de usuario
router.post('/add', cors(),UsuarioController.add);
router.get('/query', cors(),UsuarioController.query);
router.get('/list', cors(),UsuarioController.list);
//router.put('/update',UsuarioController.update);
router.delete('/remove/:id', cors(),UsuarioController.remove);
router.post('/login', cors(),UsuarioController.login);
module.exports = router;