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
        <div class="container-fluid">
            <div class="row d-flex justify-content-center">
                <div class="col-sm-12">
                    <div class="card mx-auto">
                        <p class="heading">Detalles del pago</p>
                        <form class="card-details ">
                            <div class="form-group mb-0">
                                <p class="text-warning mb-0">Numero de tarjeta</p> <input type="text" name="card-num" placeholder="1234 5678 9012 3457" size="17" id="cno" minlength="19" maxlength="19"> <img src="https://img.icons8.com/color/48/000000/visa.png" width="64px" height="60px" />
                            </div>
                            <div class="form-group">
                                <p class="text-warning mb-0">Nombre del titular</p> <input type="text" name="name" placeholder="Name" size="17">
                            </div>
                            <div class="form-group pt-2">
                                <div class="row d-flex">
                                    <div class="col-sm-4">
                                        <p class="text-warning mb-0">Fecha Exp</p> <input type="text" name="exp" placeholder="MM/YYYY" size="7" id="exp" minlength="7" maxlength="7">
                                    </div>
                                    <div class="col-sm-3">
                                        <p class="text-warning mb-0">CVV</p> <input type="password" name="cvv" placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3">
                                    </div>
                                    
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
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

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');


    .card {
        border: none;
        max-width: 450px;
        border-radius: 15px;
        margin: 150px 0 150px;
        padding: 35px;
        padding-bottom: 20px !important
    }

    .heading {
        color: #C1C1C1;
        font-size: 14px;
        font-weight: 500
    }

    img {
        transform: translate(160px, -10px)
    }

    img:hover {
        cursor: pointer
    }

    .text-warning {
        font-size: 12px;
        font-weight: 500;
        color: #edb537 !important
    }

    #cno {
        transform: translateY(-10px)
    }

    input {
        border-bottom: 1.5px solid #E8E5D2 !important;
        font-weight: bold;
        border-radius: 0;
        border: 0
    }

    .form-group input:focus {
        border: 0;
        outline: 0
    }

    .col-sm-5 {
        padding-left: 90px
    }


    .btn:focus {
        box-shadow: none
    }
</style>