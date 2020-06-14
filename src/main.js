import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Fortmatic from 'fortmatic'
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
    // Commit acct to store
    await this.login();
  },

  methods: {
    async login() {
      const fm = new Fortmatic('pk_test_ADD5A47BC52A9746');
      const web3 = new Web3(fm.getProvider());

      // Login
      fm.configure({ primaryLoginOption: 'email' }).then(() => {
        fm.user.login().then(() => {
          const accounts = web3.eth.getAccounts().then(console.log);
          console.log('Accounts: ', accounts);
        });
      });

    }
    // async updatedAcct() {
    //   await this.$store.commit('ACCOUNT', await this.account);
    // },
  },

  render: h => h(App)
}).$mount('#app')
