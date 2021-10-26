<template>

    <div>
        <!-- <input v-model="Buscar" class="form-control" placeholder="Buscar" aria-describedby="basic-addon1"> -->
        <form @submit.prevent="irBuscar">
            <input id="busqueda" class="form-control" placeholder="Buscar" aria-describedby="basic-addon1">
            <!-- Redirecciona a la Busqueda --> 
            <!--<router-link to="/Busqueda">-->
            <button  @click="irBuscar" id="botonBuscar" class="btn btn-default">
                <img src="https://imgur.com/HXHRBzm.png" style="width: 25px"/>
            </button>
        </form>
    </div>
</template>
    
<script>
    import Filtros from '../components/Filtros.vue'

    export default{
        components:{
            Filtros
        },
        data: function() {
            return  {
                nombre : '',
                buscar : false,
            }
        },
        computed:{
            disponible: {
                get (){
                    return this.$store.state.filter.disponible;
                },
                set (){
                    this.$store.commit('SET_DISPONIBLE');
                }
            }
        },
       methods : {
            //Metodo para buscar
            irBuscar(){
                //this.nombre='';
                this.buscar=true;
                //Marcamos que se puede buscar
                this.$store.commit('SET_BUSDISPO',this.buscar);

                //Se obtiene lo que se va a buscar
                var buscado=document.getElementById("busqueda").value;
                //Hacemos que el texto se transforme completamente a minusculas
                buscado = buscado.toLowerCase();
                //console.log('Esto se va a buscar:',buscado);
                //Seteamos lo que se va Buscar
                this.$store.commit('SET_QUERY',buscado);
                //console.log('Tamanno de busqueda',buscado.length)
                if(buscado.length>=0){
                    //Filtros.methods.borrarFiltro();
                    //Limpiamos los filtros cuando se hace una nueva busqueda
                    this.$store.commit('SET_LIMPIAR');
                    this.$router.push('/busqueda').catch(err => {});
                }
                //document.getElementsByClassName("form-control")[0].value = "";
            }
        }
    }
</script>

