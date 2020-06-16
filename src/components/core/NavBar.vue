<template>
    <div>
        <v-app-bar
         app 
         color="grey lighten-2"
        >
            <v-app-bar-nav-icon color="blue-grey darken-2"></v-app-bar-nav-icon>

            <v-toolbar-title class="blue-grey--text text--darken-2">eManagement</v-toolbar-title>

            <v-spacer></v-spacer>
            <div class="hidden-md-and-down">
                <v-btn
                 v-for="(nav, i) in navItems"
                 :key="i"
                 text
                 color="blue-grey darken-2"
                 class="font-weight-bold"
                 router :to="nav.to"
                 v-text="nav.title"
                ></v-btn>
            </div>
        </v-app-bar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            navItems: [
                { title: "Home", to: '/about' },
                { title: "Login", to: '/about' },
                { title: "Features", to: '/about' },
                { title: "About", to: '/about' },
            ]
        }
    }
}
</script>