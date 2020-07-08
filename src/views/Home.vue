<template>
  <div class="home white">
    <nav-bar />
    <v-content class="mt-12">
      <header class="blue-grey lighten-5 header">
        <div class="headerImg">
          <v-container>
            <v-row>
              <v-col cols="12" md="5" sm="5" id="options">
                <v-btn
                  x-large
                  dark
                  class="ml-3 mr-3 font-weight-bold homeButton"
                  id="start"
                >Start Here</v-btn>
                <v-btn
                  x-large
                  outlined
                  class="ml-2 mr-2 font-weight-bold homeButton"
                  color="blue-grey darken-2"
                >Demo</v-btn>
              </v-col>

              <v-col cols="12" md="7" sm="7">
                <v-img src="@/assets/book.svg" width="100%"></v-img>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </header>

      <v-container>
        <v-row justify="center">
          <v-alert
            type="warning"
            border="left"
            outlined
            dark
          >
            This app is still under development
          </v-alert>
        </v-row>
      </v-container>

      <div class="section-2">
        <v-container>
         
        </v-container>

        <v-sheet class="mx-auto grad" dark elevation="0" height="200" width="100%">
          <v-container>
            <v-row justify="center">
              <v-col cols="12" md="8" sm="12">
                <v-card-text class="display-1" style="text-align: center;">Speedy School</v-card-text>
                <v-card-text class="subtitle-2" style="text-align: center;">Decentralized and easy</v-card-text>
              </v-col>

              <v-col cols="12" md="4" sm="12">
                <v-avatar size="90">
                  <v-icon color="white">{{ cert }}</v-icon>
                </v-avatar>
                <v-card-text class="overline">Trusted</v-card-text>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>

        <v-card flat height="100"></v-card>

        <v-sheet>
          <v-container>
            <v-row>
              <v-col cols="12" md="4" sm="12">
                <v-card flat>
                  <v-row justify="center">
                    <v-avatar tile size="80">
                      <v-img src="@/assets/security.svg"></v-img>
                    </v-avatar>
                    <v-container></v-container>

                    <v-card-title style="text-align: center;" class="sectTitle">Backed by Blockchain</v-card-title>

                    <v-card-text
                      style="text-align: center !important;"
                      class="sectText"
                    >You never have to loose student/staff data again. Data is backed up on a distributed network of computers all over the world to make your data persistent and immutable, protecting you from loses</v-card-text>
                  </v-row>
                </v-card>
              </v-col>

              <v-col cols="12" md="4" sm="12">
                <v-card flat>
                  <v-row justify="center">
                    <v-avatar tile size="80">
                      <v-img src="@/assets/serverx.svg"></v-img>
                    </v-avatar>
                    <v-container></v-container>

                    <v-card-title style="text-align: center;" class="sectTitle">Easy Management</v-card-title>

                    <v-card-text
                      style="text-align: center !important;"
                      class="sectText"
                    >Easy Manage transcripts, results and Have the flexibility to create, sharable student data with one click. Generate school transcripts automatically.</v-card-text>
                  </v-row>
                </v-card>
              </v-col>

              <v-col cols="12" md="4" sm="12">
                <v-card flat>
                  <v-row justify="center">
                    <v-avatar size="80">
                      <v-img src="@/assets/secured.svg"></v-img>
                    </v-avatar>
                    <v-container></v-container>

                    <v-card-title style="text-align: center;" class="sectTitle">Fast</v-card-title>

                    <v-card-text
                      style="text-align: center !important;"
                      class="sectText"
                    >We have made the process of entering school results very easy. data is stored on a very fast Blurb storage before bieng synced to the blockchain so you won't have to wait so long.</v-card-text>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>

        <v-sheet>
          <v-container>
            <div
              class="display-2 text-center blue--text text--darken-4 mb-5 font-weight-light"
            >App Screenshot</div>
            <!-- <carousel /> -->
          </v-container>
        </v-sheet>
        <v-row align="center" justify="center">
          <v-img
            src="../assets/app/adminPanel1.svg"
            lazy-src="../assets/app/adminPanel1.svg"
            aspect-ratio="1"
            class="grey lighten-2"
            max-width="500"
            max-height="300"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-row>
      </div>
    </v-content>
    <footer-app />

    <v-overlay :value="this.$root.$data.fortToken">
      <v-progress-circular indeterminate size="90">
        <v-avatar tile size="60">
          <v-img src="@/assets/logo.png"></v-img>
        </v-avatar>
      </v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/core/NavBar.vue";
import Footer from "@/components/core/Footer.vue";
import { mdiViewDashboardOutline } from "@mdi/js";
import { mdiDesktopMacDashboard } from "@mdi/js";
import { mdiLightbulbMultipleOutline } from "@mdi/js";
import { mdiServerSecurity } from "@mdi/js";
import { mdiCertificateOutline } from "@mdi/js";

export default {
  name: "Home",
  components: {
    "nav-bar": NavBar,
    "footer-app": Footer
    // 'carousel': Carousel,
  },

  data() {
    return {
      // Icons
      dash: mdiViewDashboardOutline,
      easy: mdiDesktopMacDashboard,
      fast: mdiLightbulbMultipleOutline,
      secure: mdiServerSecurity,
      cert: mdiCertificateOutline,

      // Js code
      token: false
    };
  },

  computed: {
    // Fortmatic state
    fortmaticState() {
      return this.$store.state.fortState;
    }
  },
  methods: {
    //
  }
};
</script>

<style scoped>
.headerImg {
  transform: translateY(-1.2rem) !important;
}
.header {
  transform: translateY(-3rem) !important;
  border-radius: 0rem 0rem 0rem 13rem !important;
}
.sectTitle {
  transform: translateY(-1.1rem) !important;
}
.sectText {
  transform: translateY(-1.5rem) !important;
}
#options {
  transform: translateY(19rem) !important;
}
#sect2Text {
  transform: translateY(-1.4rem) !important;
  background-color: transparent !important;
}
#start {
  background-color: rgb(14, 27, 70) !important;
}
.grad {
  background-color: rgb(14, 27, 70) !important;
  border-radius: 0px !important;
}
@media screen and (max-width: 1024px) {
  .grad {
    height: 350px !important;
    text-align: center !important;
  }
  .homeButton {
    height: 45px !important;
    width: 55px !important;
    font-size: 11px !important;
    transform: translateY(4rem) !important;
    text-align: center !important;
  }
}
</style>
