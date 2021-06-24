<template>
    <FormulateForm @submit="handleSubmit">
    <FormulateInput
      type="file"
      name="file"
      label="Select your documents to upload"
      multiple
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