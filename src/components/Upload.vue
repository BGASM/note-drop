<template>
    <FormulateForm @submit="handleSubmit">
    <FormulateInput
      type="file"
      name="file"
      label="Select your documents to upload"
      multiple
      validation="mime:application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, text/plain, application/onenote"
      help="Accepts .docx, .one, .txt, .word files."
    />
  </FormulateForm>
</template>

<script>
export default {
  data() {
    return {
      data: {},
    };
  },
  methods: {
    async handleSubmit(data) {
      this.data = data;
    },
  },
};
</script>

<style scoped>

</style>