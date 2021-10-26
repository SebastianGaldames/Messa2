
<template>
    <div>
        <b-navbar class="color margen" type="black">
            <b-navbar-nav>
                <!-- Navbar dropdowns -->
                <b-nav-item-dropdown text="CATEGORIA" left toggle-class="text-dark">
                    <b-dropdown-item @click="agregarFiltroPantalon()">Pantalon</b-dropdown-item>
                    <b-dropdown-item @click="agregarFiltroPolera()">Polera</b-dropdown-item>
                    <b-dropdown-item @click="agregarFiltroPoleron()">Poleron</b-dropdown-item>
                    <b-dropdown-item @click="agregarFiltroCamisa()">Camisa</b-dropdown-item>
                    <b-dropdown-item @click="agregarFiltroCamiseta()">Camiseta</b-dropdown-item>
                    <b-dropdown-item @click="agregarFiltroCasaca()">Casaca</b-dropdown-item>
                    <b-dropdown-item @click="agregarFiltroAbrigo()">Abrigo</b-dropdown-item>
                    <b-dropdown-item @click="agregarFiltroVestido()">Vestido</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown  text="GENERO" left toggle-class="text-dark">
                    <b-dropdown-item @click="agregarFiltroMasculino()">Masculino</b-dropdown-item>
                    <b-dropdown-item @click="agregarFiltroFemenino()">Femenino</b-dropdown-item>
                    <b-dropdown-item @click="agregarFiltroUnisex()">Unisex</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown text="TEMPORADA" left toggle-class="text-dark">
                    <b-dropdown-item @click="agregarFiltroPV2021()">Primavera-Verano 2021</b-dropdown-item>
                    <b-dropdown-item @click="agregarFiltroOI2021()">Otoño-Invierno 2021</b-dropdown-item>
                    <b-dropdown-item @click="agregarFiltroPV2020()">Primavera-Verano 2020</b-dropdown-item>
                    <b-dropdown-item @click="agregarFiltroOI2020()">Otoño-Invierno 2020</b-dropdown-item>    
                </b-nav-item-dropdown>

                <b-nav-item-dropdown text="PRECIO" left toggle-class="text-dark">
                    <b-dropdown-item @click="agregarFiltro10k()">Hasta $10.000</b-dropdown-item>
                    <b-dropdown-item @click="agregarFiltro10k20k()">$10.000 a $20.000</b-dropdown-item>
                    <b-dropdown-item @click="agregarFiltro20k30k()">$20.000 a $30.000</b-dropdown-item>
                    <b-dropdown-item @click="agregarFiltro30k40k()">$30.000 a $40.000</b-dropdown-item>
                </b-nav-item-dropdown>

            </b-navbar-nav>
        </b-navbar>
        <div class="card-body d-flex margen2" v-if="filtrito === true">
            <button @click="borrarFiltro()" type="button" class="btn btn-light boton">{{filtro}}</button>
        </div>
    </div>
</template>


<script>
    import {mapGetters} from 'vuex';

    //Clase para crear un objeto precio con un minimo y maximo, ademas de un string donde se almacena el rango ($x hasta $y)
    class Precios {
        constructor(min,max,filtro){
            this.min= min;
            this.max= max;
            this.filtro= filtro;
        }
    }
    export default {
        data(){
            return {
                filtro: "",
                precio : new Precios()
            }
        },
        computed:{
            
            ...mapGetters({
                filtrito : 'getFiltro'
            })
        },
        methods:{
            //Para borrar un filtro seleccionado
            borrarFiltro(){
                this.filtro =  "";  
                this.$store.commit('SET_LIMPIAR');
            },

            //Metodos para llamar a filtrar las distintas categorias
            agregarFiltroPantalon(){
                this.filtro="Pantalon";
                this.$store.commit('SET_FILTROC',this.filtro);
                
            },
            agregarFiltroPolera(){
                this.filtro="Polera";
                this.$store.commit('SET_FILTROC',this.filtro);
                
            },
            agregarFiltroPoleron(){
                this.filtro="Poleron";
                this.$store.commit('SET_FILTROC',this.filtro);
                
            },
            agregarFiltroCamisa(){
                this.filtro="Camisa";
                this.$store.commit('SET_FILTROC',this.filtro);
                
            },
            agregarFiltroCamiseta(){
                this.filtro="Camiseta";
                this.$store.commit('SET_FILTROC',this.filtro);
                
            },
            agregarFiltroCasaca(){
                this.filtro="Casaca";
                this.$store.commit('SET_FILTROC',this.filtro);
                
            },
            agregarFiltroAbrigo(){
                this.filtro="Abrigo";
                this.$store.commit('SET_FILTROC',this.filtro);
                
            },
            agregarFiltroVestido(){
                this.filtro="Vestido";
                this.$store.commit('SET_FILTROC',this.filtro);
            },

            //Metodos para llamar a filtrar los distintos generos
            agregarFiltroMasculino(){
                this.filtro="Masculino";
                this.$store.commit('SET_FILTROG',this.filtro);
            },
            agregarFiltroFemenino(){
                this.filtro="Femenino";
                this.$store.commit('SET_FILTROG',this.filtro);
            },
            agregarFiltroUnisex(){
                this.filtro="Unisex";
                this.$store.commit('SET_FILTROG',this.filtro);
            },

            //Metodos para llamar a filtrar las disintas temporadas
            agregarFiltroPV2021(){
                this.filtro="Primavera-Verano 2021";
                this.$store.commit('SET_FILTROT',this.filtro);
            },
            agregarFiltroPV2020(){
                this.filtro="Primavera-Verano 2020";
                this.$store.commit('SET_FILTROT',this.filtro);
            },
            agregarFiltroOI2021(){
                this.filtro="Otoño-Invierno 2021";
                this.$store.commit('SET_FILTROT',this.filtro);
            },
            agregarFiltroOI2020(){
                this.filtro="Otoño-Invierno 2020";
                this.$store.commit('SET_FILTROT',this.filtro);
            },

            //Metodos para llamar a filtrar por rangos de precio
            agregarFiltro10k(){
                this.filtro="$0-$10.000";
                this.precio = new Precios(0,10000,this.filtro);
                this.$store.commit('SET_FILTROP',this.precio);
            },
            agregarFiltro10k20k(){
                this.filtro="$10.000-$20.000";
                this.precio = new Precios(10000,20000,this.filtro);
                this.$store.commit('SET_FILTROP',this.precio);
            },
            agregarFiltro20k30k(){
                this.filtro="$20.000-$30.000";
                this.precio = new Precios(20000,30000,this.filtro);
                this.$store.commit('SET_FILTROP',this.precio);
            },
            agregarFiltro30k40k(){
                this.filtro="$30.000-$40.000";
                this.precio = new Precios(30000,40000,this.filtro);
                this.$store.commit('SET_FILTROP',this.precio);
            }
        },
    }
</script>

<style scoped>
    .boton{
        align-self: start;
    }
    .color{
        width: 79.5%;
        border-top:1px solid rgb(219, 219, 219);
        border-bottom: 1px solid rgb(219, 219, 219);
    }
    .margen{
        margin-left: 10%;    
    }
    .margen2{
        margin-left: 9%;    
    }

</style>
