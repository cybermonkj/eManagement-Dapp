<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
// import Management from "./build/contracts/Management.json";

export default {
  name: "App",

  components: {},

  data: () => ({
   //
  }),
  

  computed: {},

  methods: {
    // async loadBlockchainData() {
    //   // Get network id
    //   const web3 = window.web3;

      // const networkId = await web3.eth.net.getId();
      // // Get Smart Contract using --> address and --> abi
      // const networkData = Management.networks[networkId];
      // if (networkData) {
      //   // Fetch contract
      //   const abi = Management.abi;
      //   const address = networkData.address;
        // const contract = new web3.eth.Contract(abi, address);
        // this.contract = contract;
        // console.log(this.contract);

        // // Getters (Call)
        // console.log(this.userInput);
        // const studentAd = await contract.methods
        //   .getStudent(19010001)
        //   .call();
        // const studentPd = await contract.methods
        //   .getStudentDetail(19010001)
        //   .call();
        // const studentNd = await contract.methods
        //   .getStudentNextOfKin(19010001)
        //   .call();
        // const studentSr = await contract.methods
        //   .getStudentSponsor(19010001)
        //   .call();
        // const studentRt = await contract.methods
        //   .getResult(19010001)
        //   .call();
        // const studentTn = await contract.methods
        //   .getTransaction(19010001)
        //   .call();
        // const studentRc = await contract.methods
        //   .getRegCourses(19010001)
        //   .call();

        // console.log("Academic-Details: ", studentAd);
        // console.log("Personal-Details: ", studentPd);
        // console.log("Next of Kin", studentNd);
        // console.log("Sponsor-Details: ", studentSr);
        // console.log("Student-Results: ", studentRt);
        // console.log("Transaction-Details", studentTn);
        // console.log("Registered Courses", studentRc);

        // //Academic Details
        // this.ad_matno = studentAd[0];
        // this.ad_email = studentAd[1];
        // this.ad_program = studentAd[2];
        // this.ad_faculty = studentAd[3];
        // this.ad_dept = studentAd[4];
  }
};
</script>
