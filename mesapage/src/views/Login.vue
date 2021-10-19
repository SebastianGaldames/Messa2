<template>
  <div>
    <NavBar>
    </NavBar>
    <div class="col col-md-5" style="width : 500px">
      <b-col>
        <b-row>
          <div class= "float-left">
            <b-button href="/" variant= "basic" class="btn-img" size="lg"></b-button>
          </div>
        </b-row>
        <b-row>barrita iniciar sesion</b-row>
        <b-row>Usuario</b-row>
        <b-row>
          <b-form-input
            input type="text" v-model="nombreUsuario"
            placeholder="Ingresa tu nombre de usuario"
          ></b-form-input>
        </b-row>
        <b-row>Contraseña</b-row>
        <b-row>
            <b-form-input
              input type="password" id="text-password" aria-describedby="password-help-block " v-model="password"
            ></b-form-input>
        </b-row>
        <b-row>
           <b-button  @click="busqueda()"  class="botonIniciarSesion">Iniciar sesión
             
           </b-button>
        </b-row>
        <b-row>
          <b-col>
            <b-link href="#foo">¿No tienes cuenta?</b-link>
          </b-col>
          <b-col>
            <b-link href="#foo">Regístrate
            </b-link>
          </b-col>
          
        </b-row>
      </b-col>
    </div>
      
  </div>

</template>

<script>import NavBar from '../components/NavBar.vue';

  export default{
      components: {
        NavBar
      }
  }
</script>

<style scoped>
.botonIniciarSesion{
  background-color: #1c335f
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

<script>
    import axios from 'axios'
    // class Usuario {
    //     constructor(nombre,rut,nombreUsuario,email,telefono,direccion,numero,comuna,ciudad,region,password,imagen){
    //         this.nombre= nombre;
    //         this.rut= rut;
    //         this.nombreUsuario= nombreUsuario;
    //         this.email= email;
    //         this.telefono= telefono;
    //         this.direccion= direccion;
    //         this.numero= numero;
    //         this.comuna= comuna;
    //         this.ciudad= ciudad;
    //         this.region= region;
    //         this.password = password;
    //         this.imagen= imagen;
    //     }
    //}


    export default {
        data() {
            return {
                
                nombreUsuario:'',
                password : ''
            }
        },
         methods:{
           busqueda(Usuario){
               axios.post('http://localhost:4000/api/Usuario/login', {nombreUsuario: this.nombreUsuario, password: this.password})
               .then(respuesta =>{
                  return respuesta.data;
               })
               .then(data =>{
                 this.$store.dispatch("guardarToken",data.tokenReturn);
                 this.$router.push({name:'CuentaUsuario'});
               })
               .catch(function(error){
                  console.log(error);
               });
            },
         }
        
    }
</script>
