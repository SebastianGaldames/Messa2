<template>

    <div>
        <!-- <input v-model="Buscar" class="form-control" placeholder="Buscar" aria-describedby="basic-addon1"> -->
        <form @submit.prevent="irBuscar">
            <input id="busqueda" class="form-control" placeholder="Buscar" aria-describedby="basic-addon1">
            <!-- Redirecciona a la Busqueda --> 
            <!--<router-link to="/Busqueda">-->
            <button @click="irBuscar" id="botonBuscar" type="submit" class="btn btn-primary mb-2">Buscar</button>
        </form>
    </div>
</template>
    
<script>
    export default{

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
            // Creating function
            irBuscar(){
                //this.nombre='';
                this.buscar=true;
                this.$store.commit('SET_BUSDISPO',this.buscar);

                var porId=document.getElementById("busqueda").value;
        
                //console.log('Esto se va a buscar:',porId);
                this.$store.commit('SET_QUERY',porId);
                //console.log('Tamanno de busqueda',porId.length)
                if(porId.length>1){
                    this.$router.push('/busqueda').catch(err => {})
                }
                //document.getElementsByClassName("mr-sm-2")[0].value = "";
                
            }
        }
    }
</script>

