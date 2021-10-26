<template>
    <div>
        <!-- Llamamos al componente navbar -->
        <nav-bar></nav-bar>
        <div>        
            <!-- Llamamos al componente que muestra la lista de productos -->
            <product-list></product-list>
        </div>
    </div>
</template>


<script>
           
    import ProductList from '../components/ProductList.vue';
    import NavBar from '../components/NavBar.vue';
    
    export default{
        components: {
            ProductList,NavBar
        }
    }
</script>