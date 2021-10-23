import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import decode from 'jwt-decode'
import router from '../router'

Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(Vuex)


var productos = () =>{
};

//to handle state
const state = {
  products: [],
  
  productos: productos(),
  filter: {
    consulta: '',
    Disponible:true,
    busDispo: false
  }

}

//to handle state
const getters = {
  productosFiltrados(state){
    let productos = state.productos.filter(producto => producto.Disponible === state.filter.Disponible);
    
    if(state.filter.busDispo===true){
      console.log(state.filter.consulta);

      return state.productos.filter(producto => producto.nombre.toLowerCase().includes(state.filter.consulta))
      //return productos.filter(producto => producto.nombre.toLowerCase().includes(state.filter.consulta));
    }
  },
  allProducts: (state) => state.productos,
  textoBuscado(state){
    return state.filter.consulta;
  }
}

//to handle actions
const actions = {
  obtener_productos({ commit }) {
    axios.get('http://localhost:4000/api/Producto/list')
        .then(response => {
            commit('SET_PRODUCTOS', response.data)
            //console.log(state.productos)
    })
  }
}

//to handle mutations
const mutations = {
  SET_BUSDISPO(state, dispo){
    if(dispo){
      state.filter.busDispo = dispo;
    }
  },
  SET_QUERY (state, consulta){
    state.filter.consulta = consulta;
  },
  SET_DISPONIBLE (state){
    state.filter.Disponible =true;  
  },
  SET_PRODUCTOS(state, productos) {
    //console.log(productos)
    state.productos = productos
    //console.log(state.productos)
  }
}


export default new Vuex.Store({
  state:{
    token:null,
    usuario:null
  },
  getters,
  actions:{
    guardarToken({commit}, token){
      commit("setToken", token)
      commit("setUsuario",decode(token))
      localStorage.setItem("token",token)
    },
    autoLogin({commit}){
      let token = localStorage.getItem("token");
      if(token){
        commit("setToken", token)
        commit("setUsuario", decode(token))
      }
      router.push({name: 'home'});
    },
    salir({commit}){
      commit("setToken", null);
      commit("setUsua", null);
      localStorage.removeItem("token");
      router.push({name: 'login'});
    }
  },
  mutations:{
    setToken(state, token){
      state.token = token;
    },
    setUsuario(state, usuario){
      state.usuario = usuario;
    }
  },
})