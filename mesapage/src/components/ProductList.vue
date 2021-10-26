<template>
    <div>

        <p class="separador label font-weight-normal">Resultado Busqueda:</p>
        <p class="label font-italic" style="font-size:30px">"{{buscado}}" </p>
        
        <filtros> </filtros>
        <!-- Fila de tarjetas -->
        <div class="row">
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
                                    <b-icon @click="addToFavs(producto._id)" icon="heart"></b-icon>
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
        props: ['producto','text'],                 
        data(){
            return{
                idTemporal: "",
                items: [],                    
            }
        },
        components:{
            Filtros
        },
        computed:{
            
            ...mapGetters({
                buscado : 'textoBuscado',
                products: 'productosFiltrados'
            })
        },
        methods: {
            //Se agrega el producto a una lista, se envía un alert para notificar que el producto fue agregado o quitado a la lista de deseos
            addToFavs(producto){                            
                if(this.items.find(producto => producto._id==producto)){
                    this.items = this.items.filter(function( obj ) {
                        console.log("Holi");
                        return obj.id !== producto._id;
                    });
                    alert("Se ha quitado de favoritos");
                }                    
                else{
                    this.items.push(producto);
                    alert("Se ha añadido a favoritos");
                }                                    
                console.log(producto)
            }

        } 
        
    }
</script>

<style scoped>

    .row{
        margin-left: 7%;
        justify-content: md-left;
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
