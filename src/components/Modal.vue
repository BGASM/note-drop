<template>
		<!-- Modal -->
    <b-modal id="myModal" title="Upload Notes!">
      <Upload/>
      <template #modal-footer >
      <!-- Emulate built in modal footer ok and cancel button actions -->
      <b-button id="modalSubmit" variant="success" @click='handleok'>Finished</b-button>
      </template>
  </b-modal>
</template>

<script>
  import Upload from "./Upload.vue";
  export default {
  name: "Modal",
  components: {
    Upload
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