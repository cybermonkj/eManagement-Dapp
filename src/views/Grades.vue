<template>
    <div>
        <app-bar></app-bar>

        <v-content class="white mt-10">
            <level-card></level-card>
        </v-content>
        <footer-card />
    </div>
</template>


<script>
// import EthereumMixin from '../mixins/ethereumMixin'
import AppBar from '../components/core/AppBar';
import LevelCard from '../components/material/LevelCard';
import FooterCard from "../components/core/FooterCard";

export default {
    components: {
        'app-bar': AppBar,
        'level-card': LevelCard,
        'footer-card': FooterCard,
    },
    // mixins: [EthereumMixin]
}
</script>