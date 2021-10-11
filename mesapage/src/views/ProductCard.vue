<template>
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
        <b-col md="6">
        <b-card-img src="https://images.natura.cl/image/sku/principal_145x145/95842_1.jpg" alt="Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
            
        <b-card-body title="Nombre Del producto">
            <b-col>
            <b-card-text>     
                Linea             
            </b-card-text>  
            </b-col>           
            <b-row no-gutters>
                <b-col>
                <b-button pill variant="outline-secondary" size="sm">-</b-button>
                </b-col>  
                <b-col>
                <b-card-text>     
                    0<!--¨Acà se llama la cantidad del producto selecionado-->                 
                </b-card-text>      
                </b-col>    
                <b-col>       
                <b-button pill variant="outline-secondary" size="sm">+</b-button> 
                </b-col> 
            </b-row>
        </b-card-body>
        </b-col>
    </b-row>
    </b-card>  
</template>


<script>
  export default {
    props: ['data'],    
    data() {
      return {
            newNameProduct: this.data.nameProduct,
            newColor: this.data.color,                      
            newDescription: this.data.description,
            newPrice: this.data.price,
            newQuantity: this.data.head               
      }
    },
    methods:{
       //Aca se agregaran los productos       
    }      
  }

</script>