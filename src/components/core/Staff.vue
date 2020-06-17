<template>
    <div>
        <v-dialog v-model="dialog" persistent max-width="380">
            <template v-slot:activator="{ on }">
                <v-btn v-on="on" dark ripple class="student ml-1 mr-1">Staff</v-btn>
            </template>
            <v-card>
                <v-img
                 src="@/assets/staff.svg"
                ></v-img>
                <v-divider></v-divider>
                <v-card-text>
                    <div class="text-center mt-4">
                        <span class="font-weight-bold" style="color: rgb(14, 27, 70) !important; font-size: 1rem !important;">Decentralize e-management system</span>
                        <p class="overline mt-1 blue-grey--text">Welcome Admin</p>
                    </div>
                    <v-container>
                        <v-form>
                            <v-row>
                                <v-col cols="12" md="12" sm="12">
                                    <v-text-field
                                        v-model="code"
                                        rounded
                                        shaped
                                        outlined
                                        color="blue-grey"
                                        label="Email"
                                        type="email"
                                        class="mt-n2"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="12" sm="12">
                                    <v-text-field
                                        v-model="code"
                                        rounded
                                        shaped
                                        outlined
                                        color="blue-grey"
                                        label="Password"
                                        type="password"
                                        class="mt-n6"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            
                        </v-form>
                    </v-container>
                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-btn @click="dialog = false"  class="mt-1 grey lighten-3" style="color: rgb(14, 27, 70) !important; font-size: 12px !important;">
                            close
                            <v-icon right>{{ close }}</v-icon>
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn router to="/admin/panel" dark class="mt-1" style="background-color: rgb(14, 27, 70) !important; font-size: 12px !important;">Login</v-btn>
                    </v-card-actions>
                    
                </v-card-text>
            </v-card>
            
        </v-dialog>
    </div>
</template>


<script>
import { mdiCloseCircle } from "@mdi/js";


export default {
    data() {
        return {
            Studentcode: null,
            dialog: false,
            close: mdiCloseCircle,
        }
    },
}
</script>

<style scoped>
    .student {
        background-color: rgb(14, 27, 70) !important;
    }
    .studentCard {
        border-radius: none;
    }
</style>