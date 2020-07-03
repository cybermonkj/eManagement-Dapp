<template>
    <div class="mt-5">
        <app-bar />
        <v-content>
            <v-container>
                <v-row justify="center">
                    <v-container>
                        <v-card class="mx-auto mt-12" max-width="500">
                            <v-img
                            src="@/assets/signin.svg"
                            ></v-img>
                            <v-divider></v-divider>

                            <v-container class="mt-12">
                                <form @submit.prevent action="">
                                    <v-container>
                                        <v-text-field
                                            v-model.trim="signupForm.name"
                                            label="Name"
                                            type="text"
                                            shaped
                                            outlined
                                            color="blue-grey"
                                            class="pass2"
                                        ></v-text-field>

                                        <v-select
                                            v-model.trim="signupForm.title"
                                            label="Title"
                                            :items="titles"
                                            shaped
                                            outlined
                                            color="blue-grey"
                                            class="pass2"
                                        ></v-select>

                                        <v-text-field
                                            v-model.trim="signupForm.email"
                                            label="Email"
                                            type="email"
                                            shaped
                                            outlined
                                            color="blue-grey"
                                            class="pass2"
                                        ></v-text-field>

                                        <v-text-field
                                            v-model.trim="signupForm.number"
                                            label="Phone Number"
                                            type="text"
                                            shaped
                                            outlined
                                            color="blue-grey"
                                            class="pass2"
                                        ></v-text-field>

                                        <v-text-field
                                            v-model.trim="signupForm.password"
                                            label="Password"
                                            type="password"
                                            shaped
                                            outlined
                                            color="blue-grey"
                                            class="pass2"
                                            :append-icon="showP ? eyeIcon : eyeOffIcon"
                                            @click:append="showP = !showp"
                                        ></v-text-field>
                                    </v-container>
                                    
                                    <v-divider class="cardActions"></v-divider>
                                    <v-card-actions class="cardActions">
                                        <v-spacer></v-spacer>
                                        <v-btn @click.prevent="signup" dark class="mt-1 indigo darken-3">Sign-Up</v-btn>
                                    </v-card-actions>
                                </form>
                            </v-container>
                        </v-card>
                    </v-container>
                </v-row><br>
            </v-container>
        </v-content>
    </div>
</template>

<script>
import AppBar from '@/components/core/AppBar.vue';
import { mdiEyeOutline } from "@mdi/js";
import { mdiEyeOffOutline } from "@mdi/js";

export default {
    components: {
        'app-bar': AppBar,
    },

    data() {
        return {
            // Icons
            eyeIcon: mdiEyeOutline,
            eyeOffIcon: mdiEyeOffOutline,

            // Js code
            showP: false,
            titles: ['Mr', 'Mrs', 'Dr', 'Proff'],

            // Firebase code
            signupForm: {
                name: "",
                title: "",
                number: "",
                email: "",
                password: ""
            },
        }
    },

    methods: {
        signup() {
            this.$store.dispatch('signup', {
                name: this.signupForm.name,
                title: this.signupForm.title,
                number: this.signupForm.number,
                email: this.signupForm.email,
                password: this.signupForm.password
            })
        }
    }
    
}
</script>

<style scoped>
    .pass {
        transform: translateY(-2rem) !important;
    }
    .cardActions {
        transform: translateY(-1rem) !important;
    }
    .signAction {
        transform: translateY(-3.5rem) !important;
    }
</style>