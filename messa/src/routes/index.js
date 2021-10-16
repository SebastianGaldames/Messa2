import routerx from 'express-promise-router';
import productoRouter from './Producto';
import usuarioRouter from './Usuario';

const router = routerx();

router.use('/Producto',productoRouter);
router.use('/Usuario',usuarioRouter);
export default router;