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



export default new Vuex.Store({

  state:{

    token:null,
    usuario:null,

    products: [],
    
    productos: productos(),
  
    filter: {
      consulta: "",
      Disponible:true,
      busDispo: false
    }
  
  },
  getters :{
    productosFiltrados(state){
      
      if(state.filter.busDispo===true){
        return state.productos.filter(producto => producto.nombre.toLowerCase().includes(state.filter.consulta))
        //return productos.filter(producto => producto.nombre.toLowerCase().includes(state.filter.consulta));
      }
      else{
        return state.productos;
      }
    },
    allProducts: (state) => state.productos,
    textoBuscado(state){
      return state.filter.consulta;
    }
  },
  actions:{
    obtener_productos({ commit }) {
      axios.get('http://localhost:4000/api/Producto/list')
          .then(response => {
              commit('SET_PRODUCTOS', response.data)
              //console.log(state.productos)
      })
    },

    /**
     * @author Francisco Quevedo
     * @param {*} {commit}
     * @param {*} token 
     * Guarda el token que contiene el nombre del usuario conectado y su rol
     */
    guardarToken({commit}, token){
      commit("setToken", token)
      commit("setUsuario",decode(token))
      localStorage.setItem("token",token)
    },
    /**
     * @author Francisco Quevedo
     * @param {*} {commit} 
     * Mantiene la sesion iniciada del usuario encontrado en el token
     */
    autoLogin({commit}){
      let token = localStorage.getItem("token");
      //console.log(token);
      if(token){
        //console.log(token + "    TOKEN ENCONTRADO!!!!!");
        commit("setToken", token)
        commit("setUsuario", decode(token))
      }else{
        console.log("No Logueado");
      }
    },
    /**
     * @author Francisco Quevedo
     * @param {*} {commit}
     * Desloguea al usuario en linea borrando el token guardado 
     */
    salir({commit}){
      commit("setToken", null);
      commit("setUsuario", null);
      localStorage.removeItem("token");
      router.push({name: 'login'});
    }
  },
  mutations:{
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
    },
    
    setToken(state, token){
      state.token = token;
    },
    setUsuario(state, usuario){
      state.usuario = usuario;
    }
  },
})