<template>
  <div>
    <NavBar>
    </NavBar>
  
      <b-col class="contenedor">
        <b-row class= "topRow">
          <div class= "float-left">
            <b-button href="/" variant= "basic" class="btn-img" size="lg"></b-button>
          </div>
        </b-row>
        <b-row>
          <div class="barra">
            <p>
              Barrita iniciar sesion
            </p>
          </div>
        </b-row>
        <b-row class="centerRow">
          <p>
            Usuario:
          </p>
        </b-row>
        <b-row>
          <b-form-input
            placeholder="Ingresa tu nombre de usuario" class="centerRow"
          ></b-form-input>
        </b-row>
        <b-row class="centerRow topRow">
          <p>
            Contraseña:
          </p>
        </b-row>
        <b-row>
            <b-form-input
              type="password" id="text-password" aria-describedby="password-help-block"
            ></b-form-input>
        </b-row>
        <b-row>
            <div>
            <b-button pill class="botonIniciarSesion topRow">Iniciar sesión</b-button>
          </div>
        </b-row>
        <b-row>
          <b-col>
            ¿No tienes cuenta?
          </b-col>
          <b-col>
            <b-link href="#foo">Regístrate
            </b-link>
          </b-col>
          
        </b-row>
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

.btn-img{
    background-image: url(https://i.ibb.co/Rg9yp6V/Logo-MEssa.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 40px;
    width: 150px;

  }
  
  .contenedor{
    width: 30%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
    border: 2px solid #1c335f;
    
  }

  .topRow{
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
  }

  .centerRow{
    margin-left: auto;
    margin-right: auto;
  }

  .barra{
    background-color: #91B5F7;
    margin: auto;
    padding: 0px;
    
  }
</style>