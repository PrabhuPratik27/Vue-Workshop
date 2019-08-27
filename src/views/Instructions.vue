<template>
  <v-layout justify-center align-center>
    <v-flex xs12 md6>

      <v-card class="mr-2 ml-2 mt-2 mb-2" dark>

        <v-toolbar color="cyan" dark>

          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>WorkShop Prerequisites</v-toolbar-title>

          <div class="flex-grow-1"></div>

          <v-btn icon>
            <v-icon>fas fa-search</v-icon>
          </v-btn>

        </v-toolbar>

        <v-list three-line>

          <template v-for="(item, index) in items">

            <p v-if="item.header" :key="item.header" v-text="item.header"></p>

            <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

            <v-list-item v-else :key="item.title" @click="noop">

              <v-list-item-avatar>
                <v-icon>{{ item.avatar }}</v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
      items: [
        { header: 'Today' },
        { divider: true, inset: true },
        {
          avatar: 'fab fa-js',
          title: 'Have prior experience in JavaScript',
          subtitle: "<span class='success--text'>Since Vue.js is a JavaScript Framework. Knowledge of the language will help in fully unserstanding the working of the framework.</span>",
        },
        { divider: true, inset: true },
        {
          avatar: 'fab fa-node-js',
          title: 'Install Node.js',
          subtitle: "<span class='success--text'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        { divider: true, inset: true },
        {
          avatar: 'fab fa-npm',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: "<span class='success--text'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
        },
        { divider: true, inset: true },
        {
          avatar: 'fab fa-vuejs',
          title: 'Oui oui',
          subtitle: "<span class='success--text'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
        },
        { divider: true, inset: true },
        {
          avatar: '',
          title: 'Birthday gift',
          subtitle: "<span class='success--text'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
        },
        { divider: true, inset: true },
        {
          avatar: '',
          title: 'Recipe to try',
          subtitle: "<span class='success--text'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        },
      ],
    }),
};
</script>

<style scoped>
</style>