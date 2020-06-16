<template>
  <div class>
    <v-row justify="center">
      <v-col cols="12" md="4">
        <v-card class="mx-auto" height="115" elevation="5">
          <v-toolbar class="ml-2 mr-2 text-center" color="purple darken-4" id="bar">
            <v-toolbar-title flat class="text-center white--text title">Name</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>

            <v-sheet class="text-center detail-body mt-2">
                <v-avatar>
                    <v-icon class="grey--text text--darken-3" size="45">{{ account }}</v-icon>
                </v-avatar>
                <v-card-text class="subtitle-1 blue-grey--text text--darken-3" id="text">Musa Aliyu Umar</v-card-text>
            </v-sheet>
        </v-card>
        <br />
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="mx-auto" height="115" elevation="5">
          <v-toolbar class="ml-2 mr-2 text-center" color="blue-grey darken-4" id="bar">
            <v-toolbar-title class="text-center white--text title">Class</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>

            <v-sheet class="text-center detail-body mt-2">
                <v-avatar>
                    <v-icon class="grey--text text--darken-3" size="45">{{ level }}</v-icon>
                </v-avatar>
                <v-card-text class="subtitle-1 blue-grey--text text--darken-3" id="text">Primary One (1)</v-card-text>
            </v-sheet>
        </v-card>
        <br />
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="mx-auto" height="115" elevation="5">
          <v-toolbar class="ml-2 mr-2 text-center" color="amber darken-1" id="bar">
            <v-toolbar-title class="text-center white--text title">Session</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>

          <v-sheet class="text-center detail-body">
            <v-row>
              <v-col
               cols="12"
               md="4"
               sm="4"
              >
                <v-icon color="amber darken-4" size="40">{{ session }}</v-icon>
              </v-col>

              <v-col
               cols="12"
               md="8"
               sm="8"
              >
                <v-card-text id="body">
                  <span class="font-weight-bold title blue-grey--text  text--darken-4">First Term</span>
                  <p class="subtitle-1 blue-grey--text text--darken-2" id="sess">2019/2020 Session</p>
                </v-card-text>
              </v-col>
            </v-row>
          </v-sheet>
        </v-card>
        <br />
      </v-col>
    </v-row>
    <br />
  </div>
</template>


<script>
import { mdiAccountCircleOutline } from "@mdi/js";
import { mdiTrendingUp } from "@mdi/js";
import { mdiRecycle } from "@mdi/js";
export default {
  data: () => ({
    lCard: false,
    account: mdiAccountCircleOutline,
    level: mdiTrendingUp,
    session: mdiRecycle,
  }),
  computed: {
    matno() {
      return this.$store.state.ad_matno;
    },
    faculty() {
      return this.$store.state.ad_faculty;
    },
    department() {
      return this.$store.state.ad_dept;
    },
    level() {
      return this.$store.state.td_level;
    }
  },

  methods: {
    levelCard() {
      if (this.$store.state.td_level) {
        this.lCard = true;
      } else {
        this.lCard =  false;
      }
    }
  }
};
</script>

<style scoped>
  .v-toolbar {
    transform: translateY(-2rem) !important;
    border-radius: 15px 0px 15px 0px !important;
  }
  .fon {
    font-size: 16px;
  }
  .detail-body {
    transform: translateY(-2rem) !important;
    background-color: transparent !important;
  }
  .text {
      transform: translateX(-1rem) !important;
      background-color: transparent !important;
  }

  #sess {
    padding: 0px !important;
  }
  #text {
    transform: translateY(-1.1rem) !important;
    background-color: transparent !important;
  }
  #body {
    transform: translateY(-0.9rem) !important;
  }

</style>