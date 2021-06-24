<template>
  <div id="app">
    <Navbar/>
    <Masthead/>
    <Section2/>
    <Section3/>
    <Section1/>
  </div>
</template>

<script>

import Masthead from './components/Masthead.vue';
import Navbar from "./components/Navbar.vue";
import Section1 from "./components/Section1.vue";
import Section2 from "./components/Section2.vue";
import Section3 from "./components/Section3.vue";



export default {
  name: 'App',
  components: {
    Navbar,
    Masthead,
    Section1,
    Section2,
    Section3
  },
  mounted() {
    this.$nextTick(function () {
      this.setUUID()
    })
  },
  methods: {
    setUUID() {
      this.$store.commit('setUUID')
      console.log(this.$store.getters.getUUID)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
