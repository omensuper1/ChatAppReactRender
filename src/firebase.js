import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyAWvemB77BViJZ5LcvdNjj6IBPmeMOSKDg",
  authDomain: "unichat-77fe3.firebaseapp.com",
  projectId: "unichat-77fe3",
  storageBucket: "unichat-77fe3.appspot.com",
  messagingSenderId: "231411442361",
  appId: "1:231411442361:web:99453413f7a3936ed67168",
  measurementId: "G-PMGZ470YRS"
}).auth()
