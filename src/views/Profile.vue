<template>
  <div>
    <app-bar></app-bar>
    <v-content class="grey lighten-5 mt-12">
      <v-container>
        <div>
          <v-row justify="center">
            <v-col cols="12" sm="12" md="4">
              <v-card elevation="5" class="mx-auto">
                <div class="text-center pos">
                  <v-avatar color="grey lighten-1" size="125">
                    <img src="@/assets/female.svg" alt="avatar" width="100%">
                  </v-avatar>
                </div>
                <div class="text-center" id="data">
                  <v-card-text class="text-center font indigo--text text--darken-3">{{ name }}</v-card-text>
                  <v-card-text class="text-center blue-grey--text text--darken-3">
                    <span class="font-weight-thin">Email :</span>
                    <span>{{email}}</span>
                  </v-card-text>
                  <v-card-text class="text-center font-weight-light blue-grey--text text--darken-3">
                    <span>Matriculation Number:</span>
                    <span>{{ matno }}</span>
                  </v-card-text>
                </div>
                <v-row justify="center" class="mb-2">
                  <v-card-actions class="text-center">
                    <v-btn class="text-center" color="green" dark @click="bioData">
                      Print BioData
                      <v-icon left>{{print}}</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-row>
              </v-card>
              <br />
              <br />
            </v-col>
            <v-col cols="12" md="8" sm="12">
              <div ref="bio_data">
                <v-card elevation="5" class="mx-auto">
                  <v-toolbar dark class="mr-4 ml-4 indigo" id="barx">
                    <v-toolbar-title class="title">Bio Data</v-toolbar-title>
                  </v-toolbar>
                  <v-container>
                    <v-simple-table>
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-left">Name</th>
                            <th class="text-left">Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                           v-for="(item, i) in items"
                           :key="i"
                          >
                            <td>{{ item.name }}</td>
                            <td>{{ item.detail }}</td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-container>
                </v-card>
              </div>
              <br />
              <br />
              <br />
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-content>
    <footer-card />
  </div>
</template>

<script>
import * as jsPDF from 'jspdf';
// import EthereumMixin from "../mixins/ethereumMixin";
import AppBar from "../components/core/AppBar";
import FooterCard from "../components/core/FooterCard";
import { mdiCloudDownloadOutline } from "@mdi/js";

export default {
  components: {
    "app-bar": AppBar,
    "footer-card": FooterCard
  },

  computed: {
    name() {
      return this.$store.state.pd_name;
    },
    email() {
      return this.$store.state.ad_email;
    },
    matno() {
      return this.$store.state.ad_matno;
    }
  },

  data() {
    return {
      print: mdiCloudDownloadOutline,
      male: '/img/male.822d356a.svg',
      female: '/img/female.065d920b.svg',
      img: '/img/male.822d356a.svg',
      items: [
        {
          name: "Matricution Number",
          detail: this.$store.state.ad_matno
        },
        {
          name: "Name",
          detail: this.$store.state.pd_name
        },
        {
          name: "Email",
          detail: this.$store.state.ad_email
        },
        {
          name: "School Programme",
          detail: this.$store.state.ad_program
        },
        {
          name: "Faculty",
          detail: this.$store.state.ad_faculty
        },
        {
          name: "Department",
          detail: this.$store.state.ad_dept
        },
        {
          name: "Course",
          detail: this.$store.state.ad_course
        },
        {
          name: "Age",
          detail: this.$store.state.pd_age
        },
        {
          name: "Nationality",
          detail: this.$store.state.pd_national
        },
        {
          name: "State of Origin",
          detail: this.$store.state.pd_state
        },
        {
          name: "Gender",
          detail: this.$store.state.pd_gender
        },
        {
          name: "Name of next of kin",
          detail: this.$store.state.nd_name
        },
        {
          name: "Next of kin contact",
          detail: this.$store.state.nd_contact
        },
        {
          name: "Religion",
          detail: this.$store.state.pd_religion
        },
        {
          name: "Sponsor(s) Name",
          detail: this.$store.state.sd_name
        },
        {
          name: "Sponsor(s) Phone Number",
          detail: this.$store.state.sd_number
        },
        {
          name: "Sponsor(s) Address",
          detail: this.$store.state.sd_addr
        },
        {
          name: "Sponsor(s) Email",
          detail: this.$store.state.sd_email
        }
      ]
    }
  },

  methods: {
    bioData() {
      const doc = new jsPDF();
      const contentHtml = this.$refs.bio_data.innerHTML;
      doc.fromHTML(contentHtml, 15, 15, {
        width: 180
      });
      doc.save("bio-data.pdf");
    },

    avatar() {
      if (this.$store.state.pd_gender === 'Male') {
        this.img = this.male
      } else if (this.$store.state.pd_gender === 'Female') {
        this.img = this.female
      } else {
        this.img = this.male
      }
    }
  },

  created() {
    this.avatar();
  },
};
</script>


<style scoped>
#barx {
  transform: translateY(-2rem);
  border-radius: 15px 0px 15px 0px;
}

.pos {
  transform: translateY(-3.5rem);
}

.font {
  font-size: 30px;
}
#data {
  margin-top: -20px !important;
}
</style>