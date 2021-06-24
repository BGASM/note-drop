<template>
      <!-- Content section 1-->
        <section id="scroll">
          <Modal/>
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6 order-lg-2">
                        <div class="p-4">
                          <div class="image-ratio">
                            <a href="#" v-on:click="hitModal">
                              <img src="../assets/img/histo.jpg" alt="..." />
                            </a>
                          </div>
                      </div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="p-4">
                            <h3 class="display-6">Clustering, Data Training, and Better Learning</h3>
                            <p>We all take notes differently, and we all learn differently. I don't believe that there is a one-size fits all solution out there for the best studying practice. My interest is in finding patterns that (may) exist in the note-taking habits of academically-proficient medical students. I don't think I will come up with some revolutionary studying method that will reinvent the way we take notes - but I think with enough data I may be able to find trends that could shine some light on 'efficient' study-methods.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>
<script>
// import dropzone from "./Dropzone"
import Modal from "./Modal.vue";
export default {
  name: "Section1",
  components: {
    Modal
  },
  methods: {
  hitModal() {
    this.$bvModal.show('myModal')
  }}
}

</script>

<style scoped>

</style>