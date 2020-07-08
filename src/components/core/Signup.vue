<template>
    <div class="mt-5">
        <app-bar />
        <v-content>
            <v-container>
                <v-row justify="center">
                    <v-container>
                        <v-card class="mx-auto mt-1" elevation="12" max-width="500">
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
                                            required
                                        ></v-text-field>

                                        <v-select
                                            v-model.trim="signupForm.title"
                                            label="Title"
                                            :items="titles"
                                            shaped
                                            outlined
                                            color="blue-grey"
                                            class="pass2"
                                            required
                                        ></v-select>

                                        <v-select
                                            v-model.trim="signupForm.sex"
                                            label="Gender"
                                            :items="sex"
                                            shaped
                                            outlined
                                            color="blue-grey"
                                            class="pass2"
                                            required
                                        ></v-select>

                                        <v-select
                                            v-model.trim="signupForm.office"
                                            label="office"
                                            :items="offices"
                                            shaped
                                            outlined
                                            color="blue-grey"
                                            class="pass2"
                                            required
                                        ></v-select>

                                        <v-text-field
                                            v-model.trim="signupForm.number"
                                            label="Phone Number"
                                            type="text"
                                            shaped
                                            outlined
                                            color="blue-grey"
                                            class="pass2"
                                            required
                                        ></v-text-field>

                                        <v-text-field
                                            v-model.trim="signupForm.email"
                                            label="Email"
                                            type="email"
                                            :rules="[rules.required]"
                                            shaped
                                            outlined
                                            color="blue-grey"
                                            class="pass2"
                                        ></v-text-field>

                                        <v-text-field
                                            v-model.trim="signupForm.password"
                                            shaped
                                            outlined
                                            color="blue-grey"
                                            label="Password"
                                            :type="showP ? 'text' : 'password'"
                                            :rules="[rules.required, rules.min]"
                                            hint="At least 8 characters"
                                            counter
                                            class="pass2"
                                            :append-icon="showP ? eyeIcon : eyeOffIcon"
                                            @click:append="showP = !showP"
                                            required
                                    ></v-text-field>
                                    </v-container>
                                    
                                    <v-divider class="cardActions"></v-divider>
                                    <v-card-actions class="cardActions">
                                        <v-btn @click="reset" color="blue-grey lighten-4">reset</v-btn>
                                        <v-spacer></v-spacer>
                                        <v-btn @click.prevent="signup"  dark class="mt-1 btnColor"><v-icon left>{{ regIcon }}</v-icon>create</v-btn>
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
import { mdiTelegram } from "@mdi/js";
const fb = require('../../firebaseConfig')

export default {
    components: {
        'app-bar': AppBar,
    },

    data() {
        return {
            // Icons
            eyeIcon: mdiEyeOutline,
            eyeOffIcon: mdiEyeOffOutline,
            regIcon: mdiTelegram,

            // Js code
            showP: false,
            titles: ['Proff', 'Dr', 'Mr', 'Mrs', 'Miss'],
            sex: ['Male', 'Female', 'Other'],
            offices: ['Teacher', 'Form Master', 'Administrator'],
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => ('The email and password you entered don\'t match'),
            },

            // Firebase code
            signupForm: {
                name: "",
                title: "",
                sex: "",
                office: "",
                number: "",
                email: "",
                password: ""
            },
        }
    },

    methods: {
        signup() {
           fb.auth.createUserWithEmailAndPassword(this.signupForm.email, this.signupForm.password)
            .then(user => {
                console.log(user)

                // Create user object
                const newUser = fb.auth.currentUser
                newUser.updateProfile({
                    displayName: this.signupForm.name
                }).then(() => {
                    fb.staffCollection.doc(user.user.uid.toString()).set({
                        gender: this.signupForm.sex,
                        number: parseInt(this.signupForm.number, 10),
                        office: this.signupForm.office,
                        title: this.signupForm.title,
                        timestamp: new Date
                    }).then(() => {
                        alert("Document written successfully!")
                        this.$router.push("/admin/panel")
                    }).catch(error => {
                        alert("Error writing document!")
                        throw error
                    })
                }).catch(error => {
                        alert('An error occured, please try again later!')
                        throw error
                    })
            }).catch(error => {
                let errCode = error.code
                let errMsg = error.message
                if (errCode == 'auth/weak-password') {
                    alert('Password is too weak!')
                    console.error(errCode)
                } else {
                    alert('An error occured, please check your internet connection!')
                    throw errMsg
                }
            })
        },

        reset() {
            this.signupForm.name = "";
            this.signupForm.title = "";
            this.signupForm.sex = "";
            this.signupForm.office = "";
            this.signupForm.number = "";
            this.signupForm.email = "";
            this.signupForm.password = "";
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
    .btnColor {
        background-color: rgb(14, 27, 70) !important;
    }
</style>