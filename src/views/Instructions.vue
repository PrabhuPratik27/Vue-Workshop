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
                <p v-html="item.subtitle"></p>
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
          subtitle: "<span class='success--text'>Install the newest version of Node.js<br>For Ubuntu: sudo apt install nodejs <br>For Windows:Download the setup from <a href='https://nodejs.org/en/' target='_blank'>here</a></a></span>",
        },
        { divider: true, inset: true },
        {
          avatar: 'fab fa-npm',
          title: 'Install NPM',
          subtitle: "<span class='success--text'>Make sure you have npm installed<br>Open a terminal and type npm -v to make sure you have npm installed</span>",
        },
        { divider: true, inset: true },
        {
          avatar: 'fab fa-vuejs',
          title: 'Install Vue CLI 3',
          subtitle: "<span class='success--text'>Install vue cli<br>Type sudo npm install -g @vue/cli</span>",
        },
        { divider: true, inset: true },
        {
          avatar: 'fas fa-laptop-code',
          title: 'Have Laptops',
          subtitle: "<span class='success--text'>The Workshop will take place in AL004. So laptops are necessary for hands on</span>",
        },
        { divider: true, inset: true },
      ],
    }),
};
</script>

<style scoped>
</style>