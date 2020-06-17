<template>
  <div>
    <app-bar></app-bar>

    <v-content class="grey lighten-5 mt-12 mb-5">
      <v-container>
        <student-card></student-card>
        <material-card></material-card>
      </v-container>
    </v-content><br>
    <br>
    <br>
    <footer-card />
  </div>
</template>

<script>
// import EthereumMixin from "../mixins/ethereumMixin";
import AppBar from "../components/core/AppBar";
import Cards from "../components/material/cards";
import StudentCard from "../components/material/StudentCard";
import FooterCard from "../components/core/FooterCard";
import { mdiPlus } from '@mdi/js';

export default {
  components: {
    "app-bar": AppBar,
    "material-card": Cards,
    "student-card": StudentCard,
    "footer-card": FooterCard
  },

  data() {
    return {
      add: mdiPlus,
      route: "/register/student/new"
    }
  },
  computed: {
    //
  },
  methods: {},
  beforeMount() {
  },
  // mixins: [EthereumMixin]
};
</script>

<style scoped>
  #fab {
    position: fixed;
    display: block !important;
    bottom: 40px;
    right: 20px;
    z-index: 10;
  }
  .v-btn--icon {
    font-size: 1rem important;
    text-align:start !important;
  }
  @media screen and (max-width: 1024px) {
    .font {
      font-size: 0.7rem !important;
    }
    #fab {
      bottom: 61px;
      right: 20px;
    }
    .v-btn--fab.v-size--large {
      height: 55px;
      width: 55px;
    }
  }
</style>