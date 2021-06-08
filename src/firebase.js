import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyArrcreHNUUkGGoE9LsxMVBcVeLj4yI-Kc",
  authDomain: "auth-development-e62b2.firebaseapp.com",
  projectId: "auth-development-e62b2",
  storageBucket: "auth-development-e62b2.appspot.com",
  messagingSenderId: "747317555934",
  appId: "1:747317555934:web:7c2fcdb18b9f8d257bc84f"
})

export const auth = app.auth()
export default app
