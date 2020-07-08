<template>
  <v-footer color="blue-grey darken-4" class="footer" absolute padless>
    <v-row justify="center" no-gutters>
      <v-btn color="white" text small rounded class="acct hidden-lg-only">
        <v-icon left>{{ account }}</v-icon>
        {{ acct }}
      </v-btn>
      <v-col class="blue-grey darken-3 colx text-center white--text" cols="12">
        <span class="mt-1 com text-center">
          {{ new Date().getFullYear() }} —
          <strong>Speedy School</strong>
        </span>
        <span>
          <v-btn router to="/about" small rounded dark text color="white">About Us</v-btn>
        </span>
      </v-col>
      <div class="text-center">
        <span class="overline blue-grey--text text--lighten-3">Oasis Technologies</span>
      </div>
    </v-row>
  </v-footer>
</template>

<script>
import { mdiAccountBox } from "@mdi/js";

export default {
  computed: {
    acct() {
      return this.$store.state.account;
    }
  },

  data() {
    return {
      account: mdiAccountBox
    };
  }
};
</script>

<style scoped>
.acct {
  text-transform: none !important;
}
.com {
  font-size: 0.9rem !important;
}
.footer {
  bottom: 0 !important;
}
.colx {
  padding: 3px !important;
}
@media screen and (max-width: 1024px) {
  .acct {
    text-transform: none !important;
    font-size: 0.7rem !important;
  }
}
</style>