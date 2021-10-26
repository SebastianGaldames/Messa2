<template>
    <div>
        
        <p class="separador label font-weight-normal">Resultado Busqueda:</p>
        <!-- Muestra el texto buscado en patalla -->
        <p class="label font-italic" style="font-size:30px">"{{buscado}}" </p>
        
        <filtros> </filtros>
        <!-- Fila de tarjetas -->
        <div class="row">
            <!-- Columna de tarjetas que contienen un producto -->
            <div class="col-md-5 ml-xl-5" v-for="producto in products" :key="producto.id">
                <div class="mt-5">
                    <b-card :img-src="producto.imagen" img-height="300"
                    img-width="250" img-alt="Card image" img-left class="carta mb-6" border-variant="gray">
                        <!-- Fila interna de tarjeta -->
                        <div class="row">
                            <!-- Columna de producto -->
                            <div class="col separacion2">
                                <b style="font-size:30px">{{producto.nombre}}</b>
                                <label for="">{{producto.descripcion}}</label>
                            </div>
                            <!-- Columna de precio -->
                            <div class="col separacion">
                                <b style="font-size:20px">Precio: ${{producto.precio}}</b>
                                <!-- <button>Agregar al carro</button> -->
                                <b-button variant="primary">Agregar al carro</b-button>
                            </div>
                        </div>
                    </b-card>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import {mapGetters} from 'vuex';
    import Filtros from '../components/Filtros.vue'
    export default {
        components:{
            Filtros
        },
        computed:{
            //Obtenemos el texto a buscar y los productos filtrados en base al texto y a un filtro
            ...mapGetters({
                buscado : 'textoBuscado',
                products: 'productosFiltrados'
            })
        }
    }
</script>

<style scoped>
    .separacion{ 
        margin-left: 20%;
        align-self: end;
        /* border-bottom: 2px solid rgb(0, 0, 0); */
    }
    .separacion2{
        margin-top: 10%;
        /* border-bottom: 2px solid rgb(0, 0, 0); */
    }
    .row{
        margin-left: 7%;
        justify-content: md-left;
        height: 80%;
    }
    .label{
        text-align: left !important;
        margin-left: 189px;
    }
    .separador{
        margin-top: 1.3%;
        margin-bottom: 0; 
    }


</style>
