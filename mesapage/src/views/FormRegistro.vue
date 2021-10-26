<template>

  <div>
    <NavBar>
    </NavBar>

      <b-col>
        <div class="centrado">
          <b-row>
            <b-col>
              <b>
                <h1>
                  <p style="color:#1c335f">
                    <u>
                      Ingresa tus datos
                    </u>
                  </p>
                </h1>
             </b>
           </b-col>
          </b-row>
        </div>
        <b-row class="contenedorNombre" align-v="center" align-h="start">
          <b-col cols="3" class="nombreCol">
            <div class= "espaciado">
              <b-row>
                * Nombre Completo:
              </b-row>
              <b-row>
                * Rut:
              </b-row>
              
            </div>
          </b-col>
          <b-col cols="5" class="nombreCol">
            <b-form-input
                input type="text" v-model="nombre"
                placeholder="Ingresa tu nombre completo"
                id="nombretool"
            ></b-form-input> 
            <b-tooltip show target="nombretool">*Campo Obligatorio<br>Debe tener un minimo de 8 caracteres</b-tooltip>
            <b-form-input
                placeholder="Ingresa tu rut"
                input type="text" v-model="rut"
                id="ruttool"
            ></b-form-input> 
            <b-tooltip show target="ruttool">*Campo Obligatorio</b-tooltip>
          </b-col> 
        </b-row>
        
        <div class="contenedorTotal">
        <b-row>
          <b-col class="ampliado">
            <h4>
            Datos dirección:
            </h4>
          </b-col>
          <b-col class="ampliado">
            <h4>
              Creación de usuario:
            </h4>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="ampliado2">
            Dirección:
          </b-col>
          <b-col>
            <b-form-input  class="ampliado3"
                placeholder="Ingresa tu dirección"
                input type="text" v-model="direccion"
            ></b-form-input>  
          </b-col>
          <b-col class="ampliado2">
            * Nombre de Usuario:
          </b-col>
          <b-col>
            <b-form-input class="ampliado4"
                placeholder="Ingresa tu nombre de usuario"
                input type="text" v-model="nombreUsuario"
                id="nombreDeUsuariotool"
            ></b-form-input>  
            <b-tooltip show target="nombreDeUsuariotool">*Campo Obligatorio<br>Debe tener un minimo de 8 caracteres y ser distinta a una creada</b-tooltip>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="ampliado2">
            Número:
          </b-col>
          <b-col>
            <b-form-input class="ampliado3"
                placeholder="Ingresa tu número de casa o departamento"
                input type="text" v-model="numero"
            ></b-form-input>  
          </b-col>
          <b-col class="ampliado2">
            * Clave:
          </b-col>
          <b-col>
            <b-form-input class="ampliado4"
              input type="password" id="text-password" aria-describedby="password-help-block"
               v-model="password"
            ></b-form-input>  
            <b-tooltip show target="text-password">*Campo Obligatorio<br>debe contener minimo 9 caracteres</b-tooltip>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="ampliado2">
            Comuna:
          </b-col>
          <b-col>
            <b-form-input class="ampliado3"
                placeholder="Comuna"
                input type="text" v-model="comuna"
            ></b-form-input>  
          </b-col>
          <b-col class="ampliado2">
            * Reingrese clave:
          </b-col>
          <b-col>
            <b-form-input class="ampliado4"
              type="password" id="text-password2" aria-describedby="password-help-block"
              
            ></b-form-input>  
            <b-tooltip show target="text-password2">*Campo Obligatorio<br>Debe ser igual a su clave ingresada</b-tooltip>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="ampliado2">
            Ciudad:
          </b-col>
          <b-col>
            <b-form-input class="ampliado3"
                placeholder="Ingresa tu ciudad"
                input type="text" v-model="ciudad"
                
            ></b-form-input>  
          </b-col>
          <b-col class="ampliado2">
            * E-mail:
          </b-col>
          <b-col>
            <b-form-input class="ampliado4"
                placeholder="Ingresa tu E-mail de contacto"
                input type="text" v-model="email" 
                id = "emailtool"
            ></b-form-input>  
            <b-tooltip show target="emailtool">*Campo Obligatorio</b-tooltip>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="ampliado2">
            Región:
          </b-col>
          <b-col>
            <b-form-input class="ampliado3"
                placeholder="Ingresa tu Región"
                input type="text" v-model="region"
            ></b-form-input>  
          </b-col>
          <b-col class="ampliado2">
            * Teléfono:
          </b-col>
          <b-col>
            <b-form-input class="ampliado4"
                placeholder="Ingresa tu teléfono"
                input type="text" v-model="telefono"
                id = "telefonotool"
            ></b-form-input> 
            <b-tooltip show target="telefonotool">*Campo Obligatorio<br>debe contener 9 digitos</b-tooltip> 
          </b-col>
        </b-row>
        <b-row>
          <b-col class="ampliado2">
            Sube tu foto de perfil:
          </b-col>
          <b-col>
            <b-row>
              <div class="icondiv">
                <b-card-img src="https://i.ibb.co/b66JTGg/pngegg.png" alt="Image" class="rounded-0"></b-card-img>
              </div>
            </b-row>
            <b-row>
              <div class="configButton">
              <b-button class="colorBoton">Subir foto</b-button>
              </div>
            </b-row>
          </b-col>
          <b-col class="ampliado6">
            <b-row class="ampliado7">
              <b-col class="ampliado4">
                <b-input-group>
                  <b-input-group-prepend is-text>
                    <b-form-checkbox switch class="mr-n2">
                    </b-form-checkbox>
                  </b-input-group-prepend>
                  
                </b-input-group>
              </b-col>
              <b-col class="ampliado5">
                <b-card-text>
                    Declaro conocer y aceptar los términos y condiciones y la política de privacidad y seguridad.
                  </b-card-text>
              </b-col>
            </b-row>
            <b-row>
              <div class="configButton2">
                <b-button  @click="crear()" class="colorBoton" id = "guardacambiostool">Guardar Cambios  </b-button>
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
            <b-tooltip show target="guardacambiostool">si todos los campos fueron rellenado de manera correcta y no existe un usuario con su mismo nombre volvera a la vista de home</b-tooltip> 
            </b-row>
          </b-col>
        </b-row>
        </div>
      </b-col>
  </div>

