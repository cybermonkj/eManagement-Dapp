<template>
    <div class="mt-5">
        <app-bar />
        <v-row justify="center">
            <v-card class="mx-auto" max-width="500">
                <v-img
                 src="@/assets/signin.svg"
         
                ></v-img>
                <v-divider></v-divider>

                <v-container class="mt-12">
                    <form action="">
                        <v-container>
                            <v-text-field
                                label="Email"
                                type="email"
                                shaped
                                outlined
                                color="blue-grey"
                                class="pass2"
                            ></v-text-field>

                            <v-text-field
                                label="Password"
                                type="password"
                                shaped
                                outlined
                                color="blue-grey"
                                class="pass2"
                                append-iocn="showP ? 'visibility' : 'visibility_off'"
                                @click:append="showP = !showP"
                            ></v-text-field>
                            <v-text-field
                                label="Confirm Password"
                                type="password"
                                shaped
                                outlined
                                color="blue-grey"
                                class="pass2"
                            ></v-text-field>
                        </v-container>
                        
                        <v-divider class="cardActions"></v-divider>
                        <v-card-actions class="cardActions">
                            <v-spacer></v-spacer>
                            <v-btn dark class="mt-1 indigo darken-3">Sign-Up</v-btn>
                        </v-card-actions>
                    </form>
                </v-container>
            </v-card>
        </v-row><br>
    </div>
</template>

<script>
import AppBar from '@/components/core/AppBar.vue';

export default {
    components: {
        'app-bar': AppBar,
    },

    data() {
        return {
            showP: false,
        }
    },

    methods: {
        onSignup() {
            
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