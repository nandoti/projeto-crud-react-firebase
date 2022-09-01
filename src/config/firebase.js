import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyAL7novAAn0Lx8AMT74KfcC3L81duXUo6c",
  authDomain: "crud-4461e.firebaseapp.com",
  projectId: "crud-4461e",
  storageBucket: "crud-4461e.appspot.com",
  messagingSenderId: "1095549223059",
  appId: "1:1095549223059:web:42aca821c62500b10acd66",
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
