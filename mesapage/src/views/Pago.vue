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
            <b-button variant="success" href="/pagoAceptado">
                Proceder con el pago
            </b-button>
            <b-button variant="danger" href="/"> 
                Cancelar y volver al inicio
            </b-button>
            
        </div>
    </div>
</template>

<script>
    import Webpay from '../components/Webpay.vue'
    export default {
    components: {
        Webpay
    }
  }
</script>