import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCwBsAZ-7ag74GLd_zR7Sny7L-9x2V8E8g",
  authDomain: "financialaccounting-44e9a.firebaseapp.com",
  projectId: "financialaccounting-44e9a",
  storageBucket: "financialaccounting-44e9a.appspot.com",
  messagingSenderId: "13037698379",
  appId: "1:13037698379:web:3d8396ab886fefbf397cce"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }
