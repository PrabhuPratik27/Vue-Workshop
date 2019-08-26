<template>
  <v-layout justify-center align-center>
    <v-flex xs12 md12>
      <v-card dark>
        <p class="text-center ws hidden-sm-and-down"><u><b>Features of Vue.js</b></u></p>
        <p class="text-center ws1 hidden-md-and-up"><u><b>Features of Vue.js</b></u></p>
        <v-layout justify-center align-center>
          <v-flex xs12 md8>
            <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown" class='mt-2 mb-2  mr-2 ml-2'>
              <v-timeline-item
                v-for="(item, i) in items"
                :key="i"
                :color="item.color"
                :icon="item.icon"
                fill-dot
              >
                <v-card
                  :color="item.color"
                  dark
                >
                  <v-card-title class="title">{{ item.title }}</v-card-title>
                  <v-card-text class="white text--primary">
                    <p>{{ item.content }}</p>
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          color: 'red lighten-2',
          icon: 'mdi-star',
          title: 'Virtual DOM',
          content: 'Vue.js utilizes virtual DOM. Virtual DOM is, essentially, a clone of the principal DOM element absorbs every change intended for the DOM and is present in the form of JavaScript data structures. The changes made to the JavaScript data structures are compared with the original data structure. Only the final changes will reflect in the real DOM, which viewers will be able to see. This is a creative method, cost-effective and the changes can be done quickly.'
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-book-variant',
          title: 'Data Binding',
          content: 'This feature helps manipulate or assign values to HTML attributes, change the style, assign classes with the help of a binding directive called v-bind available with VueJS.'
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-airballoon',
          title: 'Computed Properties',
          content: 'A computed property is one of the important features of Vue.js. It helps to listen to the changes made to the UI elements and performs the necessary logic so there is no need for additional coding for this.Use a computed property when we want to work on mutate a property that is dependent upon another property being changed. Computed properties are mainly dependent on other data properties.Any change to the dependent properties will also trigger the logic for the computed property. Computed properties are cached based on their dependencies so they will only rerun if any dependency changes.'
        },
        {
          color: 'indigo',
          icon: 'mdi-buffer',
          title: 'Watchers',
          content: 'Watchers are applied to data that will frequently change. For example, form input elements. Here, a developer doesn’t need to do any additional events. Watcher takes care of handling any data changes and also make the code simple and fast.There are three main ways to have components make use of Vue.js’s reactive nature. These are Methods, Computed Properties, and Watchers.Use watchers when we want to perform some logic as a result of a change that took place on a specific data property. This is most useful when you want to perform the asynchronous or expensive operation in response to changing data.'
        },
        {
          color: 'red lighten-2',
          icon: 'mdi-star',
          title: 'Flexibility and Modularity',
          content: 'It is a flexible, modular replacement to it. If you are among those who don’t find it interesting to code every single part of the app’s interface, then you can use Vue.js web-pack template as it does not restrict access to its advanced feature set like hot module reloading, CSS extraction, linting, etc. It is flexible to add any third party package in vue.js.'
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-book-variant',
          title: 'Runtime Performance',
          content: 'When we look towards runtime performance, Vue.js has the definite edge as it abstains from e dirty checking. Vue.js clear dependency-tracking observation system with synchronized queueing ensures changes trigger individualistically.'
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-airballoon',
          title: 'Directives vs Components',
          content: 'Vue.js has a reflective distinction between the roles of directives and components. Here Directives encapsulate DOM manipulations, While Components are self-sufficient elements with their own view and data logic.'
        },
        {
          color: 'indigo',
          icon: 'mdi-buffer',
          title: 'Optimization',
          content: 'Vue.js tracks component dependencies during render. This results in that the system already knows which components require re-render when the form changes, which does not. Each component will be able to call shouldComponentUpdate to avoid any kind of nested component warnings.The benefits of Vue.Js are its simplicity & ease of learning. This presents Vue.JS as an ideal choice for startups, SMEs or any development organization that wants to quickly design high-performance web applications with an easy-to-read code.'
        }
      ],
    }),
  }
</script>

<style scoped>
  .ws {
    font-size: 4em;
  }
  .ws1 {
    font-size: 2em;
  }
</style>