<template>

  <div>
    <NavBar>
    </NavBar>

    <b-row>
      <b-col>
        aqui foto de perfil
      </b-col>
      <b-row>
        HOLA
      </b-row>
      <b-row>
        USUARIO5472
      </b-row>
    </b-row>
    <b-row>
      <b-card no-body>
    <b-tabs pills card vertical>
      <b-tab title="Datos personales" active><b-card-text>
        <b-row>
          Datos Personales
        </b-row>
        <b-row>
          <b-col>Nombre:</b-col>
          <b-col>Apellido Paterno:</b-col>
          <b-col>Apellido Materno:</b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-input
                placeholder="Nombre"
            ></b-form-input>  
          </b-col>
          <b-col>
            <b-form-input
                placeholder="Paterno"
            ></b-form-input>  
          </b-col>
          <b-col>
            <b-form-input
                placeholder="Materno"
            ></b-form-input>  
          </b-col>
        </b-row>
        <b-row>
              <!-- los datos mostrados aca deberian ser los de la cuenta no sujetos a modificacion -->
          <b-col>Usuario:</b-col>
          <b-col>Teléfono:</b-col>
          <b-col>E-mail:</b-col>
        </b-row>
        <b-row>
          <b-col>___________</b-col>
          <b-col>___________</b-col>
          <b-col>___________</b-col>
        </b-row>
        <b-row align-v="end">
          <b-col cols="4">
            <b-button class="colorBoton">Guardar Cambios</b-button>
          </b-col>
        </b-row>
      </b-card-text></b-tab>
      <b-tab title="Cambiar mi contraseña"><b-card-text>
        <b-row>
          <b-col>
            imagen candado
          </b-col>
          <b-col>
            Cambia mi contraseña
          </b-col>
        </b-row>
        <b-row>
          Contraseña actual
        </b-row>
        <b-row>
            <b-form-input
              type="password" id="text-password" aria-describedby="password-help-block"
            ></b-form-input>
        </b-row>
        <b-row>
          Nueva Contraseña
        </b-row>
        <b-row>
            <b-form-input
              type="password" id="text-password" aria-describedby="password-help-block"
            ></b-form-input>
        </b-row>
        <b-row align-v="end">
          <b-col cols="4">
            <b-button class="colorBoton">Cambiar contraseña</b-button>
          </b-col>
        </b-row>
        </b-card-text>
        </b-tab>
      <b-tab title="Mis Compras"><b-card-text>
        <b-row align-h="around">
          <b-col cols="4">Mis Compras</b-col>
        </b-row>
        <b-row>
          <div>
            <b-table striped hover :items="items"></b-table>
            </div>
        </b-row>
        <b-row align-v="end">
          <b-col cols="4">
            <b-button class="colorBoton">Ver más compras</b-button>
          </b-col>
        </b-row>
      </b-card-text></b-tab>
      <b-tab title="Mis Medios de Pago"><b-card-text>
        <b-row>
          <b-col>
            imagen tarjeta o billete
          </b-col>
          <b-col>
            Mis medios de Pago
          </b-col>
        </b-row>
        <b-row>
          Tarjetas Débito  
        </b-row>
        <b-row>
          <b-col>
            imagen busqueda documento
          </b-col>
          <b-col>
            no tienes tarjetas de débito disponibles
          </b-col>
        </b-row>
        <b-row>
          <b-button pill variant="outline-secondary">+ Agregar tarjeta de débito</b-button>
        </b-row>
        <b-row>
          Tarjetas Crédito  
        </b-row>
        <b-row>
          <b-col>
            imagen búsqueda documento
          </b-col>
          <b-col>
            no tienes tarjetas de Crédito disponibles
          </b-col>
        </b-row>
        <b-row>
          <b-button pill variant="outline-secondary">+ Agregar tarjeta de Crédito</b-button>
        </b-row>
        <b-row align-v="end">
          <b-col cols="4">
            <b-button class="colorBoton">Ver más compras</b-button>
          </b-col>
        </b-row>
      </b-card-text></b-tab>
      <b-tab title="Lista de deseos"><b-card-text>
        <b-row>
          <b-col>
            Imagen corazon
          </b-col>
          <b-col>
            Mi Lista de deseos
          </b-col>
        </b-row>
        <b-row>
          Tarjetas de productos agregados a la lista de deseos   
        </b-row> 
      </b-card-text></b-tab>
      <b-tab title="Cerrar Sesión" href="/register">
        </b-tab>
    
    </b-tabs>
  </b-card>
    </b-row>
    
  

  </div>
  
  

</template>

<script>import NavBar from '../components/NavBar.vue';

  export default{
      components: {
        NavBar,
        data() {
      return {
        items: [
          { Nombre_Producto: 'Polera', Talla: 'L', Unidades: 2 },
          { Nombre_Producto: 'Short', Talla: 'M', Unidades: 3 },
          { Nombre_Producto: 'Pantalon', Talla: 'L', Unidades: 1 },
          { Nombre_Producto: 'Pantalon', Talla: 'XL', Unidades: 2 }
        ]
      }
    }
  }
  }
</script>

<style scoped>
.colorBoton{
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

<template>