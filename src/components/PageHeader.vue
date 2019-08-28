<template>
  <div>
    <v-app-bar dark app>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="mr-2"><img src="../assets/coc_logo.png" height="50"></v-toolbar-title>
      <v-toolbar-title class="headline text-uppercase">
        <span>COC</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text dark :to="{name: 'home'}"><v-icon>fas fa-home</v-icon>&nbsp;Home</v-btn>
        <v-btn text dark :to="{name: 'why-vue'}"><v-icon>fab fa-vuejs</v-icon>&nbsp;Why Vue</v-btn>
        <v-btn text dark :to="{name: 'instructions'}"><v-icon>fas fa-pen</v-icon>&nbsp;Instructions</v-btn>
        <v-btn text dark><a href= 'https://forms.gle/KiHB3yeqXpXUw1RGA' target='blank'><v-icon>fas fa-sign-in-alt</v-icon>&nbsp;Register</a></v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer dark v-model="drawer" absolute temporary app style="position:fixed; top:0; left:0; overflow-y:scroll;">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            <v-icon @click='drawer = !drawer'>fas fa-times</v-icon>&nbsp;Vue Workshop
          </v-list-item-title>
          <v-list-item-subtitle>
            Nav
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav rounded>

        <v-list-item dark link color="black" :to="{name: 'home'}">
            <v-list-item-icon>
              <v-icon>fas fa-home</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-list-item dark link color="black" :to="{name: 'why-vue'}">
            <v-list-item-icon>
              <v-icon>fab fa-vuejs</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Why Vue</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-list-item dark link color="black" :to="{name: 'instructions'}">
            <v-list-item-icon>
              <v-icon>fas fa-pen</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Instructions</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-list-item dark link color="black" @click='open'>
            <v-list-item-icon>
              <v-icon>fas fa-sign-in-alt</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Register</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  }),
  methods: {
    open () {
      window.location = 'https://forms.gle/KiHB3yeqXpXUw1RGA'
    }
  }
}
</script>

<style scoped>
 	a:link, a:visited { 
  color: white;
  text-decoration: none;
  cursor: auto;
}
</style>