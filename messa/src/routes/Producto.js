// import routerx from 'express-promise-router';
// import ProductoController from '../controllers/ProductoController';
// var cors = require('cors')

const routerx = require('express-promise-router');
const ProductoController = require('../controllers/ProductoController');
const cors = require('cors')

const router = routerx();
//Rutas para cada uno de los metodos del controlador de producto
router.post('/add', cors(),ProductoController.add);
router.get('/query', cors(),ProductoController.query);
router.get('/list', cors(),ProductoController.list);
router.put('/update', cors(),ProductoController.update);
router.delete('/remove/:id', cors(),ProductoController.remove);
router.put('/activate', cors(),ProductoController.activate);
router.put('/deactivate', cors(),ProductoController.deactivate);

module.exports = router;