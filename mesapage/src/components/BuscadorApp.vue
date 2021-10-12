<template>
    <div>        
        <div>
            <busqueda-form>
                
            </busqueda-form>
        </div>
            <!-- <product-list></product-list> -->
        <div>
        </div> 
    </div>
        
</template>

<script>
           
    import BusquedaForm from './BusquedaForm.vue';
    import ProductList from './ProductList.vue';

    export default{
        components: {
            BusquedaForm,ProductList
        }
    }
</script>
