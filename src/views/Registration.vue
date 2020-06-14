<template>
    <div>
        <v-container>
            <guide />
            <div class="text-center">
                <v-btn router to="/admin/panel" dark class="mt-2 blue-grey"><v-icon left>{{ back }}</v-icon>back to panel</v-btn>
            </div>
        </v-container>
        <v-content>
            <v-container class="mt-6">
                <div class="text-center">
                   <register-student />
                </div>
            </v-container>
        </v-content>
    </div>
</template>

<script>
import Registration from '../components/material/RegisterStudent';
import Guide from '../components/material/Guide';
import { mdiPagePrevious } from "@mdi/js";

export default {
    components: {
        'register-student': Registration,
        'guide': Guide,
    },

    data() {
        return {
            back: mdiPagePrevious,
        }
    },
}
</script>