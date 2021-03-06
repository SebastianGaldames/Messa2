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
      busDispo: false,
      filtroC: "", //Filtro para categoria
      filtroG: "", //Filtro para genero
      filtroT: "", //Filtro para temporada
      filtroP: "", //Filtro para precio
      filtroMinP: 0, //Filtro para precio minimo
      filtroMaxP: 0, //Filtro para precio maximo
      //Booleanos para comprobar si hay filtros activos
      existeFiltro: false,
      existeFiltroC: false,
      existeFiltroG: false,
      existeFiltroT: false,
      existeFiltroP: false
    }
  
  },
  getters :{
    getFiltro(state){
      return state.filter.existeFiltro;
    },
    productosFiltrados(state){
      //Caso cuando solamente es una busqueda sin filtro
      if(state.filter.busDispo===true && !state.filter.existeFiltro){
        
        return state.productos.filter(producto => producto.nombre.toLowerCase().includes(state.filter.consulta));
        //return productos.filter(producto => producto.nombre.toLowerCase().includes(state.filter.consulta));
      }
      //Caso cuando es una busqueda con filtro de categoria
      else if(state.filter.busDispo===true && state.filter.existeFiltro){
        //Cuando hay un filtro de categoria
        if(state.filter.existeFiltroC){
          return state.productos.filter(producto => producto.categoria.includes(state.filter.filtroC) && producto.nombre.toLowerCase().includes(state.filter.consulta));
        }
        //Cuando hay un filtro de genero
        else if(state.filter.existeFiltroG){
          return state.productos.filter(producto => producto.genero.includes(state.filter.filtroG) && producto.nombre.toLowerCase().includes(state.filter.consulta));
        }
        //Cuando hay un filtro de temporada
        else if(state.filter.existeFiltroT){
          return state.productos.filter(producto => producto.temporada.includes(state.filter.filtroT) && producto.nombre.toLowerCase().includes(state.filter.consulta));
        }
        //Cuando hay un filtro de precio
        else if(state.filter.existeFiltroP){
          return state.productos.filter(producto => producto.precio>state.filter.filtroMinP && producto.precio<=state.filter.filtroMaxP && producto.nombre.toLowerCase().includes(state.filter.consulta));
        }
      }
      //Caso cuando no hay busqueda ni filtro
      else{
        //Cuando hay un filtro de categoria
        if(state.filter.existeFiltroC){
          return state.productos.filter(producto => producto.categoria.includes(state.filter.filtroC) && producto.nombre.toLowerCase().includes(state.filter.consulta));
        }
        //Cuando hay un filtro de genero
        else if(state.filter.existeFiltroG){
          return state.productos.filter(producto => producto.genero.includes(state.filter.filtroG) && producto.nombre.toLowerCase().includes(state.filter.consulta));
        }
        //Cuando hay un filtro de temporada
        else if(state.filter.existeFiltroT){
          return state.productos.filter(producto => producto.temporada.includes(state.filter.filtroT) && producto.nombre.toLowerCase().includes(state.filter.consulta));
        }
        //Cuando hay un filtro de precio
        else if(state.filter.existeFiltroP){
          return state.productos.filter(producto => producto.precio>state.filter.filtroMinP && producto.precio<=state.filter.filtroMaxP && producto.nombre.toLowerCase().includes(state.filter.consulta));
        }
        return state.productos;
      }
    },
    //Permite mostrar todos los productos
    allProducts: (state) => state.productos,
    //Muestra el texto buscado
    textoBuscado(state){
      return state.filter.consulta;
    }
  },
  actions:{
    //Obtenemos los productos de la base de datos
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
    //Para limpiar todos los filtros
    SET_LIMPIAR(state){
      state.filter.filtroC = ""; 
      state.filter.filtroG = "";
      state.filter.filtroT = "";
      state.filter.filtroP = "";
      state.filter.filtroMinP = 0;
      state.filter.filtroMinP = 0;
      state.filter.existeFiltro = false;
    },
    //Para filtrar por categoria
    SET_FILTROC(state, filtrado){
      state.filter.filtroC = filtrado;
      state.filter.filtroG = "";
      state.filter.filtroP = "";
      state.filter.filtroT = "";
      state.filter.filtroMinP = 0;
      state.filter.filtroMinP = 0;
      state.filter.existeFiltro = true;
      state.filter.existeFiltroG = false;
      state.filter.existeFiltroT = false;
      state.filter.existeFiltroP = false;
      state.filter.existeFiltroC = true;
      
    },
    //Para filtrar por genero
    SET_FILTROG(state, filtrado){
      state.filter.filtroC = "";
      state.filter.filtroT = "";
      state.filter.filtroP = "";
      state.filter.filtroMinP = 0;
      state.filter.filtroMinP = 0;
      state.filter.filtroG = filtrado;
      state.filter.existeFiltro = true;
      state.filter.existeFiltroP = false;
      state.filter.existeFiltroC = false;
      state.filter.existeFiltroT = false;
      state.filter.existeFiltroG = true;
    },
    //Para filtrar por temporada
    SET_FILTROT(state, filtrado){
      state.filter.filtroC = "";
      state.filter.filtroG = "";
      state.filter.filtroP = "";
      state.filter.filtroMinP = 0;
      state.filter.filtroMinP = 0;
      state.filter.filtroT = filtrado;
      state.filter.existeFiltro = true;
      state.filter.existeFiltroP = false;
      state.filter.existeFiltroG = false;
      state.filter.existeFiltroC = false;
      state.filter.existeFiltroT = true;
    },
    //Para filtrar por rango de precio
    SET_FILTROP(state, filtrado){
      state.filter.filtroC = "";
      state.filter.filtroG = "";
      state.filter.filtroT = "";
      state.filter.filtroP = filtrado.filtro;
      state.filter.filtroMinP = filtrado.min;
      state.filter.filtroMaxP = filtrado.max;
      state.filter.existeFiltro = true;
      state.filter.existeFiltroP = true;
      state.filter.existeFiltroG = false;
      state.filter.existeFiltroC = false;
      state.filter.existeFiltroT = false;
    },
    //Se hace un set para indicar que el buscador esta disponible
    SET_BUSDISPO(state, dispo){
      if(dispo){
        state.filter.busDispo = dispo;
      }
    },
    //Se hace un set de lo que se desea buscar
    SET_QUERY (state, consulta){
      state.filter.consulta = consulta;
    },
    SET_DISPONIBLE (state){
      state.filter.Disponible =true;  
    },
    //Set de los productos
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