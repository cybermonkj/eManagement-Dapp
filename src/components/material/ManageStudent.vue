<template>
    <div>
        <app-bar />
        <v-content>
            <v-container>
                <v-row justify="center mt-5">
                    <v-card class="mx-auto" width="90%">
                        <v-toolbar class="toolbar">
                            <v-icon dark>{{ searchIcon }}</v-icon>
                            <v-toolbar-title class="title ml-2 white--text">Update Student</v-toolbar-title>
                        </v-toolbar>
                        <v-divider></v-divider>
                        <v-container>
                            <v-row justify="center">
                                <v-col cols="12" md="7" sm="7">
                                    <v-select
                                        outlined
                                        color="blue-grey"
                                        label="Select Student"
                                        :items="students"
                                    ></v-select>
                                </v-col>

                                <v-col cols="12" md="5" sm="5">
                                    <v-btn x-large dark class="toolbar ml-2"><v-icon left>{{ manageIcon }}</v-icon>Manage</v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-row>
            </v-container>
        </v-content>
        <footer-card />
    </div>
</template>

<script>
import AppBar from '@/components/core/AppBar.vue'
import Footer from '@/components/core/FooterCard.vue'
import { mdiMagnifyScan } from "@mdi/js";
import { mdiContentSaveEditOutline } from "@mdi/js";

export default {
    components: {
        'app-bar': AppBar,
        'footer-card': Footer,
    },

    data() {
        return {
            searchIcon: mdiMagnifyScan,
            manageIcon: mdiContentSaveEditOutline,
            students: [
                {
                    name: "Helen Micheal",
                    uid: "0001"
                },
                {
                    name: "Helen Micheal",
                    uid: "0001"
                },
                {
                    name: "Helen Micheal",
                    uid: "0001"
                },
                {
                    name: "Helen Micheal",
                    uid: "0001"
                },
            ]
        }
    },

    created() {

    },

    computed: {

    },

    methods: {

    },

}
</script>

<style scoped>
    .toolbar {
        background-color: rgb(14, 27, 70) !important;
    }
</style>

