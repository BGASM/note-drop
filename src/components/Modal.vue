<template>
		<!-- Modal -->
    <b-modal id="myModal" title="Upload Notes!">
      <div class="container px-5">
        <div class="row gx-5 align-items-center">
          <Upload/>
          <Survey/>
        </div>
      </div>

      <template #modal-footer >
      <!-- Emulate built in modal footer ok and cancel button actions -->
      <b-button id="modalSubmit" variant="success" @click='handleok'>Finished</b-button>
      </template>
  </b-modal>
</template>

<script>
  import Upload from "./Upload.vue";
  import Survey from "./Survey.vue";
  export default {
  name: "Modal",
  components: {
    Upload,
    Survey
  },
  methods: {
    handleok() {
        this.$bvModal.hide('myModal')
    },
    handlecancel() {
      this.$bvModal.hide('myModal')
    }
  }
  }
</script>

<style scoped>

</style>