import Vue from 'vue'
import Vuex from 'vuex'
// import router from '../router'
//import router from '../router/index'
const fb = require('../firebaseConfig')
// import Web3 from 'web3'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Firebase code
    staffProfile: {},
    /**
     * Blockchain Data
    */
    account: null,
    userData: null,
    contract: null,
  
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
    },
    SETSTAFFPROFILELOG(state, payload) {
      state.staffProfile = payload
    },
    CONTRACTDOURCE(state, payload) {
      state.contract = payload
    },
  },
  actions: {
    verifyEmail() {
      const user = fb.auth.currentUser;
      user.sendEmailVerification().then(() => {
        alert('Verification email sent successfully...')
      }).catch(error => {
        if (error) {
          alert('Error occured, please try again...')
          throw error
        }
      });
    },


    
  },  
  modules: {
  }
})
