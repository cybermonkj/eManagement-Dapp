<template>
    <div>
        <app-bar />
        <v-content class="grey lighten-5">
            <v-container>
                <v-card
                 class="mx-auto mt-4"
                 max-width="950"    
                 flat
                >
                    <v-toolbar color="indigo" dark>
                        <v-toolbar-title class="headline">Team</v-toolbar-title>
                    </v-toolbar>
                    <v-divider></v-divider>
                        <v-row justify="center">
                            <v-col
                             cols="12"
                             md="4"
                             sm="12"
                            >
                                <v-hover>
                                    <template v-slot:default="{ hover }">
                                        <v-card
                                         class="mx-auto"
                                         elevation="5"
                                        >
                                            <v-img height="250" src="@/assets/male.svg"></v-img>

                                            <v-card-text>
                                                <h2 class="title primary--text text--darken-1">Alabura Usman Aliyu</h2>
                                                <p class="subheader font-weight-light blue-grey--text text--darken-2"><v-icon color="blue-grey" left>{{ code }}</v-icon>Lead Developer</p>
                                                <span class="caption grey--text text--darken-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                                            </v-card-text>

                                            <v-divider></v-divider>
                                            <v-card-actions class="blue"></v-card-actions>
                                            <!-- Overlay Content -->
                                            <v-fade-transition>
                                                <v-overlay
                                                    v-if="hover"
                                                    absolute
                                                    color="#0D47A1"
                                                >   
                                                    <v-row justify="center">
                                                        <v-btn small class="mx-1 white bor" @click="go">
                                                            <v-icon class="grey--text text--darken-3">{{ github }}</v-icon>
                                                        </v-btn>
                                                        <v-btn small class="mx-1 white bor" @click="go">
                                                            <v-icon class="blue--text">{{ twitter }}</v-icon>
                                                        </v-btn>
                                                        <v-btn small class="mx-1 white bor" @click="go">
                                                            <v-icon class="blue--text text--darken-2">{{ linkedin }}</v-icon>
                                                        </v-btn>
                                                        <v-btn small class="mx-1 white bor" @click="go">
                                                            <v-icon class="blue--text text--darken-4">{{ facebook }}</v-icon>
                                                        </v-btn>
                                                    </v-row>
                                                    <div class="text-center mt-2">
                                                        <v-btn>Portfolio <v-icon right>{{ open }}</v-icon></v-btn>
                                                    </div>
                                                </v-overlay>
                                            </v-fade-transition>
                                        </v-card>
                                    </template>
                                </v-hover>
                            </v-col>

                            <v-col
                             cols="12"
                             md="4"
                             sm="12"
                            >
                                <v-hover>
                                    <template v-slot:default="{ hover }">
                                        <v-card
                                         class="mx-auto"
                                         elevation="5"
                                        >
                                            <v-img height="250" src="@/assets/male.svg"></v-img>

                                            <v-card-text>
                                                <h2 class="title amber--text text--darken-2">Anop Joshua</h2>
                                                <p class="subheader font-weight-light blue-grey--text text--darken-2"><v-icon color="blue-grey" left>{{ code }}</v-icon>Developer</p>
                                                <span class="caption grey--text text--darken-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                                            </v-card-text>

                                            <v-divider></v-divider>
                                            <v-card-actions class="amber"></v-card-actions>
                                            <!-- Overlay Content -->
                                            <v-fade-transition>
                                                <v-overlay
                                                    v-if="hover"
                                                    absolute
                                                    color="#FFAB00"
                                                >   
                                                    <v-row justify="center">
                                                        <v-btn small class="mx-1 white bor" @click="go">
                                                            <v-icon class="grey--text text--darken-3">{{ github }}</v-icon>
                                                        </v-btn>
                                                        <v-btn small class="mx-1 white bor" @click="go">
                                                            <v-icon class="blue--text">{{ twitter }}</v-icon>
                                                        </v-btn>
                                                        <v-btn small class="mx-1 white bor" @click="go">
                                                            <v-icon class="blue--text text--darken-2">{{ linkedin }}</v-icon>
                                                        </v-btn>
                                                        <v-btn small class="mx-1 white bor" @click="go">
                                                            <v-icon class="blue--text text--darken-4">{{ facebook }}</v-icon>
                                                        </v-btn>
                                                    </v-row>

                                                    <div class="text-center mt-2">
                                                        <v-btn>See more info <v-icon right>{{ open }}</v-icon></v-btn>                                                    </div>
                                                </v-overlay>
                                            </v-fade-transition>
                                        </v-card>
                                    </template>
                                </v-hover>
                            </v-col>

                            <v-col
                             cols="12"
                             md="4"
                             sm="12"
                            >
                                <v-hover>
                                    <template v-slot:default="{ hover }">
                                        <v-card
                                         class="mx-auto"
                                         elevation="5"
                                        >
                                            <v-img height="250" src="@/assets/male.svg"></v-img>

                                            <v-card-text>
                                                <h2 class="title indigo--text text--darken-2">Stephen Kusu</h2>
                                                <p class="subheader font-weight-light blue-grey--text text--darken-2"><v-icon color="blue-grey" left>{{ idea }}</v-icon>Co-founder</p>
                                                <span class="caption grey--text text--darken-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                                            </v-card-text>

                                            <v-divider></v-divider>
                                            <v-card-actions class="indigo"></v-card-actions>
                                            <!-- Overlay Content -->
                                            <v-fade-transition>
                                                <v-overlay
                                                    v-if="hover"
                                                    absolute
                                                    color="#1A237E"
                                                >
                                                    <v-row justify="center">
                                                        <v-btn small class="mx-1 white bor" @click="go">
                                                            <v-icon class="grey--text text--darken-3">{{ github }}</v-icon>
                                                        </v-btn>
                                                        <v-btn small class="mx-1 white bor" @click="go">
                                                            <v-icon class="blue--text">{{ twitter }}</v-icon>
                                                        </v-btn>
                                                        <v-btn small class="mx-1 white bor" @click="go">
                                                            <v-icon class="blue--text text--darken-2">{{ linkedin }}</v-icon>
                                                        </v-btn>
                                                        <v-btn small class="mx-1 white bor" @click="go">
                                                            <v-icon class="blue--text text--darken-4">{{ facebook }}</v-icon>
                                                        </v-btn>
                                                    </v-row>

                                                    <div class="text-center mt-2">
                                                        <v-btn>See more info <v-icon right>{{ open }}</v-icon></v-btn>
                                                    </div>
                                                </v-overlay>
                                            </v-fade-transition>
                                        </v-card>
                                    </template>
                                </v-hover>
                            </v-col>
                        </v-row>
                </v-card><br>
                <br>
                <br>
            </v-container>
        </v-content>
        <footer-card />
    </div>
</template>

<script>
import AppBar from '@/components/core/AppBar.vue';
import FooterCard from '@/components/core/FooterCard.vue';
import { mdiOpenInNew } from "@mdi/js";
import { mdiCodeTags } from "@mdi/js";
import { mdiBrain } from "@mdi/js";
import { mdiGithubCircle } from '@mdi/js';
import { mdiLinkedin } from "@mdi/js";
import { mdiTwitterCircle } from "@mdi/js";
import {  mdiFacebook } from '@mdi/js';

export default {
    components: {
        'app-bar': AppBar,
        'footer-card': FooterCard,
    },

    data() {
        return {
            open: mdiOpenInNew,
            code: mdiCodeTags,
            idea: mdiBrain,
            github: mdiGithubCircle,
            linkedin: mdiLinkedin,
            twitter: mdiTwitterCircle,
            facebook: mdiFacebook,
        }
    },

    methods: {
        go() {
            console.log(`function Fired...`)
        },
    }
}
</script>

<style scoped>
    .bor {
        border-radius: 8px !important;
    }
</style>