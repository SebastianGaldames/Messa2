<template>
    <div class="border opinionBox">
        <b-row align-h="center" align-v="center">
            <b-col cols="12" md="auto" >
                <b-row>
                    <h4>Oct</h4>
                </b-row>
                <b-row>
                    <hr class="linesep">
                </b-row>
                <b-row>
                    <h4><b>19</b></h4>
                </b-row>
            </b-col>
            <b-col cols="2" class="border box">
                <b-row>
                    <h7><b><em>Comentario</em></b></h7>
                </b-row>

                <b-row>
                    <h2><b>¡Excelente página!</b></h2>
                </b-row>

                <b-row align-h="center">
                    Esta es la página del mundo! Deberian haber
                    más como esta, yo la encontré en facebook.
                    Esta es la página del mundo! Deberian haber
                    más como esta, yo la encontré en facebook.
                </b-row>
                
                <b-row class="firma">
                    <b-col>
                        <b-img center src="https://i.ibb.co/18JfHvf/585e4beacb11b227491c3399-4.png" alt="Center image" class= "usuario"></b-img>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        @JuanCarlosBodoque
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>


<script>

</script>


<style scoped>
    .usuario{
        width: 10%; height:auto ;
        position: relative;
    }
    .border{
        border-color: blue;
        
    }
    .linesep{
        width: 63%;
    }
    .box{
        width: 70%;
        margin-left: 15px;
    }
    .opinionBox{
        margin-top: 30px;
    }
    .firma{
        margin-top: 30px;
    }
</style>