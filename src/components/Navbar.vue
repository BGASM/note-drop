<template>
  <b-navbar toggleable="lg" sticky="true" type="dark" variant="dark">
    <div class="container-fluid px-5">
      <b-navbar-brand href="#page-top">
        <img src="../assets/logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
        BGASM
      </b-navbar-brand>
      <b-navbar-toggle target="navbar-toggle-collapse"/>
      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto"/>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {
name: "Navbar"
}
</script>

<style scoped>

</style>