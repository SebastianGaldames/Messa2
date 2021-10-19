<template>

  <div>
    <NavBar>
    </NavBar>

    <div class="contenedorUsuario">
    <b-row>
      <b-col>
        <div class="icondiv">
          <b-card-img src="https://i.ibb.co/18JfHvf/585e4beacb11b227491c3399-4.png" alt="Image" ></b-card-img>
        </div>
      </b-col>
      <b-col class="margenLetrasSup">
      <b-row>
        HOLA
      </b-row>
      <b-row class="margenLetrasSup margenIzq">
        <b>
          USUARIO5472
        </b>
      </b-row>
      </b-col>
    </b-row>
    </div>
    <div class="contenedorTabla">
    <b-row>
      <b-card no-body>
    <b-tabs pills card vertical  active-nav-item-class="font-weight-bold text-dark bg-light" >
      <b-tab title="Datos personales" active ><b-card-text>
        <b-row class="encabezado">
          Datos Personales
        </b-row>
        <b-row>
          <b-col class="formato1">Nombre:</b-col>
          <b-col class="formato1">Apellido Paterno:</b-col>
          <b-col class="formato1">Apellido Materno:</b-col>
        </b-row>
        <b-row>
          <b-col class="formato2">
            NombreUsuario  
          </b-col>
          <b-col class="formato2">
            ApellidoPaternoUsuario 
          </b-col>
          <b-col class="formato2">
            ApellidoMaternoUsuario 
          </b-col>
        </b-row>
        <b-row>
              <!-- los datos mostrados aca deberian ser los de la cuenta no sujetos a modificacion -->
          <b-col class="formato3">Usuario:</b-col>
          <b-col class="formato3">Teléfono:</b-col>
          <b-col class="formato3">E-mail:</b-col>
        </b-row>
        <b-row>
          <b-col class="formato4">IDUsuario</b-col>
          <b-col class="formato4">TelefonoUsuario</b-col>
          <b-col class="formato4">E-mailUsuario</b-col>
        </b-row>
        <b-row align-v="end">
          <b-col cols="4">
            <b-button class="colorBoton configBoton">Guardar Cambios</b-button>
          </b-col>
        </b-row>
      </b-card-text></b-tab>
      <b-tab title="Cambiar mi contraseña"><b-card-text>
        <b-row class="encabezado2" >
            Cambia mi contraseña
        </b-row>
        <b-row class="formato5">
          Contraseña actual
        </b-row>
        <b-row>
          <div  class="aInput">
            <b-form-input
              type="password" id="text-password" aria-describedby="password-help-block"
            ></b-form-input>
            </div>
        </b-row>
        <b-row class="formato5">
          Nueva Contraseña
        </b-row>
        <b-row>
            <div class="aInput">
            <b-form-input
              type="password" id="text-password" aria-describedby="password-help-block"
            ></b-form-input>
            </div>
        </b-row>
        <b-row align-v="end">
          <b-col cols="4">
            <b-button class="colorBoton configBoton2">Cambiar contraseña</b-button>
          </b-col>
        </b-row>
        </b-card-text>
        </b-tab>
      <b-tab title="Mis Compras"><b-card-text>
        <b-row align-h="around">
          <b-col class="encabezado3">Mis Compras</b-col>
        </b-row>
        <b-row>
          <div>
            <b-table striped hover :items="items"></b-table>
            </div>
        </b-row>
        <b-row align-v="end">
          <b-col cols="4">
            <b-button class="colorBoton configBoton3">Ver más compras</b-button>
          </b-col>
        </b-row>
      </b-card-text></b-tab>
      <b-tab title="Lista de deseos"><b-card-text>
          <b-row class="encabezado margenIzq">
            Mi Lista de deseos
          </b-row>
        <b-row>
            <div>
              <b-table :items="items" :fields="fields" :tbody-tr-class="rowClass"></b-table>
            </div>  
        </b-row>
        <b-row>
            <b-button class="colorBoton configBoton4">Explorar más productos</b-button>
        </b-row>
      </b-card-text></b-tab>
      <b-tab title="Cerrar Sesión"></b-tab>
    
    </b-tabs>
  </b-card>
    </b-row>  

    </div>

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
            ],
            fields: ['first_name', 'last_name', 'age'],
              items: [
                { age: 40, first_name: 'Dickerson', last_name: 'Macdonald', status: 'awesome' },
                { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                { age: 89, first_name: 'Geneva', last_name: 'Wilson' }
              ]
          }
        },
      methods: {
        rowClass(item, type) {
          if (!item || type !== 'row') return
          if (item.status === 'awesome') return 'table-success'
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

  .icondiv{
    text-align: end;
    width: 70px;
    margin-top: 1%;
    margin-bottom: 1%;
    margin-left: 1%;
  }

  .contenedorUsuario{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 1%;
    border: transparent;
    
  }

  .contenedorTabla{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    
  }

.color{
  background-color: #1c335f;
}

.margenLetrasSup{
  margin-left: -83%;
  margin-top: 1%;
}

.margenIzq{
  margin-left: -94%;
}

.margenIzq2{
  margin-left: 10%;
}

.formato1{
  margin-top: -2%;
  margin-left: -15%;
  font-size: 15px;
}

.formato2{
  margin-left: -11%;
}

.formato3{
  margin-left: -15%;
  font-size: 15px;
  margin-top: 1%;
}

.formato4{
  margin-left: -11%;
}

.formato5{
  margin-top: 1%;
  font-size: 15px;
}

.configBoton{
  margin-left: 270%;
  margin-top: -5%;
  width: 35%;
}

.configBoton2{
  margin-left: 265%;
  margin-top: -15%;
  width: 40%;
}

.configBoton3{
  margin-left: 270%;
  margin-top: 10%;
  width: 35%;
}

.configBoton4{
  margin-left: 80%;
  margin-top: 4%;
  width: 15%;
}

.encabezado{
  margin-left: 10%;
  margin-bottom: 3%;
  font-size: 20px;
}

.encabezado2{
  margin-left: 1%;
  font-size: 20px;
}

.encabezado3{
  margin-left: -90%;
  margin-bottom: 3%;
  font-size: 20px;
}


.tabs-tab_active_color{
  color: white !important;
  background-color: #1c335f !important;
}

.aInput{
  width: 20%;
  margin-left: 10%;
}
</style>



<!--

.tab-content > .tab-pane {
    border: 1px solid;
    border-left: 0px none;
  }

<template>
<div>

    <h1>Sobre el proyecto</h1>
    
  </div>
</template>


<script>

  export default {
    
    data() {
      return {
      
      }
    },
      
  }

</script> 
-->