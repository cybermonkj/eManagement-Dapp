/* eslint-disable no-undef */
<template>
  <div>
    <keep-alive>
      <v-card elevation="6" color="basil">
        <v-row justify="center">
          <v-card-title class="text-center justify-center py-6">
            <h1 class="font-weight-bold display-2 blue-grey--text">Registration</h1>
          </v-card-title>
        </v-row>

        <v-tabs v-model="tab" background-color="transparent" color="blue-grey" grow>
          <v-tab v-for="item in items" :key="item.title" :href="item.id">{{ item.title }}</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item id="bio-data">
            <v-card id="bio-data" flat color="grey lighten-4">
              <v-form @submit.prevent="storeData">
                <v-container>
                  <v-card-text class="fon blue-grey--text">Academic Details</v-card-text>
                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model.trim="id"
                        type="text"
                        label="Student ID"
                        placeholder="19-01-0001"
                        outlined
                      ></v-text-field>year=19, faculty=01, matNo=0001
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        v-model.lazy="matNo"
                        type="text"
                        label="Matric No."
                        placeholder="UJ/2019/ed/0001"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        v-model.lazy="email"
                        type="email"
                        label="Primary Email"
                        placeholder="2019ed0001@unijos.edu.ng"
                        outlined
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" md="6">
                      <v-select
                        v-model.lazy="program"
                        :items="schoolPrograms"
                        label="School Programme"
                        outlined
                      ></v-select>
                    </v-col>

                    <v-col cols="12" sm="12" md="6">
                      <v-text-field v-model.lazy="faculty" type="text" label="Faculty" outlined></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field v-model.lazy="dept" type="text" label="Department" outlined></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="6">
                      <v-text-field v-model.lazy="course" type="text" label="Course" outlined></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" md="6">
                      <v-select
                        v-model.lazy="currentLevel"
                        :items="levels"
                        label="Current Level"
                        outlined
                      ></v-select>
                    </v-col>

                    <v-col cols="12" sm="12" md="6">
                      <v-select
                        v-model.lazy="programLength"
                        :items="years"
                        label="Length of Program"
                        outlined
                      ></v-select>
                    </v-col>
                  </v-row>
                  
                  <!-- Personal details-->
                  <v-card-text class="fon blue-grey--text">Personal Details</v-card-text>

                  <v-row>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field v-model="name" type="text" label="Name" outlined></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="6">
                      <v-text-field 
                       v-model.lazy="dob" 
                       :prepend-inner-icon="event"
                       type="text" 
                       label="Date of birth" 
                       outlined
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field v-model.lazy="national" type="text" label="Nationality" outlined></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="6">
                      <v-text-field v-model.lazy="state" type="text" label="State of Origin" outlined></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field v-model.lazy="lga" type="text" label="Local Government Area" outlined></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="6">
                      <v-text-field v-model.lazy="addr" type="text" label="Address" outlined></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" md="6">
                      <v-select v-model.lazy="gender" :items="sex" label="Gender" outlined></v-select>
                    </v-col>

                    <v-col cols="12" sm="12" md="6">
                      <v-select
                        v-model.lazy="religion"
                        :items="religions"
                        label="Religion"
                        outlined
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field v-model.lazy="contact" type="tel" label="Contact" outlined></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="6">
                      <v-file-input
                        v-model.lazy="passport"
                        type="file"
                        accept="image/png, image/jpeg, image/bmp"
                        placeholder="Upload Passport"
                        :prepend-inner-icon="camera"
                        label="Passport"
                        outlined
                      ></v-file-input>
                    </v-col>
                  </v-row>

                  <!-- Next of kin details -->
                  <v-card-text class="fon blue-grey--text">Next of Kin Details</v-card-text>
                  <v-row>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        v-model="nextName"
                        type="text"
                        label="Name of Next of Kin"
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        v-model="nextContact"
                        type="text"
                        label="Next of Kin Contact"
                        outlined
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        v-model="nextAddr"
                        type="text"
                        label="Address of Next of Kin"
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        v-model="nextEmail"
                        type="text"
                        label="Email of Next Kin Contact (Optional)"
                        outlined
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <!-- Sponsor Details -->
                  <v-card-text class="fon blue-grey--text">Sponsor Details</v-card-text>
                  <v-row>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        v-model="sponsorName"
                        type="text"
                        label="Name of sponsor"
                        outlined
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        v-model="sponsorContact"
                        type="text"
                        label="Sponsor Contact"
                        outlined
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        v-model="sponsorAddr"
                        type="text"
                        label="Sponsor Address"
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        v-model="sponsorEmail"
                        type="text"
                        label="Sponsor Email (Optional)"
                        outlined
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-card class="text-center">
                    <v-card-title class="title">Preview</v-card-title>
                    <v-card-text>
                      <v-row justify="center">
                        <v-col
                         cols="12"
                         md="3"
                         sm="12"
                        >
                          <p class="caption"><span class="font-weight-bold">STUDENT ID: </span>{{ this.$store.state.student.id }}</p>
                          <p class="caption"><span class="font-weight-bold">MATRICULATION NO: </span>{{ this.$store.state.student.matNo }}</p>
                          <p class="caption"><span class="font-weight-bold">EMAIL: </span>{{ this.$store.state.student.email }}</p>
                          <p class="caption"><span class="font-weight-bold">PROGRAM: </span>{{ this.$store.state.student.program }}</p>
                          <p class="caption"><span class="font-weight-bold">FACULTY: </span>{{ this.$store.state.student.faculty }}</p>
                          <p class="caption"><span class="font-weight-bold">DEPT: </span>{{ this.$store.state.student.dept }}</p>
                          <p class="caption"><span class="font-weight-bold">COURSE: </span>{{ this.$store.state.student.course }}</p>
                          <p class="caption"><span class="font-weight-bold">CURRENT LEVEL: </span>{{ this.$store.state.student.currentLevel }}</p>
                          <p class="caption"><span class="font-weight-bold">LENGTH OF PROGRAM: </span>{{ this.$store.state.student.programLength }}</p>
                        </v-col>

                        <v-divider
                         vertical
                        ></v-divider>
                        <v-col
                         cols="12"
                         md="3"
                         sm="12"
                        >
                          <p class="caption"><span class="font-weight-bold">NAME: </span>{{ this.$store.state.student.name }}</p>
                          <p class="caption"><span class="font-weight-bold">DOB: </span>{{ this.$store.state.student.dob }}</p>
                          <p class="caption"><span class="font-weight-bold">NATIONALITY: </span>{{ this.$store.state.student.nationality }}</p>
                          <p class="caption"><span class="font-weight-bold">STATE OF ORIGIN: </span>{{ this.$store.state.student.state }}</p>
                          <p class="caption"><span class="font-weight-bold">LGA: </span>{{ this.$store.state.student.lga }}</p>
                          <p class="caption"><span class="font-weight-bold">GENDER: </span>{{ this.$store.state.student.gender }}</p>
                          <p class="caption"><span class="font-weight-bold">RELIGION: </span>{{ this.$store.state.student.religion }}</p>
                          <p class="caption"><span class="font-weight-bold">CONTACT: </span>{{ this.$store.state.student.contact }}</p>
                          <p class="caption"><span class="font-weight-bold">ADDR: </span>{{ this.$store.state.student.addr }}</p>
                          <p class="caption">{{ this.$store.state.student.passport }}</p>
                          <!-- <v-img
                           :src="this.$store.state.student.passport"
                           width="100"
                           height="100"
                           contain
                          ></v-img> -->
                        </v-col>

                        <v-divider
                         vertical
                        ></v-divider>
                        <v-col
                         cols="12"
                         md="2"
                         sm="12"
                        >
                          <p class="caption"><span class="font-weight-bold">NEXT OF KIN NAME: </span>{{ this.$store.state.student.nextName }}</p>
                          <p class="caption"><span class="font-weight-bold">NEXT OF KIN CONTACT: </span>{{ this.$store.state.student.nextContact }}</p>
                          <p class="caption"><span class="font-weight-bold">NEXT OF KIN ADDR: </span>{{ this.$store.state.student.nextAddr }}</p>
                          <p class="caption"><span class="font-weight-bold">NEXT OF KIN EMAIL: </span>{{ this.$store.state.student.nextEmail }}</p>
                        </v-col>

                        <v-divider
                         vertical
                        ></v-divider>

                        <v-col
                         cols="12"
                         md="2"
                         sm="12"
                        >
                          <p class="caption"><span class="font-weight-bold">SPONSOR NAME: </span>{{ this.$store.state.student.sponsorName }}</p>
                          <p class="caption"><span class="font-weight-bold">SPONSOR CONTACT: </span>{{ this.$store.state.student.sponsorContact }}</p>
                          <p class="caption"><span class="font-weight-bold">SPONSOR ADDR: </span>{{ this.$store.state.student.sponsorAddr }}</p>
                          <p class="caption"><span class="font-weight-bold">SPONSOR EMAIL: </span>{{ this.$store.state.student.sponsorEmail }}</p>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-container><br>
                <v-divider class="blue-grey lighten-4"></v-divider><br>
                <v-row justify="center">
                  <v-card-actions>
                    <v-btn
                    class="ma-2"
                    :loading="loading1"
                    :disabled="loading1"
                    color="primary"
                    @click.prevent="storeData"
                  >
                    Save
                    <v-icon right>{{ save }}</v-icon>
                    <template v-slot:loader>
                      <span class="custom-loader">
                        <v-icon light>{{ cached }}</v-icon>
                      </span>
                    </template>
                  </v-btn>
                  </v-card-actions>
                </v-row>
                <br />
              </v-form>
            </v-card>
          </v-tab-item>

          <v-tab-item id="results">
            <v-card id="bio-data" flat color="grey lighten-4">
              <v-form @submit.prevent="handleResultOk">
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model.lazy="rId"
                        type="text"
                        label="Student ID"
                        placeholder="19-01-0001"
                        outlined
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" md="4">
                      <v-select
                        v-model.lazy="rLevel"
                        :items="levels"
                        label="Select your Level"
                        outlined
                      ></v-select>
                    </v-col>

                    <v-col cols="12" sm="12" md="4">
                      <v-text-field
                        v-model.lazy="rUnit"
                        type="number"
                        label="Credit Unit"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="4">
                      <v-text-field v-model.lazy="rScore" label="Score" outlined></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" md="4">
                      <v-text-field v-model.lazy="rCName" label="Course Title" outlined></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="4">
                      <v-text-field v-model.lazy="rCCode" label="Course Code" outlined></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="4">
                      <v-select v-model.lazy="rGrade" :items="grades" label="Grade" outlined></v-select>
                    </v-col>
                  </v-row>
                  <v-card class="text-center">
                    <v-card-title class="title">Preview</v-card-title>
                    <v-card-text>
                      <p class="caption"><span class="font-weight-bold">STUDENT ID: </span>{{ this.$store.state.studentResult.id }}</p>
                      <p class="caption"><span class="font-weight-bold">LEVEL:  </span>{{ this.$store.state.studentResult.level }}</p>
                      <p class="caption"><span class="font-weight-bold">CREDIT UNIT:  </span>{{ this.$store.state.studentResult.creditUnit }}</p>
                      <p class="caption"><span class="font-weight-bold">SCORE:  </span>{{ this.$store.state.studentResult.score }}</p>
                      <p class="caption"><span class="font-weight-bold">COURSE TITLE: </span>{{ this.$store.state.studentResult.cName }}</p>
                      <p class="caption"><span class="font-weight-bold">COURSE CODE:  </span>{{ this.$store.state.studentResult.cCode }}</p>
                      <p class="caption"><span class="font-weight-bold">GRADE:  </span>{{ this.$store.state.studentResult.grade }}</p>
                    </v-card-text>
                  </v-card>
                </v-container><br>
                <v-divider class="blue-grey lighten-4"></v-divider><br>
                <v-row justify="center">
                  <v-card-actions>
                    <v-btn
                      class="ma-2"
                      :loading="loading2"
                      :disabled="loading2"
                      color="primary"
                      @click.prevent="handleResultOk"
                    >
                      Save
                      <v-icon right>{{ save }}</v-icon>
                      <template v-slot:loader>
                        <span class="custom-loader">
                          <v-icon light>{{ cached }}</v-icon>
                        </span>
                      </template>
                    </v-btn>
                  </v-card-actions>
                </v-row>
                <br />
                <br />
              </v-form>
            </v-card>
          </v-tab-item>

          <!-- <v-tab-item id="bio-data2">
            <v-card id="bio-data" flat color="grey lighten-4">
              <br />
              <span class="fon blue-grey--text">Personal Information</span>
              <v-form @submit="captureImg">
                <v-container>
                
                </v-container><br>
                <v-divider class="blue-grey lighten-4"></v-divider><br>
                <v-row justify="center">
                  <v-card-actions>
                    <v-btn @click.prevent="captureImg" type="submit" dark color="blue darken-2">
                      Save
                      <v-icon right>{{ save }}</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-row>
                <br />
                <br />
              </v-form>
            </v-card>
          </v-tab-item> -->

          <v-tab-item id="transaction-data">
            <v-card id="bio-data" flat color="grey lighten-4">
              <v-form @submit.prevent="handleTrancOk">
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="4">
                      <v-text-field
                        v-model.lazy="tId"
                        label="Student ID"
                        type="text"
                        placeholder="19-01-0001"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="4">
                      <v-select
                        v-model.lazy="tLevel"
                        :items="levels"
                        type="number"
                        label="Select your Level"
                        outlined
                      ></v-select>
                    </v-col>

                    <v-col cols="12" sm="12" md="4">
                      <v-text-field
                        v-model.number="tAmount"
                        type="number"
                        label="Amount"
                        placeholder="00.00"
                        outlined
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" sm="12" md="4">
                      <v-text-field
                        v-model.lazy="tName"
                        label="Name of transaction"
                        type="text"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="4">
                      <v-text-field v-model.lazy="tMatNo" label="Matriculation No." type="text" outlined></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="4">
                      <v-text-field
                        type="text"
                        v-model.lazy="tSemester"
                        label="Semester"
                        outlined
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-card class="text-center">
                    <v-card-title class="title">Preview</v-card-title>
                    <v-card-text>
                      <p class="caption"><span class="font-weight-bold">STUDENT ID: </span>{{ this.$store.state.studentTranc.id }}</p>
                      <p class="caption"><span class="font-weight-bold">LEVEL: </span>{{ this.$store.state.studentTranc.level }}</p>
                      <p class="caption"><span class="font-weight-bold">AMOUNT: </span>{{ this.$store.state.studentTranc.amount }}</p>
                      <p class="caption"><span class="font-weight-bold">NAME OF TRANSACTION: </span>{{ this.$store.state.studentTranc.name }}</p>
                      <p class="caption"><span class="font-weight-bold">MATRICULATION NUMBER: </span>{{ this.$store.state.studentTranc.matNo }}</p>
                      <p class="caption"><span class="font-weight-bold">SEMESTER: </span>{{ this.$store.state.studentTranc.semester }}</p>
                    </v-card-text>
                  </v-card>
                </v-container><br>
                <v-divider class="blue-grey lighten-4"></v-divider><br>
                <v-row justify="center">
                  <v-card-actions>
                    <v-btn
                    class="ma-2"
                    :loading="loading3"
                    :disabled="loading3"
                    color="primary"
                    @click.prevent="handleTrancOk"
                  >
                    Save
                    <v-icon right>{{ save }}</v-icon>
                    <template v-slot:loader>
                      <span class="custom-loader">
                        <v-icon light>{{ cached }}</v-icon>
                      </span>
                    </template>
                  </v-btn>
                  </v-card-actions>
                </v-row>
                <br />
                <br />
              </v-form>
            </v-card>
          </v-tab-item>

          <v-tab-item id="reg-course">
            <v-card id="bio-data" flat color="grey lighten-4">
              <v-form @submit.prevent="handleCourseOk">
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model.number="cId"
                        type="number"
                        label="Student ID"
                        placeholder="19-01-0001"
                        outlined
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" md="4">
                      <v-select
                        v-model="cLevel"
                        :items="levels"
                        label="Select Level"
                        outlined
                      ></v-select>
                    </v-col>

                    <v-col cols="12" sm="12" md="4">
                      <v-text-field
                        v-model.number="cUnit"
                        type="number"
                        label="Credit Unit"
                        outlined
                      ></v-text-field>
                    </v-col>

                      <v-col cols="12" sm="12" md="4">
                      <v-text-field
                        v-model="cCode"
                        type="text"
                        label="Course Code"
                        outlined
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" sm="12" md="4">
                      <v-text-field
                        v-model="cTitle"
                        type="text"
                        label="Course Title"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="4">
                      <v-text-field
                        v-model="cSession"
                        type="text"
                        label="Session" 
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="4">
                      <v-text-field
                        v-model="cSemester"
                        type="text"
                        label="Semester"
                        outlined
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-card class="text-center">
                    <v-card-title class="title">Preview</v-card-title>
                    <v-card-text>
                      <p class="caption"><span class="font-weight-bold">STUDENT ID: </span>{{ this.$store.state.registeredCourse.id }}</p>
                      <p class="caption"><span class="font-weight-bold">LEVEL: </span>{{ this.$store.state.registeredCourse.level }}</p>
                      <p class="caption"><span class="font-weight-bold">CREDIT UNIT: </span>{{ this.$store.state.registeredCourse.creditUnit }}</p>
                      <p class="caption"><span class="font-weight-bold">COURSE CODE: </span>{{ this.$store.state.registeredCourse.code }}</p>
                      <p class="caption"><span class="font-weight-bold">COURSE TITLE: </span>{{ this.$store.state.registeredCourse.title }}</p>
                      <p class="caption"><span class="font-weight-bold">SESSION: </span>{{ this.$store.state.registeredCourse.session }}</p>
                      <p class="caption"><span class="font-weight-bold">SEMESTER: </span>{{ this.$store.state.registeredCourse.semester }}</p>
                    </v-card-text>
                  </v-card>
                </v-container><br>
                <v-divider class="blue-grey lighten-4"></v-divider><br>
                <v-row justify="center">
                  <v-card-actions>
                    <v-btn
                    class="ma-2"
                    :loading="loading4"
                    :disabled="loading4"
                    color="primary"
                    @click.prevent="handleCourseOk"
                  >
                    Save
                    <v-icon right>{{ save }}</v-icon>
                    <template v-slot:loader>
                      <span class="custom-loader">
                        <v-icon light>{{ cached }}</v-icon>
                      </span>
                    </template>
                  </v-btn>
                  </v-card-actions>
                </v-row>
                <br />
                <br />
              </v-form>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </keep-alive>
    <div class="snackbars">
      <v-snackbar
       v-model="adSnackbar"
       :timeout="timeout"
       :multi-line="multiLine"
       :top="y === 'top'"
      >
        Student  details successfully stored on blockchain.

        <v-btn
         color="red"
         text
         @click="adSnackbar = false"
        >
          next
        </v-btn>
      </v-snackbar>

      <v-snackbar
       v-model="rcSnackbar"
       :timeout="timeout"
       :multi-line="multiLine"
       :top="y === 'top'"
      >
        Student registered course successfully stored on blockchain.

        <v-btn
         color="red"
         text
         @click="rcSnackbar = false"
        >
          next
        </v-btn>
      </v-snackbar>

      <v-snackbar
       v-model="rtSnackbar"
       :timeout="timeout"
       :multi-line="multiLine"
       :top="y === 'top'"
      >
        Student result successfully stored on blockchain.

        <v-btn
         color="red"
         text
         @click="rtSnackbar = false"
        >
          next
        </v-btn>
      </v-snackbar>

      <v-snackbar
       v-model="tnSnackbar"
       :timeout="timeout"
       :multi-line="multiLine"
       :top="y === 'top'"
      >
        Student transaction history successfully stored on blockchain.

        <v-btn
         color="red"
         text
         @click="tnSnackbar = false"
        >
          next
        </v-btn>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
