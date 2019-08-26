<template>
  <div>
    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-center">
            <h2 class="ws">Vue.js</h2>
            <span class="subheading">
              The fastest growing Front-End framework in the market 
            </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-center">
                    <v-icon >fas fa-code</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Gentle learning curve</div>
                  </v-card-title>
                  <v-card-text class="text-justify">
                    Developers agree that Vue is one of the easiest frameworks to learn and master. To get started, you need a few lines of JavaScript with a hint of HTML. One big advantage of Vue's accessibility is that it makes finding competent developers and building a fantastic development team easier. Consequently, recruiting Vue experts is also less expensive. 
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-center">
                    <v-icon black>fas fa-certificate</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Well-defined ecosystem</div>
                  </v-card-title>
                  <v-card-text class="text-justify">
                    Vue's defined ecosystem is a massive advantage because it allows developers to choose a solution to a specific problem efficiently. They don't spend hours on finding the best one. Moreover, Vue allows selecting only the required building blocks.
                    Vue may focus on the view layer, but with the help of Vuex, Vue Router, Vue Test Utils, and Vue CLI, it also provides recommended solutions to common problems. This, again, boosts development speed and unifies it across different projects. Since most projects use the same solutions, it's also easier for developers to get started right away instead of wasting time on learning about these tools. 
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-center">
                    <v-icon >fas fa-code-branch</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Best of Both worlds</div>
                  </v-card-title>
                  <v-card-text class="text-justify">
                    Vue was made to address the shortcomings of Angular, but, in reality, it combines the best parts of two most popular frameworks: AngularJS and ReactJS.

                    From Angular, it took similar templates with good syntax and the way it is easy to use in already existing projects. From React, Vue got the component-based approach, props, one-way data flow for component hierarchy, performance, virtual rendering ability, and the understanding of the critical role proper state management of apps plays in web applications.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>
  </div>
</template>

<script>
export default {};

</script>

<style scoped>
    .ws {
        font-size: 3em;
    }
</style>