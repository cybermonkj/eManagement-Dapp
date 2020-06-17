<template>
    <div>
        
        <v-row justify="center" class="mt-5">
            <v-col
                cols="12"
                md="4"
                sm="12"
            >
                <v-card
                    class="mx-auto"
                    elevation="2"
                >
                    <v-sheet
                        class="sheet mx-auto ml-4 mr-4"
                        color="primary"
                        elevation="12"
                    >
                        <v-sparkline
                            :labels="labels"
                            :value="value"
                            color="white"
                            line-width="2"
                            padding="16"
                        ></v-sparkline>
                    </v-sheet>

                    <v-card-text class="pt-0">
                        <div class="title font-weight-light mb-2">User Registrations</div>
                        <div class="subheading font-weight-light-grey--text">Lorem Ipsum dolor</div>
                        <v-divider class="my-2"></v-divider>
                        <v-icon
                            class="mr-2"
                            small
                        >
                            {{ clock }}
                        </v-icon>
                        <span class="caption grey--text font-weight-light">last registration 20 munites ago</span>
                    </v-card-text>
                </v-card><br><br>
            </v-col>

            <v-col
                cols="12"
                md="4"
                sm="12"
            >
                <v-card
                    class="mx-auto"
                    elevation="2"
                >
                    <v-sheet
                        class="sheet mx-auto ml-4 mr-4"
                        color="green"
                        elevation="12"
                        max-width="calc(100% - 32px)"
                    >
                        <v-sparkline
                            :labels="labels"
                            :value="value"
                            color="white"
                            line-width="2"
                            padding="16"
                        ></v-sparkline>
                    </v-sheet>

                    <v-card-text class="pt-0">
                        <div class="title font-weight-light mb-2">User Registrations</div>
                        <div class="subheading font-weight-light-grey--text">Lorem Ipsum dolor</div>
                        <v-divider class="my-2"></v-divider>
                        <v-icon
                            class="mr-2"
                            small
                        >
                            {{ clock }}
                        </v-icon>
                        <span class="caption grey--text font-weight-light">last registration 20 munites ago</span>
                    </v-card-text>
                </v-card><br><br>
            </v-col>

            <v-col
                cols="12"
                md="4"
                sm="12"
            >
                <v-card
                    class="mx-auto"
                    elevation="2"
                >
                    <v-sheet
                        class="sheet mx-auto ml-4 mr-4"
                        color="red"
                        elevation="12"
                    >
                        <v-sparkline
                            :labels="labels"
                            :value="value"
                            color="white"
                            line-width="2"
                        ></v-sparkline>
                    </v-sheet>

                    <v-card-text class="pt-0">
                        <div class="title font-weight-light mb-2">Subscribers</div>
                        <div class="subheading font-weight-light-grey--text">Lorem Ipsum dolor</div>
                        <v-divider class="my-2"></v-divider>
                        <v-icon
                            class="mr-2"
                            small
                        >
                            {{ subscribe }}
                        </v-icon>
                        <span class="caption grey--text font-weight-light">last event 2 munites ago</span>
                    </v-card-text>
                </v-card><br><br>
            </v-col>
        </v-row>
    </div>
</template>


<script>
import { mdiClockOutline } from "@mdi/js";
import { mdiBellAlertOutline } from "@mdi/js";

export default {
    data() {
        return {
            clock: mdiClockOutline,
            subscribe: mdiBellAlertOutline,
            labels: [
                '12am',
                '3am',
                '6am',
                '9am',
                '12pm',
                '3pm',
                '6pm',
                '9pm',
            ],
            value: [
                200,
                675,
                410,
                390,
                310,
                460,
                250,
                240,
            ],
        }
    },
}
</script>


<style scoped>
    .sheet {
        transform: translateY(-2.5rem) !important;
    }
    /* #fab {
        bottom: 0px !important;
        right: 25px !important;
        float: right !important;
    } */
    #icon {
        font-size: 1.5rem important;
    }
</style>