import { mdiCamera } from "@mdi/js";
import { mdiCalendar } from "@mdi/js";
import { mdiPlusBox } from "@mdi/js";
import { mdiContentSave } from "@mdi/js";
import { mdiCached } from "@mdi/js";
// import { mapState } from "vuex"
// eslint-disable-next-line no-unused-vars
import ipfs from '@/contracts/ipfs.js';

export default {
  data() {
    return {
      loader: null,
      loading1: false,
      loading2: false,
      loading3: false,
      loading4: false,
      tab: null,
      /**
       * Buffered data
      */
      bufferData: null,
      bufferResult: null,
      bufferCourse: null,
      bufferTranc: null,
      passportBuffer: null,
      /**
       * Hashes
      */
      studentHash: null,
      resultHash: null,
      courseHash: null,
      trancHash: null,
      passportHash: "", 
      multiLine: true,
      timeout: 5000,
      adSnackbar: false,
      rcSnackbar: false,
      rtSnackbar: false,
      tnSnackbar: false,
      y: 'top',
      camera: mdiCamera,
      plus: mdiPlusBox,
      save: mdiContentSave,
      cached: mdiCached,
      results: [],
      event: mdiCalendar,
      date: new Date().toISOString().substr(0, 10),
      maritalStatus: ["Single", "Married"],
      items: [
        {
          title: "Student Details",
          id: "#bio-data"
        },
        {
          title: "Registered Courses",
          id: "#reg-course"
        },
        {
          title: "Results",
          id: "#results"
        },
        {
          title: "Transaction History",
          id: "#transaction-data"
        }
      ],
      schoolPrograms: ["Undergraduate", "Part Time", "Remedials", "IJMB"],
      levels: [100, 200, 300, 400, 500, 600, 700, 800],
      years: [ '4 years', '5 years', '6 years', '7 years', '8 years'],
      sex: ["Male", "Female", "Others"],
      grades: ["A", "B", "C", "D", "E", "F"],
      religions: ["Christianity", "Islam", "Others"],
      passportRules: [
        value =>
          !value ||
          value.size < 1000 ||
          "image size should be less than 100 KB!"
      ],
    };
  },

  computed: {
    id: {
      get () {
        return this.$store.state.student.id
      },
      set (v) {
        this.$store.commit('FORM_ID', v)
      }
    },
    matNo: {
      get () {
        return this.$store.state.student.matNo
      },
      set (v) {
        this.$store.commit('FORM_MATNO', v)
      }
    },
    email: {
      get () {
        return this.$store.state.student.email
      },
      set (v) {
        this.$store.commit('FORM_EMAIL', v)
      }
    },
    program: {
      get () {
        return this.$store.state.student.program
      },
      set (v) {
        this.$store.commit('FORM_PROGRAM', v)
      }
    },
    faculty: {
      get () {
        return this.$store.state.student.faculty
      },
      set (v) {
        this.$store.commit('FORM_FACULTY', v)
      }
    },
    dept: {
      get () {
        return this.$store.state.student.dept
      },
      set (v) {
        this.$store.commit('FORM_DEPT', v)
      }
    },
    course: {
      get () {
        return this.$store.state.student.course
      },
      set (v) {
        this.$store.commit('FORM_COURSE', v)
      }
    },
    currentLevel: {
      get () {
        return this.$store.state.student.currentLevel
      },
      set (v) {
        this.$store.commit('FORM_CURRENTLEVEL', v)
      }
    },
    programLength: {
      get () {
        return this.$store.state.student.programLength
      },
      set (v) {
        this.$store.commit('FORM_PROGRAMLENGTH', v)
      }
    },

    /**
     * Personal Details
    */
    name: {
      get () {
        return this.$store.state.student.name
      },
      set (v) {
        this.$store.commit('FORM_NAME', v)
      }
    },
    dob: {
      get () {
        return this.$store.state.student.dob
      },
      set (v) {
        this.$store.commit('FORM_DOB', v)
      }
    },
    national: {
      get () {
        return this.$store.state.student.nationality
      },
      set (v) {
        this.$store.commit('FORM_NATIONAL', v)
      }
    },
    state: {
      get () {
        return this.$store.state.student.state
      },
      set (v) {
        this.$store.commit('FORM_STATE', v)
      }
    },
    lga: {
      get () {
        return this.$store.state.student.lga
      },
      set (v) {
        this.$store.commit('FORM_LGA', v)
      }
    },
    gender: {
      get () {
        return this.$store.state.student.gender
      },
      set (v) {
        this.$store.commit('FORM_GENDER', v)
      }
    },
    religion: {
      get () {
        return this.$store.state.student.religion
      },
      set (v) {
        this.$store.commit('FORM_RELIGION', v)
      }
    },
    contact: {
      get () {
        return this.$store.state.student.contact
      },
      set (v) {
        this.$store.commit('FORM_CONTACT', v)
      }
    },
    addr: {
      get () {
        return this.$store.state.student.addr
      },
      set (v) {
        this.$store.commit('FORM_ADDR', v)
      }
    },
    passport: {
      get () {
        return this.$store.state.studentPassport.passport
      },
      set (v) {
        this.$store.commit('FORM_PASSPORT', v)
      }
    },

    /**
     * Next of Kin Details
    */
    nextName: {
      get () {
        return this.$store.state.student.nextName
      },
      set (v) {
        this.$store.commit('FORM_NEXTNAME', v)
      }
    },
    nextContact: {
      get () {
        return this.$store.state.student.nextContact
      },
      set (v) {
        this.$store.commit('FORM_NEXTCONTACT', v)
      }
    },
    nextAddr: {
      get () {
        return this.$store.state.student.nextAddr
      },
      set (v) {
        this.$store.commit('FORM_NEXTADDR', v)
      }
    },
    nextEmail: {
      get () {
        return this.$store.state.student.nextEmail
      },
      set (v) {
        this.$store.commit('FORM_NEXTEMAIL', v)
      }
    },

    /**
     * Sponsor Details
    */
    sponsorName: {
      get () {
        return this.$store.state.student.sponsorName
      },
      set (v) {
        this.$store.commit('FORM_SPONSORNAME', v)
      }
    },
    sponsorContact: {
      get () {
        return this.$store.state.student.sponsorContact
      },
      set (v) {
        this.$store.commit('FORM_SPONSORCONTACT', v)
      }
    },
    sponsorAddr: {
      get () {
        return this.$store.state.student.sponsorAddr
      },
      set (v) {
        this.$store.commit('FORM_SPONSORADDR', v)
      }
    },
    sponsorEmail: {
      get () {
        return this.$store.state.student.sponsorEmail
      },
      set (v) {
        this.$store.commit('FORM_SPONSOREMAIL', v)
      }
    },

    /**
     * Result
    */
    rId: {
      get () {
        return this.$store.state.studentResult.id
      },
      set (v) {
        this.$store.commit('FORM_RID', v)
      }
    },
    rLevel: {
      get () {
        return this.$store.state.studentResult.level
      },
      set (v) {
        this.$store.commit('FORM_RLEVEL', v)
      }
    },
    rUnit: {
      get () {
        return this.$store.state.studentResult.creditUnit
      },
      set (v) {
        this.$store.commit('FORM_RUNIT', v)
      }
    },
    rScore: {
      get () {
        return this.$store.state.studentResult.score
      },
      set (v) {
        this.$store.commit('FORM_RSCORE', v)
      }
    },
    rCName: {
      get () {
        return this.$store.state.studentResult.cName
      },
      set (v) {
        this.$store.commit('FORM_RCNAME', v)
      }
    },
    rCCode: {
      get () {
        return this.$store.state.studentResult.cCode
      },
      set (v) {
        this.$store.commit('FORM_RCCODE', v)
      }
    },
    rGrade: {
      get () {
        return this.$store.state.studentResult.grade
      },
      set (v) {
        this.$store.commit('FORM_RGRADE', v)
      }
    },
    /**
     * Transaction Details
    */
    tId: {
      get () {
        return this.$store.state.studentTranc.id
      },
      set (v) {
        this.$store.commit('FORM_TID', v)
      }
    },
    tLevel: {
      get () {
        return this.$store.state.studentTranc.level
      },
      set (v) {
        this.$store.commit('FORM_TLEVEL', v)
      }
    },
    tAmount: {
      get () {
        return this.$store.state.studentTranc.amount
      },
      set (v) {
        this.$store.commit('FORM_TAMOUNT', v)
      }
    },
    tName: {
      get () {
        return this.$store.state.studentTranc.name
      },
      set (v) {
        this.$store.commit('FORM_TNAME', v)
      }
    },
    tMatNo: {
      get () {
        return this.$store.state.studentTranc.matNo
      },
      set (v) {
        this.$store.commit('FORM_TMATNO', v)
      }
    },
    tSemester: {
      get () {
        return this.$store.state.studentTranc.semester
      },
      set (v) {
        this.$store.commit('FORM_TSEMESTER', v)
      }
    },

    /**
     * Registered Courses
    */

   cId: {
      get () {
        return this.$store.state.registeredCourse.id
      },
      set (v) {
        this.$store.commit('FORM_CID', v)
      }
    },
    cLevel: {
      get () {
        return this.$store.state.registeredCourse.level
      },
      set (v) {
        this.$store.commit('FORM_CLEVEL', v)
      }
    },
    cUnit: {
      get () {
        return this.$store.state.registeredCourse.creditUnit
      },
      set (v) {
        this.$store.commit('FORM_CUNIT', v)
      }
    },
    cCode: {
      get () {
        return this.$store.state.registeredCourse.code
      },
      set (v) {
        this.$store.commit('FORM_CCODE', v)
      }
    },
    cTitle: {
      get () {
        return this.$store.state.registeredCourse.title
      },
      set (v) {
        this.$store.commit('FORM_CTITLE', v)
      }
    },
    cSession: {
      get () {
        return this.$store.state.registeredCourse.session
      },
      set (v) {
        this.$store.commit('FORM_CSESSION', v)
      }
    },
    cSemester: {
      get () {
        return this.$store.state.registeredCourse.semester
      },
      set (v) {
        this.$store.commit('FORM_CSEMESTER', v)
      }
    },

    /**
     * Handlers
    */

  },

  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    },
  },


  methods: {
    async storeData() {
      /**
       * loader = 'loading1'
       * data.id
      */

      /**
       * Covert file to buffer
      */
      this.loader = 'loading1'
      if (this.$store.state.studentPassport.passport) {
        console.log("passport captured...");
        // Process file for ipfs
        const file = this.$store.state.studentPassport.passport;
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = () => {
          this.passportBuffer = Buffer(reader.result);
          console.log(this.passportBuffer);
        }

        // Storing file on ipfs
        ipfs.add(this.passportBuffer, (err, hash) => {
          if (hash) {
            this.passportHash = hash;
            console.log(`https://ipfs.infura.io/ipfs/${this.passportHash}`);
          } else {
            throw err;
          }
        });
      } else {
        console.log("File not captured...")
      }

      if (await this.passportHash) {
        console.log("Student data function fired!");  
        // Overwrite passport hash
        this.$store.state.student.passport = await `https://ipfs.infura.io/ipfs/${this.passportHash}`;
        const data = this.$store.state.student;
        console.log(data);

        // Convert object to buffer
        const jsonData = JSON.stringify(data);
        const buffer = Buffer.from(jsonData);
        this.bufferData = buffer;
        console.log(this.bufferData);

        // Store data on ipfs
        ipfs.add(this.bufferData, (err, hash) => {
          if (hash) {
            this.studentHash = hash;
            console.log(`https://ipfs.infura.io/ipfs/${this.studentHash}`);
          } else {
            throw err;
          }
        });
      } else {
        console.log("Data not captured...");
      }
      

      // Store hash on blockchain
    },

    async storeCourse() {
      // loader = 'loading4'
      this.loader = 'loading4';
      console.log("Student course function fired!");  
      const data = this.$store.state.registeredCourse;
      console.log(data);

      // Convert object to buffer
      const jsonData = JSON.stringify(data);
      const buffer = Buffer.from(jsonData);
      this.bufferCourse = buffer;
      console.log(this.bufferCourse);

      // Store data on ipfs
      ipfs.add(this.bufferCourse, (err, hash) => {
        if (hash) {
          this.courseHash = hash;
          console.log(`https://ipfs.infura.io/ipfs/${this.courseHash}`);
        } else {
          throw err;
        }
      });

      // Store hash on blockchain
    },

    async storeResult() {
      // loader = 'loading2'
      this.loader = 'loading2';
      console.log("Student result function fired!");
      const data = this.$store.state.studentResult;
      console.log(data);

      // Convert object to buffer
      const jsonData = JSON.stringify(data);
      const buffer = Buffer.from(jsonData);
      this.bufferResult = buffer;
      console.log(this.bufferResult);

      // Store data on ipfs
      ipfs.add(this.bufferResult, (err, hash) => {
        if (hash) {
          this.resultHash = hash;
          console.log(`https://ipfs.infura.io/ipfs/${this.resultHash}`);
        } else {
          throw err;
        }
      });

      // Store hash on blockchain
    },

    async storeTransaction() {
      // loader = 'loading3'
      this.loader = 'loading3'
      console.log("Student transaction function fired");
      const data = this.$store.state.studentTranc;
      console.log(data);

      // Convert object to buffer
      const jsonData = JSON.stringify(data);
      const buffer = Buffer.from(jsonData);
      this.bufferTranc = buffer;
      console.log(this.bufferTranc);

      // Store data on ipfs
      ipfs.add(this.bufferTranc, (err, hash) => {
        if (hash) {
          this.trancHash = hash;
          console.log(`https://ipfs.infura.io/ipfs/${this.trancHash}`);
        } else {
          throw err;
        }
      });

      // Store hash on blockchain
    },

    /**
     * Validate all submissions
     * Authenthicated forms
    */

    handleDataOk() {
      if (!this.$store.state.studentPassport.passport && !this.$store.state.student) {
        alert("Please fill the information.");
      } else {
        this.storeData();
      }
    },

    handleCourseOk() {
      if (!this.$store.state.registeredCourse) {
        alert("Please fill the information.");
      } else {
        this.storeCourse();
      }
    },

    handleResultOk() {
      if (!this.$store.state.studentResult) {
        alert("Please fill the information.");
      } else {
        this.storeResult();
      }
    },

    handleTrancOk() {
      if (!this.$store.state.studentTranc) {
        alert("Please fill the information.");
      } else {
        this.storeTransaction();
      }
    }
  },

  async created() {
    //
  },
};
</script>

<style scoped>
  .caption {
    font-size: 1.3rem !important;
  }
  .fon {
    font-size: 1.2rem !important;
  }
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

</style>
