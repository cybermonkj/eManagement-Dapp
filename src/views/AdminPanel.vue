<template>
    <div>
        <app-bar />
        <v-content class="white mt-12">
            <v-container>
                <detail-card />
                <panel />
                <sub-dash />
                <sub-tables /><br>
            </v-container>

            <v-sheet height="200"></v-sheet>
            <br>
            <br>
            <!-- <div id="fab-env">
                <v-btn
                    id="fab"
                    class="mx-2"
                    fab
                    ripple
                    large
                    dark
                    
                >
                    <v-icon size="45" dark id="icon">{{ chat }}</v-icon>
                </v-btn>
            </div> -->
        </v-content>
        <footer-card />
    </div>
</template>

<script>
import AppBar from '@/components/core/AppBar.vue';
import FooterCard from '@/components/core/FooterCard.vue';
import Panel from '@/components/material/Panel.vue';
import DetailCard from '@/components/material/DetailCard.vue';
import SubDashboard from '@/components/material/SubDashboard.vue';
import SubTables from '@/components/material/SubTables.vue';
import { mdiChat } from "@mdi/js";



export default {
    components: {
        'app-bar': AppBar,
        'footer-card': FooterCard, 
        'panel': Panel,
        'detail-card': DetailCard,
        'sub-dash': SubDashboard,
        'sub-tables': SubTables,
    },
    data() {
        return {
            chat: mdiChat,
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
        background-color: rgb(14, 27, 70) !important;
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
            height: 50px;
            width: 50px;
        }
    }
</style>