<template>
    <div>
        <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#91B5F7"
        img-width="200"
        img-height="200"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide>
          <template #img>
            <!-- Con esto se puede reenderizar imagen -->
            <b-img src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" >
            </b-img>
          </template>
        </b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide >

          <template #img>

            <!-- Con esto se puede reenderizar imagen -->
            <b-img src="https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80">
            </b-img>
            
          </template>


        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide> 
          <template #img>

            <!-- Con esto se puede reenderizar imagen -->
            <b-img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80">
            </b-img>
            
          </template>
  
        ></b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template #img>

            <!-- Con esto se puede reenderizar imagen -->
            <b-img src="https://images.unsplash.com/photo-1621446275748-0332ef046172?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80">
            </b-img>
            
          </template>
        </b-carousel-slide>

      </b-carousel>

      <p class="mt-4">
        Slide #: {{ slide }}<br>
        Sliding: {{ sliding }}
      </p>
    </div>
</template>


<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
