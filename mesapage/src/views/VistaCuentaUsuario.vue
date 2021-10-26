<template>

  <div>
    <NavBar>
    </NavBar>

    <div class="contenedorUsuario" >
    <b-row>
      <b-col>
        <div class="icondiv">
          <b-card-img src="https://i.ibb.co/18JfHvf/585e4beacb11b227491c3399-4.png" alt="Image" ></b-card-img>
        </div>
      </b-col>
      <b-col class="margenLetrasSup">
      <b-row class="margenLetrasSup margenIzqSup" >
        <b>
          Bienvenido {{nombreUsuario}}
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
          <b-col class="formato1">Nombre: </b-col>
          <b-col class="formato1">Usuario:</b-col>
          <b-col class="formato1">Rut:</b-col>

        </b-row>
        <b-row>
          <b-col class="formato2">{{usuarioA.nombre}}</b-col>
          <b-col class="formato2">{{usuarioA.nombreUsuario}}</b-col>
          <b-col class="formato4">{{usuarioA.rut}}</b-col>
          
        </b-row>
        <b-row>
              <!-- los datos mostrados aca deberian ser los de la cuenta no sujetos a modificacion -->
          
          <b-col class="formato3">Teléfono:</b-col>
          <b-col class="formato3">E-mail:</b-col>
          <b-col class="formato3">Direccion:</b-col>
        </b-row>
        <b-row>
          
          <b-col class="formato4">{{usuarioA.telefono}}</b-col>
          <b-col class="formato4">{{usuarioA.email}}</b-col>
          <b-col class="formato4">{{usuarioA.direccion}}</b-col>
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
          <div class="col order-12 col-md-2"></div>  <!-- ¡¡CUIDADO!! -->
          <div class="col order-12 col-md-6"> 
            <b-form-input id="formulario" v-model="textoBusqueda" size="sm" class="mr-sm-2" placeholder="Buscar"></b-form-input>
            <b-table striped hover :items="items" :fields="fields" :filter="textoBusqueda" :per-page="comprasXPagina" :current-page="pagActual">
                     <template #cell(actions)="row">
                        <b-button @click="verCompra(row.item)" size="sm" class="mr-1">
                            Ver compra
                        </b-button>
                        
                    </template>
                </b-table>
                <b-pagination v-model="pagActual" :total-rows="items.length" :per-page="comprasXPagina">

                </b-pagination>
               
            </div>
        
        </b-row>
        
      </b-card-text></b-tab>
      <b-tab title="Lista de deseos"><b-card-text>
        <b-row>
            <div>
            <b-card
              title="Mi Lista de deseos"              
              tag="article"
              class="xl"
            >
            <b-row cols="6">
              <b-col cols="4">Producto</b-col>
              <b-col>Talla</b-col>
              <b-col>Color</b-col>
              <b-col></b-col>
            </b-row>
            <b-row><DeseoCard></DeseoCard></b-row>
            </b-card> 
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
import DeseoCard from "./DeseoCard";
import axios from 'axios'


class Usuario{
  constructor(rol,nombre,rut,nombreUsuario,email,telefono,direccion,numero,comuna,ciudad,region,password,imagen){
            this.rol = rol;
            this.nombre= nombre;
            this.rut= rut;
            this.nombreUsuario= nombreUsuario;
            this.email= email;
            this.telefono= telefono;
            this.direccion= direccion;
            this.numero= numero;
            this.comuna= comuna;
            this.ciudad= ciudad;
            this.region= region;
            this.password = password;
            this.imagen= imagen;
        }
}
  export default{
    
    name: "VistaCuentaUsuario",
      props: ['data'],
      components: {
        NavBar, DeseoCard
        },
        
        
        
        data() {
          return {
            usuarioA : new Usuario(),
            nombreUsuario : this.$store.state.usuario.nombreUsuario,
            id : this.$store.state.usuario._id,
            comprasXPagina: 10,
            pagActual: 1,
            textoBusqueda:'',
            arrayUsuarios:[],
            items: [
              { Compra: 'Compra 1', Fecha: '24/10/2021', NumeroBoleta: '104088724' },
              { Compra: 'Compra 2', Fecha: '24/10/2021', NumeroBoleta: '104082724' },
            ],
            fields: [
                    {
                        key: 'Compra',
                        sortable: true
                    },
                    {
                        key: 'Fecha',
                        sortable: true
                    },
                    {
                        key: 'NumeroBoleta',
                        sortable: true
                    },
                    { key: 'actions', label: 'Actions' }
                ],

            all:{
              arrProduct:[
                {
                  nameProduct:"",
                  color: '',
                  description:'',
                  price:'',
                  quantity:'',
                }
              ]
            },
            
          }
        },
        created(){
          this.getU();
        },
      methods: {
        rowClass(item, type) {
          if (!item || type !== 'row') return
          if (item.status === 'awesome') return 'table-success'
        },
        /**
         * @author Francisco Quevedo
         * Ve los detalles de la compra seleccionada
         */
        verCompra(){
          alert("Detalle no disponible");
        },
        /**
         * @author Francisco Quevedo
         * Obtiene al usuario logueado en ese instante
         */
        getU(){
          let me = this;
          console.log(me.id);
          axios.get(`http://localhost:4000/api/Usuario/query?_id=${me.id}`).then(function (response){
                    //console.log(response.data);
                    me.usuarioA = response.data;
                    //console.log(me.usuarioA);
                    
                }).catch(function(error){
                    console.log(error);
                });
        },
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

.margenIzqSup{
  margin-left: -96%;
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