<template>
    

    <div>
        <div class="align-self-start">
            <label for="">Resultado Busqueda:{{buscado}}</label>
        </div>
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
                                <h1>{{producto._id}}</h1>
                                <h1>{{producto.nombre}}</h1>
                                <h1>{{items}}</h1>
                                <label for="">{{producto.descripcion}}</label>
                            </div>
                            <!-- Columna de precio -->
                            <div class="col  offset-md-3">
                                <b>Precio: {{producto.precio}}</b>
                                <button>Agregar al carro</button>
                                <b-button pill variant="success" @click="addToFavs(producto._id)">
                                     <b-icon  v-bind:icon="text">heart</b-icon>
                                </b-button>
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

    export default {
        props: ['producto','text'],                 
        data(){
            return{
                idTemporal: "",
                items: [],                    
            }
        },
        computed:{
            products(){
                return this.$store.getters.productosFiltrados
            },
            ...mapGetters({
                buscado : 'textoBuscado'
            })
        },
        methods: {
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
