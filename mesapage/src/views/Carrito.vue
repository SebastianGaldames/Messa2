<template>

  <div>
    
    <NavBar>
    </NavBar>
    <b-row b-row align-h="between">
        <b-col cols="5" md="8">
          <div>
            <b-card
              title="MI CARRO"              
              tag="article"
              class="xl"
            >
            <b-row cols="6">
              <b-col cols="4">Producto</b-col>
              <b-col>Cantidad</b-col>
              <b-col>Precio</b-col>
              <b-col>Sub-total</b-col>
              <b-col></b-col>
            </b-row>
            <b-row><ProductCard></ProductCard></b-row>
            </b-card> 
          </div>
        </b-col>  
        <b-col cols="4">
          <div>
            <b-card
              no-body
              style="max-width: 20rem;"         
            >
            <template #header class = "ml-1">
              <h4 class="ml-0">Mi Carrito</h4>
            </template>

            <b-list-group flush>

            <b-list-group-item>
              <b-row>
                <b-col>
                  <b-card-text>
                    Valor de la Compra
                  </b-card-text>
                </b-col> 
                <b-col>
                  <b-card-text>
                    $$$
                  </b-card-text>
                </b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item>
              <b-row>
                <b-col>
                  <b-card-text>
                    Descuentos
                  </b-card-text>
                </b-col> 
                <b-col>
                  <b-card-text>
                    $$$
                  </b-card-text>
                </b-col>
              </b-row>           
            </b-list-group-item>
              <b-list-group-item>
                <b-row>
                  <b-col>
                    <b-card-text>
                      SubTotal
                    </b-card-text>
                  </b-col> 
                  <b-col>
                    <b-card-text>
                      $$$
                    </b-card-text>
                  </b-col>
                </b-row>   
              </b-list-group-item>
              <b-list-group-item>
                <b-row>
                  <b-col>
                    <b-card-text>
                      Despacho
                    </b-card-text>
                  </b-col> 
                  <b-col>
                    <b-card-text>
                      Gratis
                    </b-card-text>
                  </b-col>
                </b-row>   
              </b-list-group-item>
              <b-list-group-item>
                <b-row>
                  <b-col>
                    <b-card-text >
                      <h4 class="ml-0">
                        TOTAL
                      </h4>
                    </b-card-text>
                  </b-col> 
                  <b-col>
                    <b-card-text>
                      $$$
                    </b-card-text>
                  </b-col>
                </b-row>   
              </b-list-group-item>
            </b-list-group>

            <b-card-body>
              <b-button class="botonFinalizar">Finalizar compra</b-button>
            </b-card-body>            
          </b-card>
        </div>
      </b-col>

    </b-row>    
  </div>
  
</template>


<script>
  import NavBar from '../components/NavBar.vue';
  import ProductCard from "./ProductCard";

  export default {    
    props: ['data'],
    name: "Carrito",
    components:{NavBar,ProductCard},    
    data() {
      return {
        all:{
              arrProduct: [
                  {
                      nameProduct: "",
                      color: '',                      
                      description: '',
                      price: '',
                      quantity: '',
                  },
              ]
        }    
      }
    },
    methods:{
    
    }      
  }

</script>

<style scoped>
.botonFinalizar{
  background-color: #1c335f
}
</style>