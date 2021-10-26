<template>
  <div id="app">  
    <b-container class="bv-example-row">
      <b-row align-h="between" align-v="center">
        <b-col>
          <div class= "float-left">
            <b-button href="/" variant= "basic" class="btn-img" size="lg"></b-button>
          </div>
        </b-col>
      <b-col>
        <!-- Vista Admin -->
        <div id="nav" class= "float-right" v-if="esAdministrador && logueado">
          <!-- aca accesos superiores -->
          <router-link to="/">Home</router-link> |
           <router-link to="/about">About</router-link> |
          <router-link to="/blog">Danos tu Opinión</router-link> |
          <router-link to="/admin">Admin</router-link> |
          <div class="buttonLogout">
            <b-button  @click="Logout()"  pill class="botonLogout topRow">Cerrar sesión</b-button>
          </div>
          
        </div>
        <!-- Vista Cliente -->
        <div id="nav" class= "float-right" v-if="esCliente && logueado">
          <!-- aca accesos superiores -->
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/blog">Danos tu Opinión</router-link> |
          <router-link to="/CuentaUsuario">Mi perfil</router-link> | 
          <b-button  @click="Logout()"  pill class="botonLogout topRow ">Cerrar sesión <b-icon-person></b-icon-person> </b-button>

          
        </div>
        
        <!-- Vista sin loguear -->
        <div id="nav" class= "float-right"  v-if ="logueado === null ">
          <!-- aca accesos superiores -->
          <router-link to="/">Home</router-link > |
           <router-link to="/about">About</router-link> |
          <router-link to="/carrito">Carrito</router-link> |
          <router-link to="/blog">Danos tu Opinión</router-link> |
          <router-link to="/register">Registrate</router-link>|
          <b-button variant= "succes" router-link to="/login">Iniciar Sesión <b-icon-person-circle></b-icon-person-circle>  </b-button>
          
        </div>
        
        </b-col>
      </b-row>
    </b-container>

    <router-view/>
  </div>
</template>


<script>
export default {

  mounted() {
    this.$store.dispatch("obtener_productos");
  },
  created(){
    //console.log("Estado actual usuario: "+this.$store.state.usuario);
    this.$store.dispatch("autoLogin");
    //console.log("Estado actual usuario parte 2: "+this.$store.state.usuario.rol);
    
  },

  computed:{
    logueado(){
      //console.log(this.$store.state.usuario);
      return this.$store.state.usuario;
    },
    
    
    esAdministrador(){
      return this.$store.state.usuario && this.$store.state.usuario.rol == 'admin'; 
    },

    esCliente(){
      return this.$store.state.usuario && this.$store.state.usuario.rol == 'Cliente'; 
    },

  },
  
  methods:{
    Logout(){
      this.$store.dispatch("salir");
      this.$router.push({name:'Home'});
    },
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.btn-img{
    background-image: url(https://i.ibb.co/Rg9yp6V/Logo-MEssa.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 40px;
    width: 150px;

  }
</style>
