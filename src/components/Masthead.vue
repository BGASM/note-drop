<template>
    <!-- Header-->
    <header class="masthead text-center text-white">
        <div class="masthead-content">
            <div class="container px-5">
                <h1 class="masthead-heading mb-0">Share Your Notes!</h1>
                <h2 class="masthead-subheading text-gold mb-0">For Science</h2>
                <a class="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">Upload</a>
            </div>
        </div>
        <div class="bg-circle-1 bg-circle"></div>
        <div class="bg-circle-2 bg-circle"></div>
        <div class="bg-circle-3 bg-circle"></div>
        <div class="bg-circle-4 bg-circle"></div>
    </header>
</template>

<script>
export default {
  name: "Masthead"
}
</script>

<style scoped>
.text-gold {
   position: relative;
   font-family: 'Times New Roman',serif;
   letter-spacing: 5px;
   font-size: 150px;
   font-weight: bold;
   background-image: linear-gradient(
	to right,
	#462523 0,
  #cb9b51 22%,
	#f6e27a 45%,
	#f6f2c0 50%,
	#f6e27a 55%,
	#cb9b51 78%,
	#462523 100%
	);
   color:transparent;
   -webkit-background-clip:text;
}

header.masthead {
  height: 100vh;
  padding-top: calc(100vh / 3);
  padding-bottom: calc(100vh / 3);
  background: linear-gradient(0deg, #5e435d 0%, #a4c6b8 100%);
  }

header.masthead .bg-circle {
  background: linear-gradient(0deg, #a4c6b8 0%, #5e435d 100%);
}
</style>