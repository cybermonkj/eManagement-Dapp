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
      ad_matno: "",
      ad_email: "",
      ad_program: "",
      ad_faculty: "",
      ad_dept: "",
      ad_course: "",
      ad_currentLevel: "",
      ad_programLength: "",

      //Personal Details
      pd_name: "",
      pd_dob: "",
      pd_national: "",
      pd_state: "",
      pd_lga: "",
      pd_gender: "",
      pd_religion: "",
      pd_contact: "",
      pd_addr: "",
      pd_passport: "",

      //Next of Kin Details
      nd_name: "",
      nd_contact: "",
      nd_addr: "",
      nd_email: "",

      //Sponsor Details
      sd_name: "",
      sd_number: "",
      sd_addr: "",
      sd_email: "",
    },
    
    //Transaction details
    transactions: [
      {
        td_level: null,
        td_amount: null,
        td_semester: "",
        td_matno: "",
        td_name: "",
      },
    ],
    
    // Registered Courses
    rCourses: [
      {
        rc_level: null,
        rc_creditUnit: null,
        rc_code: "",
        rc_title: "",
        rc_session: "",
        rc_semester: "",
      },
    ],
    
    // Result
    results: [
      {
        rt_level: null,
        rt_creditUnit: null,
        rt_score: null,
        rt_title: "",
        rt_code: "",
        rt_grade: "",
      },
    ],

    /**
     * Form data
     */

    studentPassport: {
      passport: null,
    },
    
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
  },
  mutations: {
    // CALL DATA
    ACCOUNT(state, account) {
      state.account = account
    },
    USER_DATA(state, data) {
      state.userData = data
    },
    // CONTRACT(state, contract) {
    //   state.contract = contract
    // },
 
    // Academic
    MAT_NO(state, mat) {
      state.ad_matno = mat
    },
    EMAIL(state, email) {
      state.ad_email = email
    },
    PROGRAM(state, program) {
      state.ad_program = program
    },
    FACULTY(state, faculty) {
      state.ad_faculty = faculty
    },
    DEPT(state, dept) {
      state.ad_dept = dept
    },
    A_COURSES(state, course) {
      state.ad_course = course
    },
    //Personal
    NAME(state, name) {
      state.pd_name = name
    },
    AGE(state, age) {
      state.pd_age = age
    },
    NATIONAL(state, national) {
      state.pd_national = national
    },
    STATE(state, stateOf) {
      state.pd_state = stateOf
    },
    GENDER(state, sex) {
      state.pd_gender = sex
    },
    RELIGION(state, religion) {
      state.pd_religion = religion
    },
    PASSPORT(state, passport) {
      state.pd_passport = passport
    },
    UPDATEPASSPORT(state, passport) {
      state.p.passport = passport
    },
    PASSPORTHASH(state, value) {
      state.newPassportHash = value
    },
    //Next of Kin
    ND_NAME(state, name) {
      state.nd_name = name
    },
    ND_CONTACT(state, contact) {
      state.nd_contact = contact
    },
    //Sponsor
    SP_NAME(state, name) {
      state.sd_name = name
    },
    SP_NUMBER(state, number) {
      state.sd_number = number
    },
    SP_ADDR(state, addr) {
      state.sd_addr = addr
    },
    SP_EMAIL(state, email) {
      state.sd_email = email
    },
    //Transaction
    TN_LEVEL(state, level) {
      state.td_level = level
    },
    TN_AMOUNT(state, amount) {
      state.td_amount = amount
    },
    TN_SEMESTER(state, semester) {
      state.td_semester = semester
    },
    TN_MATNO(state, matno) {
      state.td_matno = matno
    },
    TN_NAME(state, name) {
      state.td_name = name
    },
    //Result
    RT_LEVEL(state, level) {
      state.rt_level = level
    },
    RT_CREDIT(state, unit) {
      state.rt_creditUnit = unit
    },
    RT_SCORE(state, score) {
      state.rt_score = score
    },
    RT_TITLE(state, title) {
      state.rt_title = title
    },
    RT_CODE(state, code) {
      state.rt_code = code
    },
    RT_GRADE(state, grade) {
      state.rt_grade = grade
    },
    // Courses
    RC_LEVEL(state, level) {
      state.rc_level = level
    },
    RC_UNIT(state, unit) {
      state.rc_creditUnit = unit
    },
    RC_CODE(state, code) {
      state.rc_code = code
    },
    RC_TITLE(state, title) {
      state.rc_title = title
    },
    RC_SESSION(state, session) {
      state.rc_session = session
    },
    RC_SEMESTER(state, semester) {
      state.rc_semester = semester
    },

    /**
     * FORM DATA (SEND)
     * ACADEMIC 
     * PERSONAL
     * RESULT
     * TRANSACTION
     * REGISTERED COURSE
    */
    FORM_ID(state, v) {
      state.student.id = v
    },
    FORM_MATNO(state, v) {
      state.student.matNo = v
    },
    FORM_EMAIL(state, v) {
      state.student.email = v
    },
    FORM_PROGRAM(state, v) {
      state.student.program = v
    },
    FORM_FACULTY(state, v) {
      state.student.faculty = v
    },
    FORM_DEPT(state, v) {
      state.student.dept = v
    },
    FORM_COURSE(state, v) {
      state.student.course = v
    },
    FORM_CURRENTLEVEL(state, v) {
      state.student.currentLevel = v
    },
    FORM_PROGRAMLENGTH(state, v) {
      state.student.programLength = v
    },

    //Result
    FORM_RID(state, v) {
      state.studentResult.id = v
    },
    FORM_RLEVEL(state, v) {
      state.studentResult.level = v
    },
    FORM_RUNIT(state, v) {
      state.studentResult.creditUnit = v
    },
    FORM_RSCORE(state, v) {
      state.studentResult.score = v
    },
    FORM_RCNAME(state, v) {
      state.studentResult.cName = v
    },
    FORM_RCCODE(state, v) {
      state.studentResult.cCode = v
    },
    FORM_RGRADE(state, v) {
      state.studentResult.grade = v
    },

    // Personal
    FORM_NAME(state, v) {
      state.student.name = v
    },
    FORM_DOB(state, v) {
      state.student.dob = v
    },
    FORM_NATIONAL(state, v) {
      state.student.nationality = v
    },
    FORM_STATE(state, v) {
      state.student.state = v
    },
    FORM_LGA(state, v) {
      state.student.lga = v
    },
    FORM_GENDER(state, v) {
      state.student.gender = v
    },
    FORM_RELIGION(state, v) {
      state.student.religion = v
    },
    FORM_CONTACT(state, v) {
      state.student.contact = v
    },
    FORM_ADDR(state, v) {
      state.student.addr = v
    },
    FORM_PASSPORT(state, v) {
      state.studentPassport.passport = v
    },

    //Next of kin
    FORM_NEXTNAME(state, v) {
      state.student.nextName = v
    },
    FORM_NEXTCONTACT(state, v) {
      state.student.nextContact = v
    },
    FORM_NEXTADDR(state, v) {
      state.student.nextAddr = v
    },
    FORM_NEXTEMAIL(state, v) {
      state.student.nextEmail = v
    },
    //Sponsor
    FORM_SPONSORNAME(state, v) {
      state.student.sponsorName = v
    },
    FORM_SPONSORCONTACT(state, v) {
      state.student.sponsorContact = v
    },
    FORM_SPONSORADDR(state, v) {
      state.student.sponsorAddr = v
    },
    FORM_SPONSOREMAIL(state, v) {
      state.student.sponsorEmail = v
    },
  
    //Transaction
    FORM_TID(state, v) {
      state.studentTranc.id = v
    },
    FORM_TLEVEL(state, v) {
      state.studentTranc.level = v
    },
    FORM_TAMOUNT(state, v) {
      state.studentTranc.amount = v
    },
    FORM_TNAME(state, v) {
      state.studentTranc.name = v
    },
    FORM_TMATNO(state, v) {
      state.studentTranc.matNo = v
    },
    FORM_TSEMESTER(state, v) {
      state.studentTranc.semester = v
    },

    //Course
    FORM_CID(state, v) {
      state.registeredCourse.id = v
    },
    FORM_CLEVEL(state, v) {
      state.registeredCourse.level = v
    },
    FORM_CUNIT(state, v) {
      state.registeredCourse.creditUnit = v
    },
    FORM_CCODE(state, v) {
      state.registeredCourse.code = v
    },
    FORM_CTITLE(state, v) {
      state.registeredCourse.title = v
    },
    FORM_CSESSION(state, v) {
      state.registeredCourse.session = v
    },
    FORM_CSEMESTER(state, v) {
      state.registeredCourse.semester = v
    },

  },
  actions: {
    //Account
    // async updatedAccount({ commit }, account) {
    //   await commit('ACCOUNT', account)
    // },

    async contract({ commit }, contract) {
      await commit('CONTRACT', contract)
    },
    //Academic
    async matno({ commit }, mat) {
      await commit('MAT_NO', mat)
    },
    async email({ commit }, email) {
      await commit('EMAIL', email)
    },
    async program({ commit }, program) {
      await commit('PROGRAM', program)
    },
    async faculty({ commit }, faculty) {
      await commit('FACULTY', faculty)
    },
    async dept({ commit }, dept) {
      await commit('DEPT', dept)
    },
    async course({ commit }, course) {
      await commit('A_COURSES', course)
    },
    //Personal
    async name({ commit }, name) {
      await commit('NAME', name)
    },
    async age({ commit }, age) {
      await commit('AGE', age)
    },
    async national({ commit }, national) {
      await commit('NATIONAL', national)
    },
    async stateOfOrigin({ commit }, stateOf) {
      await commit('STATE', stateOf)
    },
    async gender({ commit }, sex) {
      await commit('GENDER', sex)
    },
    async religion({ commit }, religion) {
      await commit('RELIGION', religion)
    },
    async passport({ commit }, passport) {
      await commit('PASSPORT', passport)
    },
    //Next of Kin
    async ndName({ commit }, name) {
      await commit('ND_NAME', name)
    },
    async ndContact({ commit }, contact) {
      await commit('ND_CONTACT', contact)
    },
    //Sponsor
    async spName({ commit }, name) {
      await commit('SP_NAME', name)
    },
    async spNumber({ commit }, number) {
      await commit('SP_NUMBER', number)
    },
    async spAddr({ commit }, addr) {
      await commit('SP_ADDR', addr)
    },
    async spEmail({ commit }, email) {
      await commit('SP_EMAIL', email)
    },
    //Transaction
    async tnLevel({ commit }, level) {
      await commit('TN_LEVEL', level)
    },
    async tnAmount({ commit }, amount) {
      await commit('TN_AMOUNT', amount)
    },
    async tnSemester({ commit }, semester) {
      await commit('TN_SEMESTER', semester)
    },
    async tnMatno({ commit }, matno) {
      await commit('TN_MATNO', matno)
    },
    async tnName({ commit }, name) {
      await commit('TN_NAME', name)
    },
    //Result
    async rtLevel({ commit }, level) {
      await commit('RT_LEVEL', level)
    },
    async rtCreditUnit({ commit }, unit) {
      await commit('RT_CREDIT', unit)
    },
    async rtScore({ commit }, score) {
      await commit('RT_SCORE', score)
    },
    async rtTitle({ commit }, title) {
      await commit('RT_TITLE', title)
    },
    async rtCode({ commit }, code) {
      await commit('RT_CODE', code)
    },
    async rtGrade({ commit }, grade) {
      await commit('RT_GRADE', grade)
    },
    //Courses
    async rcLevel({ commit }, level) {
      await commit('RC_LEVEL', level)
    },
    async rcCreditUnit({ commit }, unit) {
      await commit('RC_UNIT', unit)
    },
    async rcCode({ commit }, code) {
      await commit('RC_CODE', code)
    },
    async rcTitle({ commit }, title) {
      await commit('RC_TITLE', title)
    },
    async rcSession({ commit }, session) {
      await commit('RC_SESSION', session)
    },
    async rcSemester({ commit }, semester) {
      await commit('RC_SEMESTER', semester)
    },
  },

  modules: {
  }
})
