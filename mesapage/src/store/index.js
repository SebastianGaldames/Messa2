import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

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
  }

}

//to handle state
const getters = {
  productosFiltrados(state){
    if(state.filter.consulta.length > 2){
      let productos = state.productos.filter(producto => producto.disponible === state.filter.Disponible);
      return productos.filter(producto => producto.nombre.toLowerCase().includes(state.filter.consulta));
    }
    return state.productos;
  },
  allProducts: (state) => state.productos
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
  state,
  getters,
  actions,
  mutations,
})