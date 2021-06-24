<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="3000"
      controls
      no-hover-pause
      fade
      background="white"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <template #img>
          <div class="image-ratio">
            <img src="../assets/img/Note1.png" />
          </div>
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <div class="image-ratio">
            <img src="../assets/img/Note6.jpg" />
          </div>
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <div class="image-ratio">
            <img src="../assets/img/Note4.png" />
          </div>
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <div class="image-ratio">
            <img src="../assets/img/Note3.png" />
          </div>
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <div class="image-ratio">
            <img src="../assets/img/Note5.jpeg" />
          </div>
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <div class="image-ratio">
            <img src="../assets/img/Note7.png" />
          </div>
        </template>
      </b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>
  export default {
    name: "RoundSlide",
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>
.carousel {
  border-radius: 50%;
  overflow: hidden;
}
</style>