<template>
    <div>
        <v-row justify="center" class="mt-5">
            <v-col
             v-for="(card, i) in cards"
             :key="i"
             cols="12"
             md="4"
            >
                <v-card
                 id="mainCard"
                 class="mx-auto"
                 height="270"
                 elevation="4"
                >
                    <v-card
                     id="nestedCard"
                     class="mx-auto ml-3 mr-3 text-center"
                     :color="card.color"
                     height="160"
                     elevation="8"
                    >
                        <v-card-title class="white--text text-center" id="title" v-text="card.title"></v-card-title>
                        <div class="text-center">
                            <v-avatar tile size="80">
                                <v-icon dark>{{ card.icon }}</v-icon>
                            </v-avatar>
                        </div>
                    </v-card>
                    <v-sheet class="text-center">
                        <!-- <v-card-text class="fon grey--text text--darken-3 " v-text="card.text"></v-card-text> -->
                        <v-btn 
                         router :to="card.route"
                         color="grey lighten-3"
                         rounded
                         large
                         ripple
                        >
                            <span class="blue-grey--text text--darken-3">View</span>
                            <v-icon  right class="blue-grey--text text--darken-3">{{ open }}</v-icon>
                        </v-btn>
                    </v-sheet>
                </v-card><br>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mdiBookOpenPageVariant } from '@mdi/js';
import { mdiFilePdfBox } from '@mdi/js';
import { mdiBook } from '@mdi/js';
import { mdiOpenInApp } from '@mdi/js';

export default {
    data: () => ({
        open: mdiOpenInApp,
        cards: [
            { title: "Report",  color: "red", icon: mdiFilePdfBox, route: "/transcript" },
            { title: "Results",  color: "green", icon: mdiBookOpenPageVariant, route: "/result"},
            { title: "Position", color: "blue", icon: mdiBook, route: "/grade_point" },
        ],
    }),
}
</script>

<style scoped>
    #nestedCard {
        transform: translateY(-3rem);
        padding: 0.5rem 0;
        border-radius: 1.2rem;
    }
    .fon {
        font-size: 17px;
    }
    #title {
        display: block !important;
        text-align: center !important;
    }
</style>