</template>

<script>
import NavBar from '../components/NavBar.vue';
import BusquedaForm from '../components/BusquedaForm.vue';
import axios from 'axios'

    class Usuario {
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
      data() {
              return {
                  rol:'',
                  nombre:'',
                  rut:'',
                  nombreUsuario:'',
                  email: '',
                  telefono:'',
                  direccion:'',
                  numero:'',
                  comuna:'',
                  ciudad:'',
                  region:'',
                  password:'',
                  imagen:'',
                  usuario: new Usuario(rol,nombre,rut,nombreUsuario,email,telefono,direccion,numero,comuna,ciudad,region,password,imagen)
                  
              }
          },
      methods:{
        /**
         * Conduce a home
         */
        salir(){
          this.$router.push('/').catch(err => {});
        },
        /**
         * @author Francisco Quevedo
         * Crea un nuevo usuario de rol 'Cliente' con los datos que toma del formulario del front y lo guarda en la base de datos
         */
        crear(){
          let me = this;
          var usercreado = false;
          me.usuario = new Usuario('Cliente',this.nombre,this.rut,this.nombreUsuario,this.email,this.telefono,this.direccion,
          this.numero,this.comuna,this.ciudad,this.region,this.password,"https://us.123rf.com/450wm/thesomeday123/thesomeday1231709/thesomeday123170900021/85622928-icono-de-perfil-de-avatar-predeterminado-marcador-de-posici%C3%B3n-de-foto-gris-vectores-de-ilustraciones.jpg?ver=6"),
          axios.post('http://localhost:4000/api/Usuario/add',
          {
            'rol': 'Cliente',
            'nombre': this.usuario.nombre,
            'rut' : this.usuario.rut,
            'nombreUsuario' : this.usuario.nombreUsuario,
            'email' : this.usuario.email,
            'telefono' : this.usuario.telefono,
            'direccion' : this.usuario.direccion,
            'numero' : this.usuario.numero,
            'comuna' : this.usuario.comuna,
            'ciudad' : this.usuario.ciudad,
            'region' : this.usuario.region,
            'password' : this.usuario.password,
            'imagen' : this.usuario.imagen,
          })
          .then(respuesta =>{
                  return respuesta.data;
               }).then(data =>{
                 this.$router.push('/').catch(err => {});
              

            }).catch(function(error){
                console.log(error);

          });
        },
      },
      components: {
        NavBar,
            BusquedaForm
      }
  }
</script>

<style scoped>
.colorBoton{
  background-color: #1c335f
}

.btn-img{
    background-image: url("https://i.ibb.co/hZ7kJhV/atras.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 70px;
    width: 70px;

  }

  .contenedorTotal{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    border: 2px solid #1c335f;
    
  }
  .contenedorNombre{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
    margin-bottom: -1%;
    border: 2px solid #1c335f;
    
  }

  .centrado{
    margin-top: 1%;
    margin-bottom: -4%;
  }

  .ampliado{
    margin: 2%;
  }

  .ampliado2{
    margin-bottom: 3%;
    margin-left: -5%;
  }

  .ampliado3{
    margin-top: -2%;
    margin-left: -40%;
    width: 90%;
  }

  .ampliado4{
    margin-top: -2%;
    margin-left: -30%;
    width: 90%;
  }

  .ampliado5{
    margin-top: -1%;
    margin-left: -90%;
    width: 99%;
    font-size: 14px;
  }

  .ampliado6{
    margin-top: 5%;
  }

  .ampliado7{
    margin-left: -20%;
  }

  .nombreCol{
    margin: 25px 0px;
  }

  .icondiv{
    text-align: end;
    width: 40%;
    margin-left: -30%;
  }

  .configButton{
    margin-left: -40%;
    margin-top: 2%;
    width: 80%;
  }

  .configButton2{
    margin-left: 30%;
    margin-top: 20%;
    margin-bottom: 10%;
    width: 80%;

  
  }

  .espaciado{
    margin-left: 50%;
  }
</style>