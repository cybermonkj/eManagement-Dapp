<template>
    <div>
        <v-navigation-drawer
         v-model="drawer"
         absolute
         temporary
         :active-class="color"
        >
            <v-list-item>
                <v-list-item-avatar>
                    <v-img src="@/assets/logo.png"></v-img>
                </v-list-item-avatar>

                <v-list-content>
                    <v-list-item-title>Emanagement</v-list-item-title>
                </v-list-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list shaped dense>
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    link
                    router :to="item.to"
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
         app 
         color="grey lighten-2"
        >
            <v-app-bar-nav-icon @click="drawer = true" color="blue-grey darken-2"></v-app-bar-nav-icon>

            <v-toolbar-title class="blue-grey--text text--darken-2 hidden-md-and-down">eManagement</v-toolbar-title>

            <v-spacer></v-spacer>
            <div class="hidden-md-and-down">
                <v-btn
                 v-for="(nav, i) in navItems"
                 :key="i"
                 text
                 color="blue-grey darken-2"
                 class="font-weight-bold ml-2 mr-2"
                 router :to="nav.to"
                 v-text="nav.title"
                ></v-btn>
            </div>
            <student-login />
            <staff-login />
        </v-app-bar>
    </div>
</template>


<script>
import StudentLogin from '@/components/core/Student.vue';
import StaffLogin from '@/components/core/Staff.vue';
import { mdiHomeCityOutline } from "@mdi/js";
import { mdiAccountMultipleOutline } from "@mdi/js";

export default {
    components: {
        "student-login": StudentLogin,
        "staff-login": StaffLogin,
    },

    data() {
        return {
            drawer: false,
            color: "rgb(14, 27, 70)",
            navItems: [
                { title: "Home", to: "/" },
                { title: "About", to: "/about" },
            ],

            items: [
                { title: "Home", icon: mdiHomeCityOutline, to: "/" },
                { title: "About", icon: mdiAccountMultipleOutline, to: "/about" },
            ]
        }
    }
}
</script>

<style scoped>
    .v-list .v-list-item--active {
        background: white !important;
    }


</style>