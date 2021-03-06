import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD985MuLGvxc7plSAfxwLpfAaKYYNVtwMQ",
    authDomain: "slack-clone-e1c52.firebaseapp.com",
    databaseURL: "https://slack-clone-e1c52.firebaseio.com",
    projectId: "slack-clone-e1c52",
    storageBucket: "slack-clone-e1c52.appspot.com",
    messagingSenderId: "27384924790",
    appId: "1:27384924790:web:48fd23791dc122075fad57",
    measurementId: "G-E66BSMLE06"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {  auth, provider }
export default db