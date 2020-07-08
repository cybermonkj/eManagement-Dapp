import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init 

const firebaseConfig = {
    apiKey: "AIzaSyArE92zCu7S1ZLix8hs-IPVuEM5YKuXh3U",
    authDomain: "emanagementdapp.firebaseapp.com",
    databaseURL: "https://emanagementdapp.firebaseio.com",
    projectId: "emanagementdapp",
    storageBucket: "emanagementdapp.appspot.com",
    messagingSenderId: "1043866564735",
    appId: "1:1043866564735:web:b2740791840d976c9ea74a",
    measurementId: "G-1RS81WJ331"
}

firebase.initializeApp(firebaseConfig)

// Utils
const db = firebase.firestore()
const auth = firebase.auth()
// const functions = firebase.functions()

// Collection references
const pupilsCollection = db.collection('pupils')
const studentsCollection = db.collection('students')
const staffCollection = db.collection('staff')
const studentCollection = db.collection('student')
const classesCollection = db.collection('classes')

// Export utils
export {
    db,
    auth,
    studentCollection,
    pupilsCollection,
    studentsCollection,
    staffCollection,
    classesCollection
}

