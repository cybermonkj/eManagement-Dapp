<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      :mobile-break-point="mobileBreakPoint"
      color="blue-grey darken-4"
    >
      <v-list dense nav tile class="py-0">
        <v-list-item two-line>
          <v-list-item-avatar class="white">
            <img src="@/assets/newlogo.png" alt="logo" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>E-Management</v-list-item-title>
            <v-list-item-subtitle class="subtitle font-weight-light">Decentralized, & easy</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list shaped>
          <v-list-item
            v-for="navItem in navItems"
            :key="navItem.title"
            class="mt-4"
            router
            :to="navItem.route"
            :active-class="color"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ navItem.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ navItem.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-list shaped>
          <v-list-group
           :prepend-icon="notify"
           value="false"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Subscribe</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item>
              <v-list-item-content>
                <span class="caption">Click the button below to get notifyed when results are released!</span>
                <v-btn v-show="true" small class="mt-2" rounded ripple>
                  <span>Subscribe</span>
                  <v-icon right>{{ bell }}</v-icon>
                </v-btn>
                <v-btn v-show="false" small class="mt-2" rounded ripple>
                  <span>Unsubscribe</span>
                  <v-icon right>{{ bell }}</v-icon>
                </v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn @click="logout" block ripple color="blue-grey">
            <span>Logout</span>
            <v-icon right>{{ open }}</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar prominent app shrink-on-scroll id="appBar" color="grey lighten-2">
      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-lg-none"></v-app-bar-nav-icon>

      <v-toolbar-title class="blue-grey--text">{{ title }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="ml-3 hidden-md-and-down">
        <v-btn class="blue-grey--text text--darken-1 font-weight-thin" text>
          <v-icon>{{ icon_acct }}</v-icon>
          <span id="acct">{{ account }}</span>
        </v-btn>
      </div>
    </v-app-bar>

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
import { mdiViewDashboard } from "@mdi/js";
import { mdiDatabaseSearch } from "@mdi/js";
import { mdiFaceProfile } from "@mdi/js";
import { mdiAccountBoxMultiple } from "@mdi/js";
import { mdiAccountBoxOutline } from "@mdi/js";
import { mdiOpenInNew } from "@mdi/js";
import { mdiSettings } from "@mdi/js";
import { mdiBell } from "@mdi/js";
import { mdiBellCircleOutline } from "@mdi/js"; 

import fm from '@/contracts/fortmatic.js';


export default {
  data: () => ({
    drawer: true,
    color: "blue-grey darken-1",
    title: "Dashboard",
    mobileBreakPoint: 991,
    out: mdiAccountBoxMultiple,
    db_search: mdiDatabaseSearch,
    icon_acct: mdiAccountBoxOutline,
    open: mdiOpenInNew,
    notify: mdiBellCircleOutline,
    bell: mdiBell,
    
  // Js code
    links: [{ icon: mdiViewDashboard, text: "Dashboard", route: "/dashboard" }],
    token: false,

    navItems: [
      { title: "Dashboard", icon: mdiViewDashboard, route: "/dashboard" },
      { title: "My Profile", icon: mdiFaceProfile, route: "/profile" },
      { title: "Admin Panel", icon: mdiSettings, route: "/admin/panel" },
    ],

  }),
  computed: {
    account() {
      return this.$store.state.account
    }
  },

  methods: {
    async logout() {
      this.token = true;
      await fm.user.logout();
      this.token = false;
    },
  },
  created() {
    
  }
};
</script>

<style scoped>
#acct {
  text-transform: none !important;
}
.v-application .primary--text {
    color: #B0BEC5 !important;
    caret-color: #B0BEC5 !important;
}
</style>