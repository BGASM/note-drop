<template>
<FormulateInput
  :label="label"
  type="range"
  name="range"
  :min="min"
  :max="max"
  :value="min"
  show-value="true"
  error-behavior="live"
/>
</template>

<script>
export default {
  name: "Range",
  props: ['label', 'min', 'max']
}
</script>

<style scoped>

</style>