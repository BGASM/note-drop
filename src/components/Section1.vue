<template>
      <!-- Content section 1-->
        <section id="upload">
          <Modal/>
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                  <div class="col-lg-6 order-lg-1">
                        <div class="p-4">
                            <h3 class="display-6">Give Me Your Notes</h3>
                            <p>You made it this far, I appreciate you for sticking with me.</p>
                            <p>I do not collect any identifiable information from you. When this page loads it creates a random UUID that is added to the meta-data of all the files you upload so that I can cluster them as being from the same source.</p>
                            <p class="bg-danger bold">There are no safeguards in place to scrub identifiable info that you may have included in your notes!</p>
                            <p>If that all sounds fine and good, click the big-ass button to the right and follow the directions on the popup.</p>
                        </div>
                   </div>

                  <div class="col-lg-6 order-lg-2">
                        <div class="p-4">
                          <div class="image-ratio">
                            <a href="#" v-on:click="hitModal">
                              <img src="../assets/img/histo.jpg" alt="..." />
                              <div class="centered text-white">CLICK HERE!</div>
                            </a>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        </section>
</template>
<script>
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
.bold {
  font-weight:bold;
}

.centered {
  position: absolute;
  font-size: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>