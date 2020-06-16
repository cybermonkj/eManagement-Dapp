<template>
    <div>
        <v-card class="mx-auto mt-2" elevation="6">
            <v-toolbar flat>
                <v-icon color="primary">{{ listIcon }}</v-icon>
                <v-toolbar-title class="title primary--text ml-3">My Classes</v-toolbar-title>
            </v-toolbar>
            <v-divider></v-divider>
            <v-container>
                <v-simple-table fixed-header>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="tex-left">S/N</th>
                                <th class="tex-left">Class Name</th>
                                <th class="tex-left">No. of Students</th>
                                <th class="tex-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, i) in classes" :key="i">
                                <td>{{ item.value }}</td>
                                <td>{{ item.title }}</td>
                                <td>{{ item.noStudents }}</td>
                                <td><v-btn x-small ripple color="amber">view</v-btn> <v-btn x-small ripple dark color="red">give dossier remarks</v-btn><v-btn x-small ripple dark class="ml-1 green">Print Broadsheet</v-btn><v-btn x-small ripple dark class="ml-1 blue-grey darken-3">Print All Results</v-btn></td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-container>
        </v-card>

        <v-card class="mx-auto mt-8" elevation="6">
            <v-toolbar flat>
                <v-icon color="primary">{{ listIcon }}</v-icon>
                <v-toolbar-title class="title primary--text ml-3">Subjects I Teach</v-toolbar-title>
            </v-toolbar>
            <v-divider></v-divider>
            <v-container>
                <v-simple-table fixed-header>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="tex-left">S/N</th>
                                <th class="tex-left">Subject Name</th>
                                <th class="tex-left">Class</th>
                                <th class="tex-left">Teacher</th>
                                <th class="tex-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, i) in subjects" :key="i">
                                <td>{{ item.value }}</td>
                                <td>{{ item.title }}</td>
                                <td>{{ item.class }}</td>
                                <td>{{ item.teacher }}</td>
                                <td class="left"><v-btn x-small ripple dark class="ml-1 blue-grey darken-3">Record Scores</v-btn></td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-container>
        </v-card>
    </div>
</template>


<script>
import { mdiViewList } from "@mdi/js";


export default {
    data() {
        return {
            listIcon: mdiViewList,

            /**
             * Data
            */
           
           classes: [
               {
                   title: 'Primary 5',
                   noStudents: 2,
                   value: 1
               },

               {
                   title: 'JSS 2',
                   noStudents: 5,
                   value: 2
               },

               {
                   title: 'JSS 3',
                   noStudents: 3,
                   value: 3
               },

               {
                   title: 'SS1',
                   noStudents: 1,
                   value: 4
               },
           ],

           subjects: [
               {
                   title: 'Mathematics',
                   class: 'SSS 1',
                   teacher: 'Musa Zoo',
                   value: 1
               },
               {
                   title: 'Futher Mathematics',
                   class: 'SSS 2',
                   teacher: 'Musa Zoo',
                   value: 2
               },
               {
                   title: 'Chemistry',
                   class: 'SSS 1',
                   teacher: 'Musa Zoo',
                   value: 2
               },
           ]
        }
    }
}
</script>

<style scoped>

</style>