<template>
  <div class="home white">
    <nav-bar />
    <v-content class="mt-12">
      <header class="blue-grey lighten-5 header">
        <div class="headerImg">
          <v-container>
            <v-row>
              <v-col
              cols="12"
              md="5"
              sm="5"
              id="options"
              >
                <v-btn x-large dark class="ml-3 mr-3 font-weight-bold homeButton" id="start">Start Here</v-btn>
                <v-btn x-large outlined class="ml-2 mr-2 font-weight-bold homeButton" color="blue-grey darken-2">Demo</v-btn>
              </v-col>

              <v-col
              cols="12"
              md="7"
              sm="7"
              >
                <v-img
                 src="@/assets/book.svg"
                 width="100%"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </header>

      <div class="section-2">
        <v-container>
          <v-row justify="center">
            <v-col
             cols="12"
             md="4"
             sm="12"
            >
              <v-card flat class="mx-auto">
                <div class="text-center">
                  <v-avatar tile size="100">
                    <!-- <v-icon style="color: rgb(18, 34, 88) !important;">{{ easy }}</v-icon> -->
                    <v-img src="@/assets/server.svg"></v-img>
                  </v-avatar>
                  <v-container>
                    <v-card-text class="subtitle-1" id="sect2Text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Ipsum dolor sit amet consectetur adipisicing elit.</v-card-text>
                  </v-container>
                </div>
              </v-card>
            </v-col>

            <v-col
             cols="12"
             md="4"
             sm="12"
            >
              <v-card flat class="mx-auto">
                <div class="text-center">
                  <v-avatar tile size="100">
                    <v-icon color="blue lighten-1">{{ fast }}</v-icon>
                  </v-avatar>
                  <v-container>
                    <v-card-text class="subtitle-1" id="sect2Text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Ipsum dolor sit amet consectetur adipisicing elit.</v-card-text>
                  </v-container>
                </div>
              </v-card>
            </v-col>

            <v-col
             cols="12"
             md="4"
             sm="12"
            >
              <v-card flat class="mx-auto">
                <div class="text-center">
                  <v-avatar tile size="100">
                    <v-icon  style="color: rgb(52, 50, 94) !important;">{{ secure }}</v-icon>
                  </v-avatar>
                  <v-container>
                    <v-card-text class="subtitle-1" id="sect2Text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Ipsum dolor sit amet consectetur adipisicing elit.</v-card-text>
                  </v-container>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <v-sheet
         class="mx-auto grad"
         dark
         elevation="0"
         height="200"
         width="100%"
        >
          <v-container>
            <v-row justify="center">
              <v-col
               cols="12"
               md="8"
               sm="12"
              >
                <v-card-text class="display-1" style="text-align: center;">Thank You for Trusting Us</v-card-text>
                <v-card-text class="subtitle-2" style="text-align: center;">A secured e-management system</v-card-text>
              </v-col>

              <v-col
               cols="12"
               md="4"
               sm="12"
              >
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
                    <v-img
                      src="@/assets/security.svg"
                    ></v-img>
                  </v-avatar>
                  <v-container></v-container>

                  <v-card-title style="text-align: center;" class="sectTitle">Lorem Ipsum</v-card-title>

                  <v-card-text style="text-align: center !important;" class="sectText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas minima, sequi 
                    quod, quos eum dolore similique est dignissimos, 
                    quaerat inventore eos! Aliquam ipsa autem expedita explicabo reprehenderit, illum consequatur corporis!
                  </v-card-text>
                </v-row>
              </v-card>
            </v-col>

            <v-col cols="12" md="4" sm="12">
              <v-card flat>
                <v-row justify="center">
                    <v-avatar tile size="80">
                    <v-img
                      src="@/assets/serverx.svg"
                    ></v-img>
                  </v-avatar>
                  <v-container></v-container>

                  <v-card-title style="text-align: center;" class="sectTitle">Lorem Ipsum</v-card-title>

                  <v-card-text style="text-align: center !important;" class="sectText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas minima, sequi 
                    quod, quos eum dolore similique est dignissimos, 
                    quaerat inventore eos! Aliquam ipsa autem expedita explicabo reprehenderit, illum consequatur corporis!
                  </v-card-text>
                </v-row>
              </v-card>
            </v-col>

            <v-col cols="12" md="4" sm="12">
              <v-card flat>
                <v-row justify="center">
                    <v-avatar size="80">
                    <v-img
                      src="@/assets/secured.svg"
                    ></v-img>
                  </v-avatar>
                  <v-container></v-container>

                  <v-card-title style="text-align: center;" class="sectTitle">Lorem Ipsum</v-card-title>

                  <v-card-text style="text-align: center !important;" class="sectText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas minima, sequi 
                    quod, quos eum dolore similique est dignissimos, 
                    quaerat inventore eos! Aliquam ipsa autem expedita explicabo reprehenderit, illum consequatur corporis!
                  </v-card-text>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          </v-container>
       </v-sheet>

       <v-sheet>
         <v-container>
           <div class="display-2 text-center blue--text text--darken-4 mb-5 font-weight-light">App Screenshot</div>
           <carousel />
         </v-container>
       </v-sheet>
      </div>
    </v-content>
    <footer-app />

    <v-overlay :value="token">
      <v-progress-circular indeterminate size="90">
        <v-avatar tile size="60">
          <v-img
            src="@/assets/logo.png"
          ></v-img>
        </v-avatar>
      </v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/core/NavBar.vue';
import Footer from '@/components/core/Footer.vue';
import Carousel from '@/components/material/Carousel.vue';
import { mdiViewDashboardOutline } from "@mdi/js";
import { mdiDesktopMacDashboard } from "@mdi/js";
import { mdiLightbulbMultipleOutline } from "@mdi/js";
import { mdiServerSecurity } from "@mdi/js";
import { mdiCertificateOutline } from "@mdi/js";


export default {
  name: 'Home',
  components: {
    'nav-bar': NavBar,
    'footer-app': Footer,
    'carousel': Carousel,
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
      token: true,
    }
  },

  computed: {
    //
  },
  methods: {
   //
  },
}
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
