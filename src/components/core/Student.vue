<template>
    <div>
        <v-dialog v-model="dialog" persistent max-width="380">
            <template v-slot:activator="{ on }">
                <v-btn v-on="on" dark ripple class="student ml-1 mr-1">Student</v-btn>
            </template>
            <v-card>
                <v-img
                 src="@/assets/students.svg"
                ></v-img>
                <v-divider></v-divider>
                <v-card-text>
                    <div class="text-center mt-4">
                        <span class="font-weight-bold" style="color: rgb(14, 27, 70) !important; font-size: 1rem !important;">Decentralize e-management system</span>
                    </div>
                    <v-container>
                        <v-form>
                            <v-text-field
                                v-model="Studentcode"
                                rounded
                                shaped
                                outlined
                                counter
                                color="blue-grey"
                                label="Enter child's ID"
                                :rules="[rules.required, rules.min]"
                                class="mt-3"
                            ></v-text-field>
                        </v-form>
                    </v-container>
                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-btn @click="dialog = false" icon dark class="mt-1 blue-grey lighten-1">
                            <v-icon>{{ close }}</v-icon>
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn router to="/dashboard" dark  class="mt-1" style="background-color: rgb(14, 27, 70) !important; font-size: 11px !important;">Access Dashboard</v-btn>
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
            // Icons
            close: mdiCloseCircle,

            // JS code
            dialog: false,
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 4 || 'Id must be 4 numbers',
                emailMatch: () => ('The email and password you entered don\'t match'),
            },

            // Firebase 
            studentCode: "",
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