<template>
    <div>
        <nav-bar>

        </nav-bar>
        <div>        
            <product-list></product-list>
        </div>
    </div>
</template>


<script>
           
    import ProductList from '../components/ProductList.vue';
    import BuscadorApp from '../components/BuscadorApp.vue';
import NavBar from '../components/NavBar.vue';

    export default{
        components: {
            ProductList,BuscadorApp,
                NavBar
        }
    }
</script>