<template>
    <div>
        <app-bar />
        <v-content class="grey lighten-5 mt-5">
            <panel /><br>
            <br>
            <br>
            <div id="fab-env">
                <v-btn
                    id="fab"
                    class="mx-2"
                    fab
                    ripple
                    large
                    dark
                    color="amber darken-1"
                    router to="/register/student/new"
                >
                    <v-icon dark id="icon">{{ plus }}</v-icon>
                </v-btn>
            </div>
        </v-content>
        <footer-card />
    </div>
</template>

<script>
import AppBar from '@/components/core/AppBar.vue';
import FooterCard from '@/components/core/FooterCard.vue';
import Panel from '@/components/material/Panel.vue';
import { mdiPlus } from "@mdi/js";



export default {
    components: {
        'app-bar': AppBar,
        'footer-card': FooterCard, 
        'panel': Panel,
    },
    data() {
        return {
            plus: mdiPlus,
        }
    },
}
</script>

<style scoped>
    #fab {
        position: fixed;
        bottom: 75px;
        right: 25px;
        z-index: 10;
    }
    #icon {
        font-size: 1.5rem !important;
    }
    @media screen and (max-width: 1024px) {
        .font {
        font-size: 0.7rem !important;
        }
        #fab {
            bottom: 80px;
            right: 25px;
        }
        .v-btn--fab.v-size--large {
            height: 55px;
            width: 55px;
        }
    }
</style>