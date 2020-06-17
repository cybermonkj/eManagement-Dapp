<template>
  <div class>
    <v-row justify="center">
      <v-col cols="12" md="4">
        <v-card class="mx-auto" height="150" elevation="5">
          <v-toolbar class="ml-2 mr-2 text-center" color="blue-grey darken-2" id="bar">
            <v-toolbar-title flat class="text-center white--text title">Students</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>

          <v-sheet class="text-center detail-body">
            <v-row>
              <v-col
               cols="12"
               md="4"
               sm="4"
              >
                <v-icon color="blue-grey" size="65">{{ student }}</v-icon>
              </v-col>

              <v-col
               cols="12"
               md="8"
               sm="8"
              >
                <v-card-text>
                  <span class="font-weight-bold display-1 blue-grey--text  text--darken-4">20</span>
                  <p class="subtitle-2 blue-grey--text text--darken-2">Total Students</p>
                </v-card-text>
              </v-col>
            </v-row>
          </v-sheet>
        </v-card>
        <br />
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="mx-auto" height="150" elevation="5">
          <v-toolbar class="ml-2 mr-2 text-center" color="primary" id="bar">
            <v-toolbar-title class="text-center white--text title">Active Students</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>

          <v-sheet class="text-center detail-body">
            <v-row>
              <v-col
               cols="12"
               md="4"
               sm="4"
              >
                <v-icon color="primary darken-3" size="65">{{ active }}</v-icon>
              </v-col>

              <v-col
               cols="12"
               md="8"
               sm="8"
              >
                <v-card-text>
                  <span class="font-weight-bold display-1 blue-grey--text  text--darken-4">10</span>
                  <p class="subtitle-2 blue-grey--text text--darken-2">Total Active Students</p>
                </v-card-text>
              </v-col>
            </v-row>
          </v-sheet>
        </v-card>
        <br />
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="mx-auto" height="150" elevation="5">
          <v-toolbar class="ml-2 mr-2 text-center" color="light-green darken-1" id="bar">
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
                <v-icon color="green" size="65">{{ session }}</v-icon>
              </v-col>

              <v-col
               cols="12"
               md="8"
               sm="8"
              >
                <v-card-text>
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
import { mdiHumanChild } from "@mdi/js";
import { mdiHumanHandsup } from "@mdi/js";
import { mdiRecycle } from "@mdi/js";
export default {
  data: () => ({
    lCard: false,
    student: mdiHumanChild,
    active: mdiHumanHandsup,
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

  #sess {
    padding: 0px !important;
  }

</style>