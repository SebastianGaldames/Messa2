<template>

  <div>
    <NavBar>
    </NavBar>


        <b-row>
          <b-col>
            Flecha atras
          </b-col>
          <b-col>
            Ingresa tus datos
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            * Nombre Completo:
          </b-col>
          <b-col>
            <b-form-input
                placeholder="Ingresa tu nombre completo"
            ></b-form-input>  
          </b-col> 
        </b-row>
        <b-row>
          <b-col>
            Datos dirección:
          </b-col>
          <b-col>
            Creación de usuario:
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            Dirección:
          </b-col>
          <b-col>
            <b-form-input
                placeholder="Ingresa tu dirección"
            ></b-form-input>  
          </b-col>
          <b-col>
            * Nombre de Usuario:
          </b-col>
          <b-col>
            <b-form-input
                placeholder="Ingresa tu nombre de usuario"
            ></b-form-input>  
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            Número:
          </b-col>
          <b-col>
            <b-form-input
                placeholder="Ingresa tu número de casa o departamento"
            ></b-form-input>  
          </b-col>
          <b-col>
            * Clave:
          </b-col>
          <b-col>
            <b-form-input
              type="password" id="text-password" aria-describedby="password-help-block"
            ></b-form-input>  
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            Comuna:
          </b-col>
          <b-col>
            <b-form-input
                placeholder="Ingresa tu número de casa o departamento"
            ></b-form-input>  
          </b-col>
          <b-col>
            * Reingrese clave:
          </b-col>
          <b-col>
            <b-form-input
              type="password" id="text-password" aria-describedby="password-help-block"
            ></b-form-input>  
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            Ciudad:
          </b-col>
          <b-col>
            <b-form-input
                placeholder="Ingresa tu ciudad"
            ></b-form-input>  
          </b-col>
          <b-col>
            * E-mail:
          </b-col>
          <b-col>
            <b-form-input
                placeholder="Ingresa tu E-mail de contacto"
            ></b-form-input>  
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            Región:
          </b-col>
          <b-col>
            <b-form-input
                placeholder="Ingresa tu Región"
            ></b-form-input>  
          </b-col>
          <b-col>
            * Teléfono:
          </b-col>
          <b-col>
            <b-form-input
                placeholder="Ingresa tu teléfono"
            ></b-form-input>  
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            Sube tu foto de perfil:
          </b-col>
          <b-col>
            <b-row>
              <b-card-img src="<a href="https:<img src="https://i.ibb.co/b66JTGg/pngegg.png" alt="Image" class="rounded-0"></b-card-img>
            </b-row>
            <b-row>
              <b-button class="colorBoton">Subir foto</b-button>
            </b-row>
          </b-col>
          <b-col>
            <b-row>
              <b-col>
                <b-input-group>
                  <b-input-group-prepend is-text>
                    <b-form-checkbox switch class="mr-n2">
                    </b-form-checkbox>
                  </b-input-group-prepend>
                  
                </b-input-group>
              </b-col>
              <b-col>
                <b-card-text>
                    Declaro conocer y aceptar los términos y condiciones y la política de privacidad y seguridad.
                  </b-card-text>
              </b-col>
            </b-row>
            <b-row>
              <b-button class="colorBoton">Guardar Cambios</b-button>
            </b-row>
          </b-col>
        </b-row>


  </div>

</template>

<script>import NavBar from '../components/NavBar.vue';
import BusquedaForm from '../components/BusquedaForm.vue';

  export default{
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
</style>