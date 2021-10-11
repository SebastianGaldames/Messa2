<template>

  <b-container class="bv-example-row">
    <Home></Home> 
    <b-row>
        <b-col>
          <div>
            <b-card
              title="MI CARRO"              
              tag="article"
              style="max-width: 1000rem;"
              class="mb-auto"
            >
            <ProductCard></ProductCard>              
    <b-button href="#" variant="primary">imagen borrar</b-button>
        </b-card>
          
        </div>
      </b-col>  
      <b-col>
        <div>
          <b-card
            no-body
            style="max-width: 20rem;"         
          >
            <template #header>
              <h4 class="mb-0">Mi Carrito</h4>
            </template>

            <b-card-body>              
              <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's
                content.
              </b-card-text>
            </b-card-body>

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
            </b-list-group>

            <b-card-body>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </b-card-body>            
          </b-card>
        </div>
      </b-col>

    </b-row>    
  </b-container>
  
</template>


<script>
  import ProductCard from "./ProductCard";
  import Home from "./Home";

  export default {    
    props: ['data'],
    name: "Carrito",
    components:{Home,ProductCard},    
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