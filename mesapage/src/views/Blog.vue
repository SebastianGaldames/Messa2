<template>
    <div>
        <NavBar>
        </NavBar>
        <b-row cols="3">
        <!-- Aqui va el grid de comentarios -->
        <!-- Para generar una cantidad X de comentarios -->
        <!-- Sin que sea mucho texto hacer un for de hasta 6 o 3 -->
            <b-col v-for="i in 6">
                <OpinionCard></OpinionCard>
            </b-col>
        </b-row>
        <b-row>
        <!-- Aqui va plantilla para rellenar -->
        <div class= "margen">
            <h1><b>¡Déjanos tu comentario!</b></h1>
            <!--Aqui va el Titulo-->
            <div class=" row justify-content-md-center margen " >
                <b-row>
                    <b-col cols="3" align-self="stretch">
                        <label for="textarea-small">Título</label>
                    </b-col>
                    <b-col cols="3">
                    <b-form-textarea
                        id="textarea-small"
                        size="sm"
                        placeholder="Ingresa el título de tu comentario"
                    ></b-form-textarea>
                    </b-col>
                </b-row>
            <!-- Aqui va el Asunto o Categoría -->
                <b-row>
                    <b-col cols="3" align-self="stretch">
                    <label for="textarea-small">Asunto</label>
                    </b-col>
                    <b-col sm="4">
                    <b-form-textarea
                        id="textarea-small"
                        size="sm"
                        placeholder="Ingresa el asunto o categoría de tu comentario"
                    ></b-form-textarea>
                    </b-col>
                </b-row>
                <!-- Aqui va el Asunto o Categoría -->
                <div>
                    <b-row>
                    <b-col cols="3" align-self="stretch">
                    <label for="textarea-small">Comentario</label>
                    </b-col>
                    <b-col sm="4">
                    <b-form-textarea
                        id="textarea-small"
                        size="sm"
                        placeholder="Ingresa acá tu comentario"
                        rows="8"
                    ></b-form-textarea>
                    </b-col>
                </b-row>
                    
                <!-- Boton de Publicar -->
                    <b-button class="botonPublicar" lg="4">Publicar</b-button>
                </div>
            </div>
        </div>
        </b-row> 
    </div>

</template>

<script>
    import NavBar from '../components/NavBar.vue';
    import OpinionCard from './OpinionCard.vue';
    export default{
        components: {
            NavBar, OpinionCard
        },
        data() {
            return{

            }
        },
        methods:{
//llamar datos para tarjetas de comentarios
        }
    }
</script>

<style scoped>
.margen{
    margin-left: 10px;
    padding: 5%;
  };
.separacionesComentario{
    margin: 55%;
}

  .comentarios {
  border: 1px solid black;
  padding: 2%;
  align-items: center;
}
.botonPublicar{
  background-color: #1c335f
}
</style>
