<template>
  <div>
    <NavBar>
    </NavBar>
  
      <b-col>
        <b-row>
          logo messa
        </b-row>
        <b-row>barrita iniciar sesion</b-row>
        <b-row>Usuario</b-row>
        <b-row>
          <b-form-input
            placeholder="Ingresa tu nombre de usuario"
          ></b-form-input>
        </b-row>
        <b-row>Contraseña</b-row>
        <b-row>
            <b-form-input
              type="password" id="text-password" aria-describedby="password-help-block"
            ></b-form-input>
        </b-row>
        <b-row>
           <b-button class="botonIniciarSesion">Iniciar sesión</b-button>
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
</style>