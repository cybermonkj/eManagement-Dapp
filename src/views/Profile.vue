<template>
  <div>
    <app-bar />

    <v-content>
      <v-container>
        <v-card class="mx-auto grey lighten-5" id="profile" max-width="800" height="400">
          <v-container>
            <v-row just>
              <v-col cols="12" md="6" sm="12">
                <v-avatar id="img" size="120">
                  <v-img
                    src="@/assets/male.svg"
                  ></v-img>
                </v-avatar>

                <v-card-title class="title blue-grey--text text--darken-2" style="text-align: center !important;">John Micheal</v-card-title>
              </v-col>
              <v-col cols="12" md="6" sm="12">

                <v-simple-table class="white">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left ">Title</th>
                        <th class="text-left">Detail</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in details" :key="item.name">
                        <td>{{ item.name }}</td>
                        <td>{{ item.detail }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-container>
    </v-content>
    
    <footer-card />
  </div>
</template>

<script>
import AppBar from '@/components/core/AppBar.vue';
import FooterCard from '@/components/core/FooterCard.vue';

export default {
  components: {
    'app-bar': AppBar,
    'footer-card': FooterCard,
  },

  data() {
    return {
      details: [
        {
          name: "Name",
          detail: "John Micheal",
        },
        {
          name: 'Student/Pupil ID',
          detail: "0120",
        },
        {
          name: 'Class',
          detail: "Primary Five (5)",
        },
      ],
    }
  }
}
</script>

<style scoped>
  #profile {
    border-radius: 16rem 0rem 0rem 0rem !important;
    border: #263238 2px solid !important;
  }
  #img {
    margin-top: 7rem !important;
    transform: translateX(2rem) !important;
  }
</style>