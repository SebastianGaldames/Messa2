<template>
<!-- Marco de la tarjeta -->
    <b-card> 
    <b-row no-gutters>
<!-- Alineación de elementos -->
      <b-row b-row align-h="between"> 
<!-- Columnas Productos -> imagen + titulo -->
        <b-col> 
          <b-card-img src="https://gatosdelavega.cl/wp-content/uploads/2019/12/m-mujer.jpg" alt="Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col>
        <b-card-body title="Nombre Del producto">
            <b-col>
            <b-card-text>     
                Linea             
            </b-card-text>  
            </b-col>           
            <b-row no-gutters>  
            </b-row>
        </b-card-body>
        </b-col>
<!-- Cantidad del producto -->
        <b-col> 
          <b-row>
            <b-col cols="3">
              <b-button pill variant="outline-secondary" size="sm">-</b-button>
            </b-col>  
            <b-col cols="2">
              <b-card-text>     
                1<!--¨Acà se llama la cantidad del producto selecionado-->                 
              </b-card-text>      
            </b-col>    
            <b-col cols = "1">       
              <b-button pill variant="outline-secondary" size="sm">+</b-button> 
            </b-col> 
          </b-row>
        </b-col>
<!-- Precio del producto -->
        <b-col>
          <b-card-text>     
                $$$$<!--¨Acà se llama la cantidad del producto selecionado-->                 
          </b-card-text>
        </b-col>
<!-- Sub-Total del producto -->
        <b-col>
          <b-card-text>     
                $$$$<!--¨Acà se llama la cantidad del producto selecionado-->                 
          </b-card-text>
        </b-col>
<!-- Borrar producto -->
        <b-col>
          <b-card-text>     
            <b-button href="#" variant="basic" class="btn-img" size="lg"></b-button>
          </b-card-text>
        </b-col>
      </b-row>
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

<style scoped>
  .btn-img{
    background-image: url("https://cdn.icon-icons.com/icons2/1919/PNG/512/biggarbagebin_121980.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 35px;

  }
</style>