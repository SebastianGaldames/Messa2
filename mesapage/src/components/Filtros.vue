
<template>
    <div>
        <b-navbar class="color margen" type="black">
            <b-navbar-nav>
                <!-- Navbar dropdowns -->
                <b-nav-item-dropdown text="CATEGORIA" left toggle-class="text-dark">
                    <b-dropdown-item href="#">Pantalon</b-dropdown-item>
                    <b-dropdown-item href="#">Polera</b-dropdown-item>
                    <b-dropdown-item href="#">Poleron</b-dropdown-item>
                    <b-dropdown-item href="#">Camisa</b-dropdown-item>
                    <b-dropdown-item href="#">Camiseta</b-dropdown-item>
                    <b-dropdown-item href="#">Casaca</b-dropdown-item>
                    <b-dropdown-item href="#">Abrigo</b-dropdown-item>
                    <b-dropdown-item href="#">Vestido</b-dropdown-item>
                    <b-dropdown-item href="#"></b-dropdown-item>
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
        
        
        <div class="card-body d-flex margen2">
            <button v-if="seFiltro=true" type="button" class="btn btn-light boton">{{filtro}}</button>
        </div>
    </div>
</template>


<script>
    export default {
        data(){
            return {
                filtro: "",
                seFiltro: true,
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
