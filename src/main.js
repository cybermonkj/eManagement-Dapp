import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Fortmatic from 'fortmatic'
import * as firebase from 'firebase'
import Web3 from 'web3'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,

  data() {
    return {
      account: null,
      contract: null,
      userData: null,
    }
  },

  computed: {

  },

  async mounted() {
    //
  },

  async created() {
   
    await this.login();

     // Commit acct addr to store
    await this.updatedAcct();
    await firebase.initializeApp({
      apiKey: "AIzaSyArE92zCu7S1ZLix8hs-IPVuEM5YKuXh3U",
      authDomain: "emanagementdapp.firebaseapp.com",
      databaseURL: "https://emanagementdapp.firebaseio.com",
      projectId: "emanagementdapp",
      storageBucket: "emanagementdapp.appspot.com"
    })
  },

  methods: {
    async login() {
      const fm = new Fortmatic('pk_test_ADD5A47BC52A9746');
      const web3 = new Web3(fm.getProvider());

      //Login
      await fm.configure({ primaryLoginOption: 'email' });
      await fm.user.login();
      const accounts = await web3.eth.getAccounts();
      this.account = await accounts[0];
      console.log("Account: ", this.account);
    },

    async updatedAcct() {
      await this.$store.commit('ACCOUNT', await this.account);
    },
  },

  render: h => h(App)
}).$mount('#app')
