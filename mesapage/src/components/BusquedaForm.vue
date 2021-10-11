<template>

    <div>
        <!-- <input v-model="Buscar" class="form-control" placeholder="Buscar" aria-describedby="basic-addon1"> -->

        <b-form-input id="formulario" v-model="Buscar" size="sm" class="mr-sm-2" placeholder="Buscar"></b-form-input>
            <!-- Redirecciona a la Busqueda --> 
            <!--<router-link to="/Busqueda">-->
        <b-button id="botonBusqueda" href="Busqueda" v size="sm" class="my-2 my-sm-0" type="submit">GO</b-button>

        <div class="input-group-append">
            <!-- <button @click="show()" id="botonBuscar" type="submit" class="btn btn-primary mb-2">Buscar</button> -->
        </div>
    </div>
</template>

<script>
    export default{

        data: function() {
            return  {
                nombre : '',
            }
        },
        computed:{
            Buscar: {
                get (){
                    return this.$store.state.filter.consulta;
                },
                set (val){
                    this.$store.commit('SET_QUERY',val);
                }                
            },
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
            show: function(){
                
                //this.nombre='';
                
                if(this.nombre!=null){
                    //this.$router.push('/about')
                    //alert(this.$store.methods.show)
                    this.$router.push('/busqueda').catch(err => {})
                    //return this.Buscar
                }
            }
        }
    }
</script>

