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
                        <form @submit.prevent="onLogin">
                            <v-row>
                                <v-col cols="12" md="12" sm="12">
                                    <v-text-field
                                        v-model="loginForm.email"
                                        rounded
                                        shaped
                                        outlined
                                        :rules="[rules.required]"
                                        color="blue-grey"
                                        label="Email"
                                        type="email"
                                        class="mt-n2"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="12" sm="12">
                                    <v-text-field
                                        v-model="loginForm.password"
                                        rounded
                                        shaped
                                        outlined
                                        color="blue-grey"
                                        label="Password"
                                        :type="showP ? 'text' : 'password'"
                                        :rules="[rules.required, rules.min]"
                                        hint="At least 8 characters"
                                        counter
                                        class="mt-n6"
                                        :append-icon="showP ? eyeIcon : eyeOffIcon"
                                        @click:append="showP = !showP"
                                        required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </form>
                    </v-container>
                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-btn @click="dialog = false"  class="mt-1 grey lighten-3" style="color: rgb(14, 27, 70) !important; font-size: 12px !important;">
                            close
                            <v-icon right>{{ close }}</v-icon>
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn @click.prevent="login" dark class="mt-1" style="background-color: rgb(14, 27, 70) !important; font-size: 12px !important;" type="submit">Login</v-btn>
                    </v-card-actions>
                    
                </v-card-text>
            </v-card>
            
        </v-dialog>
    </div>
</template>


<script>
import { mdiCloseCircle } from "@mdi/js";
import { mdiEyeOutline } from "@mdi/js";
import { mdiEyeOffOutline } from "@mdi/js";


export default {
    data() {
        return {
            // Icons
            close: mdiCloseCircle,
            eyeIcon: mdiEyeOutline,
            eyeOffIcon: mdiEyeOffOutline,

            //Js code
            dialog: false,
            showP: false,

            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => ('The email and password you entered don\'t match'),
            },

            // Firebase Code
            loginForm: {
                email: "",
                password: "",
            },
            
        }
    },

    methods: {
        login() {
            this.$store.dispatch('login', {
                email: this.loginForm.email,
                password: this.loginForm.password
            })
        }
    }
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