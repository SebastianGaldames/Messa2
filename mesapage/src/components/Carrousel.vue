<template>
    <div>
        <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
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
            <b-img src="https://picsum.photos/1024/480/?image=54" width="500" height="400">
            </b-img>
          </template>
        </b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide >

          <template #img>

            <!-- Con esto se puede reenderizar imagen -->
            <b-img src="https://picsum.photos/1024/480/?image=54" width="500" height="400">
            </b-img>
            
          </template>


        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide> 
          <template #img>

            <!-- Con esto se puede reenderizar imagen -->
            <b-img src="https://picsum.photos/1024/480/?image=54" width="500" height="400">
            </b-img>
            
          </template>
  
        ></b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template #img>

            <!-- Con esto se puede reenderizar imagen -->
            <b-img src="https://picsum.photos/1024/480/?image=54" width="500" height="400">
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
