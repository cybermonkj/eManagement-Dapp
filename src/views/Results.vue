<template>
    <div>
        <app-bar></app-bar>
        <v-container class="mt-10">
            <v-content>
                <v-card class="mx-auto" max-width="900" height="700">
                <v-toolbar flat color="indigo" dark>
                <v-toolbar-title>Student Result</v-toolbar-title>
                </v-toolbar>
                <v-tabs vertical>
                <v-tab>
                    <v-icon left>{{ icon }}</v-icon>
                    100 Level
                </v-tab>
                <v-tab>
                    <v-icon left>{{ icon }}</v-icon>
                    200 Level
                </v-tab>
                <v-tab>
                    <v-icon left>{{ icon }}</v-icon>
                    300 Level
                </v-tab>

                <v-tab-item>
                    <v-card flat class="grey lighten-5">
                    <v-card-text>
                       <result-data />
                    </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat class="grey lighten-5">
                    <v-card-text>
                       <result-data />
                    </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat class="grey lighten-5">
                    <v-card-text>
                      <result-data />
                    </v-card-text>
                    </v-card>
                </v-tab-item>
                </v-tabs>
            </v-card>
        </v-content>
        </v-container>
        <footer-card />
    </div>
</template>

<script>
import AppBar from '../components/core/AppBar';
import ResultTemplate from '../components/material/ResultData';
import FooterCard from "../components/core/FooterCard";

import { mdiCalendar } from '@mdi/js';
// import EthereumMixin from '../mixins/ethereumMixin';
export default {
    components: {
        'app-bar': AppBar,
        'result-data': ResultTemplate,
        'footer-card': FooterCard
    },

    data: () => ({
        icon: mdiCalendar
    }),

    // mixins: [EthereumMixin]
}
</script>