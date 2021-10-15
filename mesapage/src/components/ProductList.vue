<template>
    
    <!-- Fila de tarjetas -->
    <div class="row justify-content-md-left">
        <!-- Columna de tarjetas -->
        <div class="col-md-5 ml-xl-5" v-for="producto in products" :key="producto.id">
            <div class="mt-5">
                <b-card :img-src="producto.imagen" img-height="300"
                img-width="250" img-alt="Card image" img-left class="carta mb-6" border-variant="gray">
                    <!-- Fila interna de tarjeta -->
                    <div class="row">
                        <!-- Columna de producto -->
                        <div class="col">
                            <h1>{{producto.nombre}}</h1>
                            <label for="">{{producto.descripcion}}</label>
                        </div>
                        <!-- Columna de precio -->
                        <div class="col  offset-md-3">
                            <b>Precio: {{producto.precio}}</b>
                            <button>Agregar al carro</button>  
                        </div>
                    </div>
                </b-card>
            </div>
        </div>
    </div>

</template>

<script>
    import {mapGetters} from 'vuex';
    import { mapState } from 'vuex';

    export default {
        computed:{
            products(){
                return this.$store.getters.productosFiltrados
            }
        },
        
    }
</script>
