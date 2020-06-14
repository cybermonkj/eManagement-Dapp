<template>
  <div class>
    <v-row justify="center">
      <v-col cols="12" md="3">
        <v-card class="mx-auto" height="140" elevation="5">
          <v-toolbar class="ml-2 mr-2 text-center" color="blue darken-3" id="bar">
            <v-toolbar-title class="text-center white--text title">Faculty</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>

          <v-sheet class="text-center">
            <v-card-text class="blue-grey--text text--darken-3 fon">{{ faculty }}</v-card-text>
          </v-sheet>
        </v-card>
        <br />
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="mx-auto" height="140" elevation="5">
          <v-toolbar class="ml-2 mr-2 text-center" color="blue-grey" id="bar">
            <v-toolbar-title class="text-center white--text title">Department</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>

          <v-sheet class="text-center">
            <v-card-text class="blue-grey--text text--darken-3 fon">{{ department }}</v-card-text>
          </v-sheet>
        </v-card>
        <br />
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="mx-auto" height="140" elevation="5">
          <v-toolbar class="ml-2 mr-2 text-center" color="purple" id="bar">
            <v-toolbar-title class="text-center white--text title">Level</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>

          <v-sheet class="text-center">
            <v-card-text v-show="lCard" class="blue-grey--text text--darken-3 fon">{{ level }} Level</v-card-text>
          </v-sheet>
        </v-card>
        <br />
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="mx-auto" height="140" elevation="5">
          <v-toolbar class="ml-2 mr-2 text-center" color="indigo" id="bar">
            <v-toolbar-title class="text-center white--text title">Matriculation Number</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>

          <v-sheet class="text-center">
            <v-card-text class="blue-grey--text text--darken-3 fon">{{ matno }}</v-card-text>
          </v-sheet>
        </v-card>
        <br />
      </v-col>
    </v-row>
    <br />
  </div>
</template>


<script>
export default {
  data: () => ({
    lCard: false,
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

<style>
#bar {
  transform: translateY(-2rem);
  border-radius: 15px 0px 15px 0px;
}
.fon {
  font-size: 16px;
}
</style>