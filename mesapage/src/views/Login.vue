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
            <b-button pill class="botonIniciarSesion topRow">Iniciar sesión</b-button>
            <b-button  @click="busqueda()"  pill class="botonIniciarSesion topRow">Iniciar sesión</b-button>
          </div>
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

<script>
import NavBar from '../components/NavBar.vue';
import axios from 'axios'
  export default{
      components: {
        NavBar
      },
      data() {
            return {
                
                nombreUsuario:'',
                password : ''
            }
        },
         methods:{
           busqueda(){


               axios.post('http://localhost:4000/api/Usuario/login', {nombreUsuario: this.nombreUsuario, password: this.password})
               .then(respuesta =>{
                  this.$router.push({path:'/cuentaUsuario'})
                  .catch(err => {console.log(err)});
                  return respuesta.data;//'password correcta'
               })
               
               .catch(function(error){
                  console.log(error);
               });
            },
            
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