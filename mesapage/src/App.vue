<template>
  <div id="app">  
    <b-container class="bv-example-row" fluid>
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
           <router-link to="/about">Nosotros</router-link> |
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
          <router-link to="/about">Nosotros</router-link> |
          <router-link to="/blog">Danos tu Opinión</router-link> |
          <router-link to="/CuentaUsuario">Mi perfil</router-link> | 
          <b-button  @click="Logout()"  pill class="botonLogout topRow ">Cerrar sesión <b-icon-person></b-icon-person> </b-button>

          
        </div>
        
        <!-- Vista sin loguear -->
        <div id="nav" class= "float-right"  v-if ="logueado === null ">
          <!-- aca accesos superiores -->
          <router-link to="/">Home</router-link > |
           <router-link to="/about">Nosotros</router-link> |
          <router-link to="/blog">Danos tu Opinión</router-link> |
          <b-button variant= "succes" router-link to="/login">Iniciar Sesión <b-icon-person-circle></b-icon-person-circle>  </b-button>
          
        </div>
        
        </b-col>
      </b-row>
    </b-container>

    <router-view/> 
      
    <div id="rectangle"> 
      <b-container fluid>
        <b-row  align-self="stretch" >
          <b-col  align-self="stretch">
            <h6 id="letras" align="left"><br><br><br>BUSCAR TIENDA<br><br>
                                                    HAZTE MIEMBRO<br></h6>
            <h6 id="letras" align="left"><br><br><br><br><br><br><br><br><br><br><br><br>Chile © 2021 Messa, Inc. Todos los derechos reservados</h6> 
          </b-col> 
          <b-col align-self="stretch">

            <h6 id="letras" align="left"><br><br><br>Estado de mi orden<br><br>
                                                      Envios y entregas<br><br> 
                                                      Devoluciones<br><br> 
                                                      Opciones de pago<br><br>
                                                      Chat Contacto<br></h6>
          </b-col> 
          <b-col  align-self="stretch" >

            <h6 id="letras" align="left"><br><br><br>ACERCA DE MESSA<br><br>
                                                      Noticias<br><br> 
                                                      Empleos<br><br> 
                                                      Inversionistas<br><br>
                                                      Sustentabilidad<br></h6>
          </b-col>
        </b-row>
      </b-container>
    </div>


  </div>
</template>


<script>
export default {

  mounted() {
    this.$store.dispatch("obtener_productos");
  },
  created(){
    this.$store.dispatch("autoLogin");
  },

  computed:{
    logueado(){
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
    /**
     * @author Francisco Quevedo
     * Cierra la sesion activa
     */
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


  #rectangle{
    width:100%;
    height:320px;
    background-color: #1c335f;
    margin-top: 10%;
    margin-left: 0%;
    margin-right: 0%;
  } 
  #letras {
    color: #ffff; 
    font-size: 14px;
    
  }

</style>
