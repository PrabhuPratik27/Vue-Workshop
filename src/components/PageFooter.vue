<template>
  <v-footer dark padless height="auto">
    <v-card class="flex" flat tile>
      <v-card-title class="black">
        <strong class="subheading hidden-sm-and-down">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <div v-for="icon in icons" :key="icon.icon">
          <a :href='icon.to' target='_blank'><v-btn class="mx-4" dark icon>
            <v-icon size="24px">{{ icon.icon }}</v-icon>
          </v-btn></a>
        </div>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;&nbsp;{{ new Date().getFullYear() }} —
        <strong>COC</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
        {
					icon: 'fab fa-facebook',
					to: 'https://www.facebook.com/CommunityOfCoders/?ref=br_rs'
				},
				{
					icon: 'fab fa-youtube',
					to: 'https://www.youtube.com/channel/UCiiLKnn8iU9Q31cByvtT_5w'
				},
				{
					icon: 'fab fa-instagram',
					to: 'https://www.instagram.com/coc_vjti/?hl=en'
				}
      ],
  })
}
</script>

<style scoped>
	a {
   text-decoration:none;
   color: black;
}
</style>