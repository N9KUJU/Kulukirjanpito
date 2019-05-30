import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDy18qQdiTmy7Jm5KiuphJ8WopXxMaOn54",
    authDomain: "kulukirjanpito-4f779.firebaseapp.com",
    databaseURL: "https://kulukirjanpito-4f779.firebaseio.com",
    projectId: "kulukirjanpito-4f779",
    storageBucket: "kulukirjanpito-4f779.appspot.com",
    messagingSenderId: "729278953478",
    appId: "1:729278953478:web:0e266a19aca2e286"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;
