import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
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
  },
  actions: {
    async login({ dispatch }, form) {
      // Sign user in
      const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)
      
      //Fetch staff profile and set in state
      dispatch('fetchStaffProfile', user)
    },

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

    async signup({ dispatch }, form) {
      // sign user up
      fb.auth.createUserWithEmailAndPassword(form.email, form.password)
        .then(user => {
          console.log(user)

          // create user object
          const newUser = fb.auth.currentUser
          newUser.updateProfile({
            displayName: form.name
          }).then(() => {
            fb.staffCollection.doc(user.user.uid.toString()).set({
              number: parseInt(form.number, 10),
              title: form.title,
              timestamp: new Date
            }).then(() => {
              alert('Document successfully written!')
              this.verifyEmail()
            }).catch(error => {
              alert('Error writing document!')
              throw error
            })
          }).catch(error => {
            alert('An error happened, please try again!')
            throw error
          })

          dispatch('fetchStaffProfile', user)
        }).catch(error => {
          let errCode = error.code
          let errMsg = error.message
          if (errCode == 'auth/weak-password') {
            alert('Password is too weak!')
            console.error(errCode)
          } else {
            alert('An error happened, please check your internet connection...')
            console.error(errMsg)
          }
        })
    },
    async fetchStaffProfile({ commit }, user) {
      console.log(user)
      // fetch staff profile
    
      //const obj = await fb.auth.currentUser
      const staffProfile = await fb.staffCollection.doc(user.user.uid.toString()).get()

      commit('SETSTAFFPROFILELOG', staffProfile.data())

      router.push('/dashboard')
    },
  },  
  modules: {
  }
})
