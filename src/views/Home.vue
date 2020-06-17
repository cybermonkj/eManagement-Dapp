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
                <v-btn x-large dark class="ml-3 mr-3 font-weight-bold" id="start">Start Here</v-btn>
                <v-btn x-large outlined class="ml-2 mr-2 font-weight-bold" color="blue-grey darken-2">Demo</v-btn>
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
                    <v-icon style="color: rgb(18, 34, 88) !important;">{{ easy }}</v-icon>
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
                    <v-icon style="color: rgb(52, 50, 94) !important;">{{ secure }}</v-icon>
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

       <v-card flat height="200"></v-card>
      </div>
    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/core/NavBar.vue';
import { mdiViewDashboardOutline } from "@mdi/js";
import { mdiDesktopMacDashboard } from "@mdi/js";
import { mdiLightbulbMultipleOutline } from "@mdi/js";
import { mdiServerSecurity } from "@mdi/js";
import { mdiCertificateOutline } from "@mdi/js";


export default {
  name: 'Home',
  components: {
    'nav-bar': NavBar,
  },
  data() {
    return {
      dash: mdiViewDashboardOutline,
      easy: mdiDesktopMacDashboard,
      fast: mdiLightbulbMultipleOutline,
      secure: mdiServerSecurity,
      cert: mdiCertificateOutline,
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

</style>
