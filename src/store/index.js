import Vue from 'vue'
import Vuex from 'vuex'
// import Web3 from 'web3'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /**
     * Blockchain Data
    */
    account: null,
    userData: null,
    contract: null,
    //Academic Details
    studentData: {
      class: "",
      //Personal Details
      pd_name: "",
      pd_dob: "",
      pd_national: "",
      pd_state: "",
      pd_lga: "",
      pd_gender: "",
      pd_religion: "",
      pd_addr: "",
      pd_passport: "",

      //Sponsor Details
      sd_name: "",
      sd_number: "",
      sd_addr: "",
      sd_email: "",
    },
    
    //Transaction details
    transactions: [
      {
        td_class: null,
        td_amount: null,
        td_name: "",
      },
    ],
    
    // Registered Courses
    rCourses: [
      {
        
      },
    ],
    
    // Result
    results: [
      {
        
      },
    ],

    /**
     * Form data
     */

  
    
    student: {
      // Academic Details
      id: null,
      matNo: "",
      email: "",
      program: "",
      faculty: "",
      dept: "",
      course: "",
      currentLevel: "",
      programLength: null,
      // Personal Details
      name: "",
      dob: "",
      nationality: "",
      state: "",
      lga: "",
      gender: "",
      religion: "",
      contact: "",
      addr: "",
      passport: null,
      // Next of Kin Details
      nextName: "",
      nextContact: "",
      nextAddr: "",
      nextEmail: "",
      // Sponsor Details
      sponsorName: "",
      sponsorContact: "",
      sponsorAddr: "",
      sponsorEmail: "",
    },
    
    /**
     * Student Results
    */
    studentResult: {
      id: null,
      level: null,
      creditUnit: null,
      score: null,
      cName: "",
      cCode: "",
      grade: ""
    },
      
    /**
     * Student Transactions
    */
    studentTranc: {
      id: null,
      level: null,
      amount: null,
      name: "",
      matNo: "",
      semester: ""
    },

    /**
     * Student Registered courses
    */
    registeredCourse: {
      id: null,
      level: null,
      creditUnit: null,
      code: "",
      title: "",
      session: "",
      semester: "",
    },

    user: {
      id: ""
    }
  },
  mutations: {
    // CALL DATA
    ACCOUNT(state, account) {
      state.account = account
    },
    SETUSER(state, payload) {
      state.user = payload;
    }

  },
  actions: {
    
  },

  modules: {
  }
})
