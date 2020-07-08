<template>
    <div class="text-center">
        <v-card outlined max-width="95%" height="100" class="mx-auto" elevation="6">
            <v-container>
                <v-row justify="center">
                    <v-col
                    cols="12"
                    md="4"
                    sm="12"
                    >
                        <v-text-field
                        outlined
                        color="blue-grey"
                        :prepend-inner-icon="acct"
                        label="Search for student"
                        ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    md="4"
                    sm="12"
                    >
                        <v-select
                         :items="searchCates"
                         label="Search by"
                         color="blue-grey"
                         outlined
                        ></v-select>
                    </v-col>

                    <v-col
                    cols="12"
                    md="4"
                    sm="12"
                    >
                        <v-select
                         :items="classes"
                         label="Class"
                         color="blue-grey"
                         outlined
                        ></v-select>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>

        <v-card
         class="mx-auto mt-5"
         
         flat
        >
            <v-container>
                <v-row>
                    <v-col
                     cols="12"
                     md="3"
                     sm="12"
                    >
                        <v-card @click="push" height="111" color="blue-grey lighten-4" id="cardBorder">
                            <v-row justify="center">
                                <v-col
                                 cols="12"
                                 md="4"
                                 sm="4"
                                >
                                    <v-avatar tile size="60">
                                        <v-icon color="blue-grey darken-4">{{ searchIcon }}</v-icon>
                                    </v-avatar>
                                </v-col>

                                <v-col
                                 cols="12"
                                 md="8"
                                 sm="8"
                                >
                                    <v-card-text class="subtitle-1 font-weight-bold blue-grey--text text--darken-4">Search for Student</v-card-text>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>

                    <v-col
                     cols="12"
                     md="3"
                     sm="12"
                    >
                        <v-card @click="push" height="111" color="blue-grey lighten-4" id="cardBorder">
                            <v-row justify="center">
                                <v-col
                                 cols="12"
                                 md="4"
                                 sm="4"
                                >
                                    <v-avatar tile size="60">
                                        <v-icon color="blue-grey darken-4">{{ tableIcon }}</v-icon>
                                    </v-avatar>
                                </v-col>

                                <v-col
                                 cols="12"
                                 md="8"
                                 sm="8"
                                >
                                    <v-card-text class="subtitle-1 font-weight-bold blue-grey--text text--darken-4">View Termly Results</v-card-text>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>

                    <v-col
                     cols="12"
                     md="3"
                     sm="12"
                    >
                        <v-card @click="push" height="111" color="blue-grey lighten-4" id="cardBorder">
                            <v-row justify="center">
                                <v-col
                                 cols="12"
                                 md="4"
                                 sm="4"
                                >
                                    <v-avatar tile size="60">
                                        <v-icon color="blue-grey darken-4">{{ tableIcon2 }}</v-icon>
                                    </v-avatar>
                                </v-col>

                                <v-col
                                 cols="12"
                                 md="8"
                                 sm="8"
                                >
                                    <v-card-text class="subtitle-1 font-weight-bold blue-grey--text text--darken-4">View Annual Results</v-card-text>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>

                    <v-col
                     cols="12"
                     md="3"
                     sm="12"
                    >
                        <v-card @click="push" height="111" color="blue-grey lighten-4" id="cardBorder">
                            <v-row justify="center">
                                <v-col
                                 cols="12"
                                 md="4"
                                 sm="4"
                                >
                                    <v-avatar tile size="60">
                                        <v-icon color="blue-grey darken-4">{{ editIcon }}</v-icon>
                                    </v-avatar>
                                </v-col>

                                <v-col
                                 cols="12"
                                 md="8"
                                 sm="8"
                                >
                                    <v-card-text class="subtitle-1 font-weight-bold blue-grey--text text--darken-4">Record Scores</v-card-text>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col
                     cols="12"
                     md="3"
                     sm="12"
                    >
                        <v-card router to="/add_student" height="111" color="blue-grey lighten-4" id="cardBorder">
                            <v-row justify="center">
                                <v-col
                                 cols="12"
                                 md="4"
                                 sm="4"
                                >
                                    <v-avatar tile size="60">
                                        <v-icon color="blue-grey darken-4">{{ newStudentIcon }}</v-icon>
                                    </v-avatar>
                                </v-col>

                                <v-col
                                 cols="12"
                                 md="8"
                                 sm="8"
                                >
                                    <v-card-text  class="subtitle-1 font-weight-bold blue-grey--text text--darken-4">Create New Student</v-card-text>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>

                    <v-col
                     cols="12"
                     md="3"
                     sm="12"
                    >
                        <v-card router to="/manage_student" height="111" color="blue-grey lighten-4" id="cardBorder">
                            <v-row justify="center">
                                <v-col
                                 cols="12"
                                 md="4"
                                 sm="4"
                                >
                                    <v-avatar tile size="60">
                                        <v-icon color="blue-grey darken-4">{{ modifyIcon }}</v-icon>
                                    </v-avatar>
                                </v-col>

                                <v-col
                                 cols="12"
                                 md="8"
                                 sm="8"
                                >
                                    <v-card-text class="subtitle-1 font-weight-bold blue-grey--text text--darken-4">Modify Student Info</v-card-text>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>

                    <v-col
                     cols="12"
                     md="3"
                     sm="12"
                    >
                        <v-card @click="push" height="111" color="blue-grey lighten-4" id="cardBorder">
                            <v-row justify="center">
                                <v-col
                                 cols="12"
                                 md="4"
                                 sm="4"
                                >
                                    <v-avatar tile size="60">
                                        <v-icon color="blue-grey darken-4">{{ homeIcon }}</v-icon>
                                    </v-avatar>
                                </v-col>

                                <v-col
                                 cols="12"
                                 md="8"
                                 sm="8"
                                >
                                    <v-card-text class="subtitle-1 font-weight-bold blue-grey--text text--darken-4">Create New Class</v-card-text>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>

                    <v-col
                     cols="12"
                     md="3"
                     sm="12"
                    >
                        <v-card @click="push" height="111" color="blue-grey lighten-4" id="cardBorder">
                            <v-row justify="center">
                                <v-col
                                 cols="12"
                                 md="4"
                                 sm="4"
                                >
                                    <v-avatar tile size="60">
                                        <v-icon color="blue-grey darken-4">{{ sessionIcon  }}</v-icon>
                                    </v-avatar>
                                </v-col>

                                <v-col
                                 cols="12"
                                 md="8"
                                 sm="8"
                                >
                                    <v-card-text class="subtitle-1 font-weight-bold blue-grey--text text--darken-4">Change Term and Session</v-card-text>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col
                     cols="12"
                     md="3"
                     sm="12"
                    >
                        <v-card @click="push" height="111" color="blue-grey lighten-4" id="cardBorder">
                            <v-row justify="center">
                                <v-col
                                 cols="12"
                                 md="4"
                                 sm="4"
                                >
                                    <v-avatar tile size="60">
                                        <v-icon color="blue-grey darken-4">{{ promteIcon }}</v-icon>
                                    </v-avatar>
                                </v-col>

                                <v-col
                                 cols="12"
                                 md="8"
                                 sm="8"
                                >
                                    <v-card-text class="subtitle-1 font-weight-bold blue-grey--text text--darken-4">Promote Students</v-card-text>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>

                    <v-col
                     cols="12"
                     md="3"
                     sm="12"
                    >
                        <v-card @click="push" height="111" color="blue-grey lighten-4" id="cardBorder">
                            <v-row justify="center">
                                <v-col
                                 cols="12"
                                 md="4"
                                 sm="4"
                                >
                                    <v-avatar tile size="60">
                                        <v-icon color="blue-grey darken-4">{{ messageIcon }}</v-icon>
                                    </v-avatar>
                                </v-col>

                                <v-col
                                 cols="12"
                                 md="8"
                                 sm="8"
                                >
                                    <v-card-text class="subtitle-1 font-weight-bold blue-grey--text text--darken-4">Send SMS</v-card-text>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>

                    <v-col
                     cols="12"
                     md="3"
                     sm="12"
                    >
                        <v-card router to="/create/new/staff" @click="push" height="111" color="blue-grey lighten-4" id="cardBorder">
                            <v-row justify="center">
                                <v-col
                                 cols="12"
                                 md="4"
                                 sm="4"
                                >
                                    <v-avatar tile size="60">
                                        <v-icon color="blue-grey darken-4">{{ staffIcon }}</v-icon>
                                    </v-avatar>
                                </v-col>

                                <v-col
                                 cols="12"
                                 md="8"
                                 sm="8"
                                >
                                    <v-card-text router to="/create/new/staff" class="subtitle-1 font-weight-bold blue-grey--text text--darken-4">Create New Staff</v-card-text>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>

                    <v-col
                     cols="12"
                     md="3"
                     sm="12"
                    >
                        <v-card @click="push" height="111" color="blue-grey lighten-4" id="cardBorder">
                            <v-row justify="center">
                                <v-col
                                 cols="12"
                                 md="4"
                                 sm="4"
                                >
                                    <v-avatar tile size="60">
                                        <v-icon color="blue-grey darken-4">{{ settingIcon }}</v-icon>
                                    </v-avatar>
                                </v-col>

                                <v-col
                                 cols="12"
                                 md="8"
                                 sm="8"
                                >
                                    <v-card-text class="subtitle-1 font-weight-bold blue-grey--text text--darken-4">Settings</v-card-text>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </div>
