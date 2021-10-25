import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      libre: true
    }
  
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      libre:true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
    
  {
    path: '/busqueda',
    name: 'Busqueda',
    meta: {
      libre:true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ResultadoBusqueda.vue')

  },
  {
    path: '/carrito',
    name: 'Carrito',
    meta: {
      libre : true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Carrito.vue')

  },
  {
    path: '/admin',
    name: 'Admin',
    meta: {
      admin : true,
      //Cliente : true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue')

  },
  {
    path: '/blog',
    name: 'Blog',
    meta: {
      libre:true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue')

  }
  ,
  {
    path: '/login',
    name: 'Login',
    meta: {
      libre:true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')

  },
  {
    path: '/register',
    name: 'Registro',
    meta: {
      libre:true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FormRegistro.vue')

  },
  {
    path: '/CuentaUsuario',
    name: 'cuentaUsuario',
    meta: {
      //Administrador : true,
      libre: true
      //Cliente : true
    },

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VistaCuentaUsuario.vue')

  },
  ,
  {
    path: '/pago',
    name: 'pago',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pago.vue')

  },
  {
    path: '/pagoAceptado',
    name: 'pagoAceptado',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PagoAceptado.vue')

  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from,next)=> {
  if(to.matched.some(record => record.meta.libre)){
    next();
  }else if(store.state.usuario && store.state.usuario.rol == 'admin'){
    if(to.matched.some(record => record.meta.admin)){
      next();
    };

  } else if(store.state.usuario && store.state.usuario.rol == 'Cliente'){
    if(to.matched.some(record => record.meta.Cliente)){
      next();
    };
  }
  
})
export default router
