<template>
  <div class="home blue-grey lighten-5">
    <v-content class="mt-12">
      <v-container>
        <v-row justify="center" align="start">
          <v-card
           class="mx-auto home"
           height="500"
           flat
          >

            <div class="text-center mt-3">
              <h1 class="blue-grey--text fon overline">E-Management Dapp</h1>
            </div>

            <div class="text-center mt-12">
              <v-avatar size="100" tile>
                <img src="@/assets/logo.png" alt="logo">
              </v-avatar>
            </div>

            <div class="text-center mt-4">
              <v-card-text>
                <div class="font-weight-light grey--text text--darken-3 body-2">Hi Usman, You are welcome to eManagement dapp</div>
              </v-card-text>
            </div>

            <div class="text-center mt-5 mb-5">
              <v-btn
               router to="/dashboard"
               dark
               ripple
               large
               color="indigo"
              >
                go to dashboard
                <v-icon right>{{ dash }}</v-icon>
              </v-btn>
            </div>
          </v-card>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
import { mdiViewDashboardOutline } from "@mdi/js";


export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      dash: mdiViewDashboardOutline,
    }
  },

  computed: {
    studentEmail: {
      get() {
        return this.$store.state.student.email;
      },
      set(v) {
        this.$store.commit("PROCESSED_EMAIL", v);
      }
    }
  },
  methods: {
    capturedId() {
      alert(this.$store.state.student.email)
      console.log("Inputed Email", this.$store.state.student.email)
    },
  },
}
</script>

<style scoped>
  #login {
    text-transform: capitalize !important;
    font-size: 1rem !important;
  }
  #title {
    font-size: 1.5rem !important;
    font-family: cursive !important;
  }
  .home {
    background-color: transparent !important;
  }
  .v-application .overline {
    font-size: 2.1rem !important;
    letter-spacing: 2px !important;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
  }
  @media screen and (max-width: 1024px) {
    .v-application .overline {
      font-size: 1.5rem !important;
      letter-spacing: 1px !important;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
    }
  }
</style>