</template>

<script>
import { mdiAccountCircleOutline } from '@mdi/js';
import { mdiMagnifyPlusOutline } from '@mdi/js';
import { mdiTableHeadersEye } from '@mdi/js';
import { mdiTableSearch } from '@mdi/js';
import { mdiTableEdit } from '@mdi/js';
import { mdiHumanChild } from '@mdi/js';
import { mdiPencil } from '@mdi/js';
import { mdiHomePlus } from '@mdi/js';
import { mdiRecycle } from '@mdi/js';
import { mdiTrendingUp } from '@mdi/js';
import { mdiMessagePlusOutline } from '@mdi/js';
import { mdiHumanMaleFemale } from '@mdi/js';
import { mdiSettingsOutline } from '@mdi/js';

export default {
    data() {
        return {
            /**
             * Icon category 
             */ 
            acct: mdiAccountCircleOutline,
            searchIcon: mdiMagnifyPlusOutline,
            tableIcon: mdiTableHeadersEye,
            tableIcon2: mdiTableSearch,
            editIcon: mdiTableEdit,
            newStudentIcon: mdiHumanChild,
            modifyIcon: mdiPencil,
            homeIcon: mdiHomePlus,
            sessionIcon: mdiRecycle,
            promteIcon: mdiTrendingUp,
            messageIcon: mdiMessagePlusOutline,
            staffIcon: mdiHumanMaleFemale,
            settingIcon: mdiSettingsOutline,

            searchCates: [ 'Name', 'Admission Number' ],
            classes: [ 'All Classes', 'Primary 1', 'primary 2', 'primary 3', 'SS1', 'SS2', 'SS3']
        }
    },

    methods: {
        push() {
            alert("Card clicked");
        }
    }
}
</script>

<style scoped>
    #cardBorder {
        border-radius: 15px 0px 15px 0px !important;
    }

    #cardBorder:hover {
        cursor: pointer;
        background: #ECEFF1 !important;
    }
</style>