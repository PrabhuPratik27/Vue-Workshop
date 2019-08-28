<template>
  <div class="mt-0 mb-0">
    <section>
      <v-parallax :src="require('@/assets/section.jpg')" height="700">

        <v-layout column align-center justify-center class="white--text">

          <img src="../assets/coclogowithname.png" alt="Vuetify.js" height="auto" class="hidden-sm-and-down" width="80%">
          <img src="../assets/coc_logo.png" alt="Vuetify.js" height="200" class="hidden-md-and-up">
          <h1 class="white--text mb-2 display-1 text-center hidden-md-and-up">Community Of Coders</h1>
          <h1 class="white--text mb-2 display-1 text-center">Presents</h1>
          <img src="../assets/logo.png" alt="Vuetify.js" height="150" width="auto">
          <div class="subheading mb-3 text-center ws1">Vue Workshop</div>
          <div class="subheading mb-3 text-center ws">Wednesday, 4<sup>th</sup> September 2019</div>
          <br>

        </v-layout>
      </v-parallax>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .ws {
    font-size: 2em;
  }
  .ws1 {
    font-size: 3em;
  }
</style>