// import firebase from 'firebase/app'
import * as firebase from 'firebase';
// import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyA53H3ly-OiKLasv-t81bauHM13XCCJDdk",
  authDomain: "modalin-a9fea.firebaseapp.com",
  databaseURL: "https://modalin-a9fea.firebaseio.com",
  projectId: "modalin-a9fea",
  storageBucket: "modalin-a9fea.appspot.com",
  messagingSenderId: "688499552299",
  appId: "1:688499552299:web:ac46c9bf5df15fcb963a6e"
}

//Check Firebase App named already exist
console.log('Firebase App', firebase.apps.length)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()

export { storage, firebaseConfig, firebase as default }