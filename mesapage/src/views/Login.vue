<template>
  <div>
    <NavBar>
    </NavBar>
  
      <b-col class="contenedor">
        <b-row class= "topRow">
          <div class= "float-left"> 
            <b-card-img src="https://i.ibb.co/Rg9yp6V/Logo-MEssa.png" alt="Image" class="rounded-0 logo"></b-card-img>
          </div>
        </b-row>
        <b-row class="barra" align-h="center" align-v="center">
            <b-col cols="5">
              <b-row>
                <div class="icondiv">
                  <b-card-img src="https://i.ibb.co/18JfHvf/585e4beacb11b227491c3399-4.png" alt="Image" class="icon"></b-card-img>
                </div>
              </b-row>
            </b-col>
            <b-col cols="7">
              <b-row>
                <div class="textdiv"><h3>
                  Iniciar Sesión
                  </h3>
                </div>
              </b-row>
            </b-col>
        </b-row>
        <b-row class="centerRow">
          <div>
            Usuario:
          </div>
        </b-row>
        <b-row>
          <b-form-input
            placeholder="Ingrese su nombre de usuario" class="centerRow userInput"
            input type="text" v-model="nombreUsuario"
          ></b-form-input>
        </b-row>
        <b-row class="centerRow passInput">
          <div>
            Contraseña:
          </div>
        </b-row>
        <b-row>
            <b-form-input
              input type="password" id="text-password" aria-describedby="password-help-block"
              class="userInput" placeholder="Ingrese su contraseña"
              v-model="password"
            ></b-form-input>
        </b-row>
        <b-row>
          <div class="buttonDiv">
            <b-button  @click="busqueda()"  pill class="botonIniciarSesion topRow">Iniciar sesión</b-button>
          </div>
          <div v-if ="errorM === 'No existe el usuario o las condiciones son incorrectas'"> 
            
            <b-alert show variant="danger">
            <h4 class="alert-heading">Error de credenciales</h4>
            <p>
              Usuario o contraseña invalidos.
            </p>
            <hr>
            <p class="mb-0">
              Revisa el ingreso correcto de tus datos!
            </p>
          </b-alert>
          
          </div>
          <div v-if ="errorM === 'Ocurrio un error con el servidor'"> 
            
            <b-alert show variant="danger">
            <h4 class="alert-heading">Error de Servidor</h4>
            <p>
              Servidor fuera de servicio
            </p>
            <hr>
            <p class="mb-0">
              Vuelve mas tarde!
            </p>
          </b-alert>
          

        </b-row>
        <div class="buttonDiv">
        <b-row>
          <b-col>
            ¿No tienes cuenta?
          </b-col>
          <b-col>
            <b-link href="/register">Regístrate
            </b-link>
          </b-col>
          
        </b-row>
        </div>
      </b-col>
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
    background-color: #1c335f;
}

.buttonDiv{
  margin: 25px 0px;
  margin-top: -10px;
  margin-bottom: 10%;
}
.userInput{
  margin-top: 10px;
}

.passInput{
  margin-top: 5%;
}

.btn-img{
    background-image: url(https://i.ibb.co/Rg9yp6V/Logo-MEssa.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 15px;
    width: auto;

  }
  
  .contenedor{
    width: 30%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    border: 2px solid #1c335f;
    
  }

  .topRow{
    margin-top: 10%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10%;
  }

  .centerRow{
    margin-left: auto;
    margin-right: auto;
  }

  .barra{
    background-color: #91B5F7;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 20px;
    margin-top: 40px;
  }

  .icon{
    height: 30px;
    width: auto;
  }

  .icondiv{
    text-align: end;
    width: max;
  }

  .textdiv{
    justify-self: start;
    width: max;
    text-align: start;
    padding-left: 5px;
    margin-top: 8px;
  }

  .userInput{
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    font-size: 12px;
    text-align: center;
    border-radius: 10px;
    border-color: transparent transparent #1c335f transparent;
  }

  .logo{
    height: 130%;
    width: auto;
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
                password : '',
                errorM: '',
                
            }
        },
         methods:{
           busqueda(Usuario){
               axios.post('http://localhost:4000/api/Usuario/login', {nombreUsuario: this.nombreUsuario, password: this.password})
               .then(respuesta =>{
                  return respuesta.data;
               })
               .then(data  =>{
                 this.$store.dispatch("guardarToken",data.tokenReturn);
                 console.log(data.tokenReturn);
                 if(this.$store.state.usuario.rol == 'admin'){
                   this.$router.push({name:'Home'});
                 }else{
                   this.$router.push({name:'cuentaUsuario'});
                 };
                 
               }) 
               .catch(error => {
                 this.errorM = null;
                 if(error.response.status == 404){
                   this.errorM = 'No existe el usuario o las condiciones son incorrectas';
                   console.log(this.errorM);
                 }else{
                   this.errorM = 'Ocurrio un error con el servidor';
                 }

                  console.log(error);
               }); 
            }
         }
        
    }
</script>
