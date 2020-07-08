<template>
    <div>
        <app-bar />
            <v-content>
                <v-container>
                    <v-row no-gutter>
                        <v-card class="mx-auto mb-12" elevation="5" width="90%">
                            <v-toolbar class="toolbar">
                                <v-icon dark class="">{{ plusIcon }}</v-icon>
                                <v-toolbar-title class="title ml-2 white--text">Create Student</v-toolbar-title>
                            </v-toolbar>
                            <v-divider></v-divider>

                            <v-container>
                                <v-row>
                                    <v-col cols="12" md="12" sm="12">
                                        <div>Admission Number: </div>
                                        <v-text-field
                                            v-model.trim="student.id"
                                            outlined
                                            label="Admission No"
                                            color="blue-grey"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="12" md="4" sm="12">
                                        <div>First Name: </div>
                                        <v-text-field
                                            v-model.trim="student.fname"
                                            outlined
                                            label="First Name"
                                            color="blue-grey"
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="4" sm="12">
                                        <div>Middle Name: </div>
                                        <v-text-field
                                            v-model.trim="student.mName"
                                            outlined
                                            label="Middle Name"
                                            color="blue-grey"
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="4" sm="12">
                                        <div>Last Name: </div>
                                        <v-text-field
                                            v-model.trim="student.lName"
                                            outlined
                                            label="Last Name"
                                            color="blue-grey"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="12" md="4" sm="12">
                                        <div>Gender: </div>
                                        <v-select
                                            v-model.trim="student.sex"
                                            outlined
                                            label="Gender"
                                            :items="sex"
                                            color="blue-grey"
                                        ></v-select>
                                    </v-col>

                                    <v-col cols="12" md="4" sm="12">
                                        <div>Class: </div>
                                        <v-select
                                            v-model.trim="student.class"
                                            outlined
                                            label="Class"
                                            :items="classes"
                                            color="blue-grey"
                                        ></v-select>
                                    </v-col>

                                    <!-- <v-col cols="12" md="4" sm="12">
                                        <div>Date of Birth: </div>
                                        <v-text-field
                                            v-model.trim="student.dob"
                                            outlined
                                            label="DOB"
                                            color="blue-grey"
                                        ></v-text-field>
                                    </v-col> -->
                                    <v-col cols="12" md="4" sm="12" class="mt-5">
                                        <v-menu
                                            ref="menu1"
                                            v-model.trim="menu1"
                                            :close-on-content-click="false"
                                            transition="scale-transition"
                                            offset-y
                                            max-width="290px"
                                            min-width="290px"
                                        >
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field
                                                    v-model.trim="date"
                                                    label="Date of Birth"
                                                    hint="MM/DD/YYYY format"
                                                    persistent-hint
                                                    outlined
                                                    
                                                    v-bind="attrs"
                                                    color="blue-grey"
                                                    @blur="date = parseDate(date)"
                                                    v-on="on"
                                                ></v-text-field>
                                            </template>
                                        <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
                                        </v-menu>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="12" md="4" sm="12">
                                        <div>Parents Phone Number: </div>
                                        <v-text-field
                                            v-model.trim="student.number"
                                            outlined
                                            label="Valid Phone Number"
                                            color="blue-grey"
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="4" sm="12">
                                        <div>Parents Email: </div>
                                        <v-text-field
                                            v-model.trim="student.email"
                                            outlined
                                            label="Active Email"
                                            color="blue-grey"
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="4" sm="12">
                                        <div>Parents Address: </div>
                                        <v-text-field
                                            v-model.trim="student.addr"
                                            outlined
                                            label="Parents Address"
                                            color="blue-grey"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-divider class="mx-2"></v-divider>

                                <v-card-actions>
                                    <v-row justify="center" no-gutter>
                                        <v-btn @click="addStudent" large dark class="toolbar"><v-icon dark left >{{ plusIcon }}</v-icon>create</v-btn>
                                    </v-row>
                                </v-card-actions>
                            </v-container>
                        </v-card><br>
                    </v-row><br>
                </v-container>
            </v-content>
        <footer-card />
    </div>
</template>
    

<script>
import AppBar from '@/components/core/AppBar.vue'
import Footer from '@/components/core/FooterCard.vue'
import { mdiPlusCircleOutline } from '@mdi/js'
import { mdiCalendar } from '@mdi/js'
const fb = require("../../firebaseConfig")


export default {
    components: {
        'app-bar': AppBar,
        'footer-card': Footer
    },

    data() {
        return {
            // Icons
            plusIcon: mdiPlusCircleOutline,
            calendarIcon: mdiCalendar,

            // Js Code
            sex: ['Male', 'Female'],
            classes: ['Primary 1', 'Primary 2', 'Primary 3', 'Jss 1', 'Jss 2', 'SSS 1', 'SSS 2'],
            date: new Date().toISOString().substr(0, 10),
            menu1: false,

            // Firebase code
            student: {
                id: null,
                fName: "",
                mname: "",
                lname: "",
                sex: "",
                class: null,
                dob: null,
                number: null,
                email: "",
                addr: ""
            }
        }
    },

    created() {

    },

    computed: {

    },

    methods: {
        addStudent() {
            const obj = this.student
            const studentBuffer = JSON.stringify(obj)
            const buffer = Buffer.from(studentBuffer, 'utf-8')
            console.log(buffer)

            fb.studentCollection.doc('2').set({
                addr: this.student.addr,
                class: this.student.class,
                dob: this.student.dob,
                email: this.student.email,
                fname: this.student.fname,
                gender: this.student.gender,
                lName: this.student.lname,
                mName: this.student.mname,
                number: this.student.number,
                uid: this.student.id
            }).then(() => {
                alert('Document written successfully!')
            }).catch(error => {
                alert('An error occured!')
                console.error("Error writing document: ",error)
            }) 
        }
    },
}
</script>

<style scoped>
    .toolbar {
        background-color: rgb(14, 27, 70) !important;
    }
</style>