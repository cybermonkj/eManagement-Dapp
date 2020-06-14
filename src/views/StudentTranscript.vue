<template>
  <div class="grey lighten-5">
    <app-bar></app-bar>
    <v-content>
      <v-container class="mt-12">
        <div class="share hidden-md-and-down">
          <v-btn @click="shareTranscript" id="fab" fab text dark color="info">
            <v-icon dark>{{ share }}</v-icon>
          </v-btn>
        </div>
        <div ref="transcript">
          <v-container>
            <v-row justify="center" align="start">
              <v-card class="mx-auto" width="800" color="white">
                <v-container>
                  <v-row justify="center" align="center">
                    <v-col cols="12" md="4" sm="12" class="text-center">
                      <v-avatar color="white" size="160">
                        <v-img :src="img" width="100"></v-img>
                      </v-avatar>
                    </v-col>

                    <v-col cols="12" md="4" sm="12" class="text-center">
                      <v-row justify="center">
                        <div class="">
                          <v-card-title
                            class="fon text-center font-weight-bold blue--text text--darken-3"
                          >
                            University of Jos
                            <br />Student
                            Profile
                          </v-card-title>
                        </div>
                      </v-row>
                    </v-col>

                    <v-col cols="12" md="4" sm="12" class="text-center">
                      <v-avatar color="white" size="150" tile>
                        <img src="../assets/unijos.jpeg" width="100%" alt="school logo">
                      </v-avatar>
                    </v-col>
                  </v-row>
                  <v-card class="mx-auto" flat>
                    <div>
                      <v-toolbar color="primary" dark>
                        <v-toolbar-title class="title">Personal Details</v-toolbar-title>
                      </v-toolbar>
                      <v-simple-table>
                        <template v-slot:default>
                          <tbody>
                            <tr v-for="detail in details" :key="detail.name">
                              <td>{{ detail.name }}</td>
                              <td>{{ detail.field }}</td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </div>

                    <div class="mt-2">
                      <v-toolbar color="primary" dark>
                        <v-toolbar-title class="title">Next of Kin Information</v-toolbar-title>
                      </v-toolbar>
                      <v-simple-table>
                        <template v-slot:default>
                          <tbody>
                            <tr v-for="item in kin" :key="item.name">
                              <td>{{ item.name }}</td>
                              <td>{{ item.field }}</td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </div>

                    <div class="mt-2">
                      <v-toolbar color="primary" dark>
                        <v-toolbar-title class="title">Sponsor Details</v-toolbar-title>
                      </v-toolbar>
                      <v-simple-table>
                        <template v-slot:default>
                          <tbody>
                            <tr v-for="item in sponsor" :key="item.name">
                              <td>{{ item.name }}</td>
                              <td>{{ item.field }}</td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </div>

                    <div class="mt-2">
                      <v-toolbar color="primary" dark>
                        <v-toolbar-title class="title">Academic Information</v-toolbar-title>
                      </v-toolbar>
                      <v-simple-table>
                        <template v-slot:default>
                          <tbody>
                            <tr v-for="item in academics" :key="item.name">
                              <td>{{ item.name }}</td>
                              <td>{{ item.field }}</td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </div>

                    <div class="mt-2">
                      <v-toolbar color="primary" dark>
                        <v-toolbar-title class="title">Registration Summary</v-toolbar-title>
                      </v-toolbar>
                      <v-simple-table>
                        <template v-slot:default>
                          <thead>
                            <tr>
                              <th class="left">Session</th>
                              <th class="left">Semester</th>
                              <th class="left">Standing</th>
                              <th class="left">SGPA</th>
                              <th class="left">CGPA</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(item, i) in summary" :key="i">
                              <td>{{ item.name }}</td>
                              <td>{{ item.semester }}</td>
                              <td>{{ item.standing }}</td>
                              <td>{{ item.sgpa }}</td>
                              <td>{{ item.cgpa }}</td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </div>

                    <div class="mt-2">
                      <v-toolbar color="primary" dark>
                        <v-toolbar-title class="title">Approved Results</v-toolbar-title>
                      </v-toolbar>
                      <v-simple-table>
                        <template v-slot:default>
                          <thead>
                            <tr>
                              <th class="left">Course Code</th>
                              <th class="left">Course Title</th>
                              <th class="left">Units</th>
                              <th class="left">Score</th>
                              <th class="left">Grade</th>
                              <th class="left">Session</th>
                              <th class="left">Semester</th>
                              <th class="left">Remark</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(item, i) in results" :key="i">
                              <td>{{ item.name }}</td>
                              <td>{{ item.courseTitle }}</td>
                              <td>{{ item.unit }}</td>
                              <td>{{ item.score }}</td>
                              <td>{{ item.grade }}</td>
                              <td>{{ item.session }}</td>
                              <td>{{ item.semester }}</td>
                              <td>{{ item.remark }}</td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </div>

                    <div class="mt-2">
                      <v-toolbar color="primary" dark>
                        <v-toolbar-title class="title">Current Registration</v-toolbar-title>
                      </v-toolbar>
                      <v-simple-table>
                        <template v-slot:default>
                          <thead>
                            <tr>
                              <th class="left">Course Code</th>
                              <th class="left">Course Title</th>
                              <th class="left">Units</th>
                              <th class="left">Session</th>
                              <th class="left">Semester</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(item,i) in courseRegistration" :key="i">
                              <td>{{ item.name }}</td>
                              <td>{{ item.courseTitle }}</td>
                              <td>{{ item.unit }}</td>
                              <td>{{ item.session }}</td>
                              <td>{{ item.semester }}</td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </div>

                    <div class="mt-2">
                      <v-toolbar color="primary" dark>
                        <v-toolbar-title class="title">Financial History</v-toolbar-title>
                      </v-toolbar>
                      <v-simple-table>
                        <template v-slot:default>
                          <thead>
                            <tr>
                              <th class="left">Semester</th>
                              <th class="left">Name</th>
                              <th class="left">Amount Expected</th>
                              <th class="left">Amount Paid</th>
                              <th class="left">OutStanding</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(item, i) in history" :key="i">
                              <td>{{ item.name }}</td>
                              <td>{{ item.semester }}</td>
                              <td>{{ item.expectedAmount }}</td>
                              <td>{{ item.paidAmount }}</td>
                              <td>{{ item.outstanding }}</td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </div>
                  </v-card>
                </v-container>
              </v-card>
            </v-row>
          </v-container>
        </div>
      </v-container>
      <v-container>
        <v-row justify="center" align="center" class="mb-5">
          <v-btn class color="green darken-1" dark @click="transcript">
            Print Transcript
            <v-icon right>{{ icon }}</v-icon>
          </v-btn>
        </v-row>
      </v-container>
    </v-content><br><br><br>
    <footer-card />
  </div>
