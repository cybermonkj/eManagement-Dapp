import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Fortmatic from 'fortmatic'
import Web3 from 'web3'
const fb = require('./firebaseConfig')

Vue.config.productionTip = false

let app

// eslint-disable-next-line no-unused-vars
fb.auth.onAuthStateChanged(user => {
  console.log(user);

  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,

      data() {
        return {
          account: null,
          contract: null,
          userData: null,
          fortToken: true,
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
      },

      methods: {
        async login() {
          this.fortToken = true
          const fm = new Fortmatic('pk_test_ADD5A47BC52A9746');
          const web3 = new Web3(fm.getProvider());

          //Login
          await fm.configure({ primaryLoginOption: 'email' });
          await fm.user.login();
          this.fortToken = false
          const accounts = await web3.eth.getAccounts();
          this.account = await accounts[0];
          console.log("Account: ", this.account);
        },

        // async fortmaticToken() {
        //   this.$store.dispatch("fortmaticState", await this.fortToken)
        // },

        async updatedAcct() {
          await this.$store.commit('ACCOUNT', await this.account);
        },
      },

      render: h => h(App)
    }).$mount('#app')
  }
})


