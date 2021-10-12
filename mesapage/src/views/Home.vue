<template>

  <div>
    <nav-bar>
    </nav-bar>
    <Carrousel>
    </Carrousel>

  </div>
  
  

</template>

<script>
  import NavBar from '../components/NavBar.vue';
  import Carrousel from '../components/Carrousel.vue';

  export default{
      components: {
        NavBar,Carrousel
      }
  }
</script>