<template>
  <div>
    <v-parallax :src="require('@/assets/hero.jpeg')" height="600">

      <v-layout column align-center justify-center class="white--text" >

        <img src="../assets/coclogowithname.png" alt="Vuetify.js" height="auto" class="hidden-sm-and-down" width="80%">
        <img src="../assets/coc_logo.png" alt="Vuetify.js" height="200" class="hidden-md-and-up">
        <h1 class="white--text mb-2 display-1 text-xs-center">Presents</h1>
        <img src="../assets/logo.png">
        <h1 class="white--text mb-2 display-1 text-xs-center">Vue Workshop</h1>

      </v-layout>
    </v-parallax>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>