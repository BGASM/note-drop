<template>
<FormulateForm
  v-model="fields"
>
  <FormulateInput
    type="text"
    :disabled="true"
    label="Your anonymous identifier"
    v-model="userid"
  />
  <!--<FormulateInput
    type="group"
    name="sliders"
  >
    <Range label="How did you score?" min="0" max="10"/>
    <Range label="Did you feel well-prepared?" min="0" max="10"/>
    <Range label="How would you rank your engaement?" min="0" max="10"/>
    <Range label="Did you find the coursepacks useful?" min="0" max="10"/>
    <Range label="How much of your total study time was spent on notetaking?" min="0" max="10"/>
  </FormulateInput>-->
</FormulateForm>
</template>

<script>
//import Range from "./Range.vue";
export default {
name: "Survey",
/*components:{
  Range
},*/
data () {
  return {
    userid: this.$store.getters.getUUID
  }
}
}
</script>

<style scoped>

</style>