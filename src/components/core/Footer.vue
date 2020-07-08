<template>
  <v-footer dark padless>
    <v-card flat tile class="footer white--text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text
        class="white--text pt-0"
      >Speedy school is a School result & Transcript automation software backed by blockchain, Let's save you from having to ever recover user data again. compatible with Nursery, Primary and Secondary Schools. & tetiary institutions</v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text grey darken-4 copy">
        <strong>Copyright All rights reserved ® Speedy School</strong>
        {{ new Date().getFullYear() }}
        <p class="white--text grey darken-4">
          <v-row justify="center">
            <v-icon>{{ accountIcon }}</v-icon>
            <span class="ml-2 subtitle-2">Your Address: {{ account }}</span>
          </v-row>
        </p>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import { mdiAccountBoxOutline } from "@mdi/js";
export default {
  data: () => ({
    accountIcon: mdiAccountBoxOutline,
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ]
  }),

  computed: {
    account() {
      return this.$store.state.account;
    }
  }
};
</script>

<style scoped>
.footer {
  background-color: rgb(14, 27, 70) !important;
}
</style>