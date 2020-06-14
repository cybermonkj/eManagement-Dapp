<template>
    <div class="mt-4">
        <v-container>
            <v-row justify="center">
                <v-col
                 v-for="(card, i) in cards"
                 :key="i"
                 cols="12"
                 md="3"
                >
                    <v-card
                     class="mx-auto"
                     elevation="4"
                    >
                        <v-card
                         id="nestedCard"
                         class="mx-auto ml-3 mr-3 text-center"
                         color="blue-grey"
                         height="70"
                         width="70"
                         elevation="5"
                        >
                            <div>
                                <v-avatar tile size="35">
                                    <v-icon dark>{{ card.icon }}</v-icon>
                                </v-avatar>
                                <!-- <p dark v-text="card.title"></p> -->
                            </div>
                            <p class=" caption white--text">{{ card.title }} <span>Level</span></p>
                        </v-card>

                        <v-sheet class="text-center">
                            <v-card-text class="blue-grey--text text--darken-3" v-text="card.text"></v-card-text>
                            <v-avatar size="80" color="grey lighten-3">
                                <span class="blue--text  text--darken-2 headline">{{ card.grade }}</span>
                            </v-avatar>
                        </v-sheet><br>
                    </v-card><br><br>
                </v-col>

                <div class="text-center">
                <v-card
                 class="mx-auto text-center"
                 max-width="300"
                 flat
                >
                    <v-container>
                        <div class="mb-10">
                            <span class="headline">Cummulative Grade Point</span>
                            <v-card-text>
                                <v-avatar size="140" color="green">
                                    <span class="font-weight-bold white--text font">{{ cummulativeGrade }}</span>
                                </v-avatar>
                            </v-card-text>
                            <v-btn text>
                                <v-icon color="green" left>{{ up }}</v-icon>
                                <span>Second Class Upper</span>
                            </v-btn>
                        </div>
                    </v-container>
                </v-card>
            </div>
            </v-row><br>
        </v-container>
    </div>
</template>


<script>
import { mdiCalendarRange } from '@mdi/js';
import { mdiArrowUp } from '@mdi/js'

export default {
    data: () => ({
        cards: [
            { title: "100", icon: mdiCalendarRange, text: "Hundred Level Grade Point", grade: 2.70 },
            { title: "200", icon: mdiCalendarRange, text: "Two Hundred Level Grade Point", grade: 3.31 },
            { title: "300", icon: mdiCalendarRange, text: "Three Hundred Level Grade Point", grade: 3.59 },
            { title: "400", icon: mdiCalendarRange, text: "Four Hundred Level Grade Point", grade: 3.81 },
        ],
        cummulativeGrade: 3.35,
        up: mdiArrowUp,
    }),

    methods: {
        gradePoint: function() {
            let gp = this.cummulativeGrade;
            alert(gp);
        }
        
    }
}
</script>

<style>
    #nestedCard {
        transform: translateY(-1.4rem);
        padding: 0.5rem 0;
    }

    .font {
        font-size: 3rem;
    }
</style>