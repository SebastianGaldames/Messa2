<template>
    <div>
        <div>
            <Webpay>
            </Webpay>
        </div>
        <div >
            <h3>
                Pagaste $0.000 clp en Messa
            </h3>
        </div>
        <div>
            <b-button variant="outline-primary"> 
                Volver al inicio
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