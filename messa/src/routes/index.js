// import routerx from 'express-promise-router';
// import productoRouter from './Producto';
// import usuarioRouter from './Usuario';

const routerx = require('express-promise-router');
const productoRouter = require('./Producto');
const usuarioRouter = require('./Usuario');

const router = routerx();
//Rutas para los modelos
router.use('/Producto',productoRouter);
router.use('/Usuario',usuarioRouter);

module.exports = router;