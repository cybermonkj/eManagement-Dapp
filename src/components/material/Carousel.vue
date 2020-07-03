<template>
  <v-carousel 
    cycle
    id="carousel"
    hide-delimiters
    show-arrows-on-hover
    class="mb-5"
    >
      <v-carousel-item >
         <iframe id="frame" src="img/dash.f0d390f7.svg"  width="100%" height="500">
         <v-img contain src="img/dash.f0d390f7.svg" height="100%" width="100%"></v-img>
         </iframe>
      </v-carousel-item>

      <v-carousel-item >
         <iframe id="frame" src="img/adminPanel1.7e35066c.svg"  width="100%" height="400">
           <v-img contain src="img/adminPanel1.7e35066c.svg" height="100%" width="100%"></v-img>
         </iframe>
      </v-carousel-item>

      <v-carousel-item >
         <iframe id="frame" src="img/fortmaticLogin.1d3c26eb.svg"  width="100%" height="400">
           <v-img contain src="img/fortmaticLogin.1d3c26eb.svg" height="100%" width="100%"></v-img>
         </iframe>
      </v-carousel-item>

      <v-carousel-item >
         <iframe id="frame" src="img/studentLogin.be4c2fc2.svg"  width="100%" height="400">
           <v-img contain src="img/studentLogin.be4c2fc2.svg" height="100%" width="100%"></v-img>
         </iframe>
      </v-carousel-item>

      <v-carousel-item >
         <iframe id="frame" src="img/staffLogin.7a72f5aa.svg"  width="100%" height="400">
           <v-img contain src="img/staffLogin.7a72f5aa.svg" height="100%" width="100%"></v-img>
         </iframe>
      </v-carousel-item>

      <v-carousel-item >
         <iframe id="frame" src="studentDash.09f12230.svg"  width="100%" height="400">
           <v-img contain src="studentDash.09f12230.svg" height="100%" width="100%"></v-img>
         </iframe>
      </v-carousel-item>

      <v-carousel-item >
         <iframe id="frame" src="img/studentProfile.47209216.svg"  width="100%" height="400">
           <v-img contain src="img/studentProfile.47209216.svg" height="100%" width="100%"></v-img>
         </iframe>
      </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        slides: [
          
          {
            src: '@/assets/app/adminPanel1.svg',
          },
          {
            src: 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/investing_7u74.svg',
          },
          {
            src: 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/personal_finance_tqcd.svg',
          },
          {
            src: 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/around_the_world_v9nu.svg',
          },
          {
            src: 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/business_deal_cpi9.svg',
          },
        ],
      }
    },
  }
</script>

<style scoped>
    #carousel {
        height: 500px !important;
        width: 100% !important;
    }

    #frame {
        border: none;
    }
</style>