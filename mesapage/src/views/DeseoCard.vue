<template>
<!-- Marco de la tarjeta -->
    <b-card> 
    <b-row no-gutters>
<!-- Alineación de elementos -->
      <b-row b-row align-h="between"> 
<!-- Columnas Productos -> imagen + titulo -->
        <b-row>
        <b-card-body class="ubicacion" title="Polera Estampada Gato">
        </b-card-body></b-row>
        <b-row>
            <div class="image">
                <b-card-img src="https://gatosdelavega.cl/wp-content/uploads/2019/12/m-mujer.jpg" alt="Image" class="rounded-0"></b-card-img>
            </div>
        </b-row>
<!-- Talla del producto -->
        <b-col>
          <b-card-text class="ubicacionTalla">     
                XL<!--¨Acà se llama la talla del producto selecionado-->                 
          </b-card-text>
        </b-col>
<!-- color del producto -->
        <b-col>
          <b-card-text  class = "ubicacionColor">     
                Blanca estampada<!--¨Acà se llama el color del producto selecionado-->                 
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
            newQuantity: this.data.head,
            producto: [],             
      }
    },
    created(){
    this.listarinfoProducto();
    },
    methods:{
      listarinfoProducto(){
      this.axios.get('producto')
      .then((response) => {
        // console.log(response.data)
        this.producto = response.data;
      })
      .catch((e)=>{
        console.log('error' + e);
      })
    }       
    }      
  }

</script>

<style scoped>
  .btn-img{
    background-image: url("https://cdn.icon-icons.com/icons2/1919/PNG/512/biggarbagebin_121980.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: auto;

  }

    .image{
    width: 15%;
    margin-left: 8%;
    }

    .ubicacion{
      margin-left: -35%;
    }

    .ubicacionTalla{
        margin-top: -43%;
        margin-right: -74%;
    }

    .ubicacionColor{
        margin-top: -43%;
        margin-right: 60%;
    }
</style>