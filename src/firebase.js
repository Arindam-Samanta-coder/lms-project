import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBg0WiienzKrkXVCZNsG86xCL5I83Zuu4Y",
    authDomain: "lms-project-71fe5.firebaseapp.com",
    projectId: "lms-project-71fe5",
    storageBucket: "lms-project-71fe5.appspot.com",
    messagingSenderId: "1042405481918",
    appId: "1:1042405481918:web:6f71609a3a7f5453b32def",
    measurementId: "G-D8GLDYK26Z"
  };

  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const database = firebase.database();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { db, auth, provider, storage, database };