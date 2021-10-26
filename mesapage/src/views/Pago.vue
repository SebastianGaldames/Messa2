<template>
    <div>
        <div>
            <Webpay>
            </Webpay>
        </div>
        <div >
            <h3>
                Estás pagando $0.000 clp en Messa
            </h3>
        </div>
        <div>
            <b-button @click="comprA()" variant="success">
                Proceder con el pago
            </b-button>
            <b-button variant="danger" href="/"> 
                Cancelar y volver al inicio
            </b-button>
            
        </div>
    </div>
</template>

<script>
    import Webpay from '../components/Webpay.vue';
    import axios from 'axios'
    class Usuario{
    constructor(rol,nombre,rut,nombreUsuario,email,telefono,direccion,numero,comuna,ciudad,region,password,imagen){
                this.rol = rol;
                this.nombre= nombre;
                this.rut= rut;
                this.nombreUsuario= nombreUsuario;
                this.email= email;
                this.telefono= telefono;
                this.direccion= direccion;
                this.numero= numero;
                this.comuna= comuna;
                this.ciudad= ciudad;
                this.region= region;
                this.password = password;
                this.imagen= imagen;
            }
    }

    export default {
    props: ['data'],
    components: {
        Webpay
    },
    data(){
        return{
            arrayCompras: [],
            id : this.$store.state.usuario._id,
            usuarioA : new Usuario(),
            compra : '',
            fecha : '',
            numeroBoleta: '',
            numero : 0,

            compraS : ''
        }
    },
    created(){
        this.getU();
    },

    methods:{
        /**
         * @author Francisco Quevedo
         * Encuentra al usuario que esta realizando el pago
         */
        getU(){
            let me = this;
            axios.get(`http://localhost:4000/api/Usuario/query?_id=${me.id}`).then(function (response){
                    me.usuarioA = response.data;
                }
                
                ).catch(function(error){
                    console.log(error);
                });

        },
        /**
         * @author Francisco Quevedo
         * Crea el string que contiene los datos de la compra
         */
        compraA(){
            let me = this;
            me.arrayCompras = me.usuarioA.copmras;
            me.compra = "compra 1"+getRandom();
            me.fecha ="1"+""+getRandom()+""+"/"+"1"+getRandom()+""+"/"+getRandom()+""+getRandom()+""+getRandom()+""+getRandom();
            me.numeroBoleta = getRandomB()+"";
            me.compraS = compra+fecha+numeroBoleta;
            console.log(compraS);
            me.arrayCompras.push(compraS); 
        },
        
        getRandom(){
            let me = this;
            me.numero= Math.random() * (9 - 0) + 0
            return me.numero;
        },
        getRandomB(){
            let me = this;
            me.numero=Math.random() * (99999 - 99990) + 99990;
            return me.numero;
        },
    }
  }
</script>