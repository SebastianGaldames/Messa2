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
        <div id="nav" class= "float-right">
          <!-- aca accesos superiores -->
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/busqueda">Buscar</router-link> |
          <router-link to="/carrito">Carrito</router-link> |
          <router-link to="/blog">Danos tu Opinión</router-link> |
          <router-link to="/admin">Admin</router-link> |
          <router-link to="/login">Iniciar Sesión</router-link>
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