</template>


<script>
import * as jsPDF from "jspdf";
// import * as html2pdf from 'html2pdf';
import AppBar from "../components/core/AppBar";
import FooterCard from "../components/core/FooterCard";
import { mdiCloudDownload } from "@mdi/js";
import { mdiShareVariant } from "@mdi/js";

export default {
  components: {
    "app-bar": AppBar,
    "footer-card": FooterCard
  },
  data() {
    return {
      icon: mdiCloudDownload,
      share: mdiShareVariant,
      male: "/img/male.822d356a.svg",
      female: "/img/female.065d920b.svg",
      img: "",
      details: [
        {
          name: "Student Name",
          field: this.$store.state.pd_name
        },
        {
          name: "Matric No.",
          field: this.$store.state.ad_matno
        },
        {
          name: "Department",
          field: this.$store.state.ad_dept
        },
        {
          name: "Programme",
          field: this.$store.state.ad_course
        },
        // {
        // name: "Level",
        // field: "null"
        // },
        // {
        // name: "Marital Status",
        // field: "null"
        // },
        {
          name: "Gender",
          field: this.$store.state.pd_gender
        },
        // {
        // name: "Hall of Residence",
        // field: "null"
        // },
        // {
        // name: "Religion",
        // field: "null"
        // },
        // {
        // name: "Date of Birth",
        // field: "null"
        // },
        {
          name: "Nationality",
          field: this.$store.state.pd_national
        },
        {
          name: "State of Origin",
          field: this.$store.state.pd_state
        }
        // {
        // name: "Local Government",
        // field: "null"
        // }
      ],

      kin: [
        {
          name: "Name of Next of Kin",
          field: this.$store.state.nd_name
        },
        {
          name: "Next of Kin Contact",
          field: this.$store.state.nd_contact
        }
      ],

      sponsor: [
        {
          name: "Name of Sponsor",
          field: this.$store.state.sd_name
        },
        {
          name: "Sponsor Contact",
          field: this.$store.state.sd_number
        },
        {
          name: "Sponsor Address",
          field: this.$store.state.sd_addr
        },
        {
          name: "Sponsor Email",
          field: this.$store.state.sd_email
        }
      ],

      academics: [
        {
          name: "Current CGPA",
          field: "null"
        },
        {
          name: "Total Units Passed so Far",
          field: "null"
        },
        {
          name: "Total Units Required for Graduation",
          field: "120"
        },
        {
          name: "Programme Status",
          field: "Running"
        },
        {
          name: "Entry Session",
          field: this.$store.state.td_semester
        },
        {
          name: "Mode of Entry",
          field: "null"
        }
      ],

      summary: [
        {
          name: this.$store.state.rc_session,
          semester: this.$store.state.rc_semester,
          standing: "null",
          sgpa: "null",
          cgpa: "null"
        }
      ],

      results: [
        {
          name: this.$store.state.rt_code,
          courseTitle: this.$store.state.rt_title,
          unit: this.$store.state.rt_creditUnit,
          score: this.$store.state.rt_score,
          grade: this.$store.state.rt_grade,
          session: this.$store.state.rc_session,
          semester: this.$store.state.rc_semester,
          remark: "null"
        }
      ],

      courseRegistration: [
        {
          name: this.$store.state.rc_code,
          courseTitle: this.$store.state.rc_title,
          unit: this.$store.state.rc_creditUnit,
          session: this.$store.state.rc_session,
          semester: this.$store.state.rc_semester
        }
      ],

      history: [
        {
          name: this.$store.state.td_name,
          semester: this.$store.state.td_semester,
          expectedAmount: this.$store.state.td_amount,
          paidAmount: this.$store.state.td_amount,
          outstanding: "null"
        }
      ]
    };
  },
  methods: {
    transcript() {
      const doc = new jsPDF();
      const contentHtml = this.$refs.transcript.innerHTML;
      doc.fromHTML(contentHtml, 15, 15, {
        width: 200
      });
      // save pdf
      doc.save("transcript.pdf");
    },

    studentAvatar() {
      if (this.$store.state.pd_gender === "Male") {
        this.img = this.male;
      } else {
        this.img = this.female;
      }
      console.log(this.img);
    }
  },

  shareTranscript() {
    alert("Service not available at the moment...")
  },

  created() {
    this.studentAvatar();
  },
};
</script>


<style scoped>
.fon {
  font-size: 25px;
}
#fab {
  float: right !important;
}
#table {
  border: none !important;
  box-shadow: none !important;
}
</style>