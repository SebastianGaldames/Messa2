
<template>
    <div>
        <b-navbar class="color margen" type="black">
            <b-navbar-nav>
                <!-- Navbar dropdowns -->
                <b-nav-item-dropdown id="myselect"  text="CATEGORIA" left toggle-class="text-dark">
                    <b-dropdown-item @click="agregarFiltro()">Pantalon</b-dropdown-item>
                    <b-dropdown-item >Polera</b-dropdown-item>
                    <b-dropdown-item >Poleron</b-dropdown-item>
                    <b-dropdown-item >Camisa</b-dropdown-item>
                    <b-dropdown-item >Camiseta</b-dropdown-item>
                    <b-dropdown-item >Casaca</b-dropdown-item>
                    <b-dropdown-item >Abrigo</b-dropdown-item>
                    <b-dropdown-item >Vestido</b-dropdown-item>
                    <b-dropdown-item ></b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown text="GENERO" left toggle-class="text-dark">
                    <b-dropdown-item href="#">Masculino</b-dropdown-item>
                    <b-dropdown-item href="#">Femenino</b-dropdown-item>
                    <b-dropdown-item href="#">Unisex</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown text="TEMPORADA" left toggle-class="text-dark">
                    <b-dropdown-item href="#">Primavera-Verano 2021</b-dropdown-item>
                    <b-dropdown-item href="#">Otoño-Invierno 2021</b-dropdown-item>
                    <b-dropdown-item href="#">Primavera-Verano 2020</b-dropdown-item>
                    <b-dropdown-item href="#">Otoño-Invierno 2020</b-dropdown-item>    
                </b-nav-item-dropdown>

            </b-navbar-nav>
        </b-navbar>
        <div class="card-body d-flex margen2" v-if="seFiltro === true">
            <button @click="borrarFiltro()" type="button" class="btn btn-light boton">{{filtro}}</button>
        </div>
    </div>
</template>


<script>
    export default {
        data(){
            return {
                filtro: "",
                seFiltro: false,
            }
        },
        mutations:{
            SET_FILTRO (){
                let me=this;
                me.seFiltro=false;
                me.filtro="";
                console.log('soy2:'+ me.filtro);
            },
        },
        methods:{
            borrarFiltro(){
                let me=this; 
                me.seFiltro = false; 
                me.filtro =  "";  
            },
            agregarFiltro(){
                let me=this;
                $("#myselect li").on('click', function(e) {
                    //e.preventDefault(); // cancel the link behaviour
                    var selText = $(this).text();
                    me.filtro = selText;
                    me.seFiltro = true;
                    console.log('soy:'+ me.filtro);
                });
            },
        }
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
