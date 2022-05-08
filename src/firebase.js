import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'


// import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyBNzEraMJiGZth7ZATQt3TOoM3GjlNY1nk",
    authDomain: "rir-assignment.firebaseapp.com",
    projectId: "rir-assignment",
    storageBucket: "rir-assignment.appspot.com",
    messagingSenderId: "246698437768",
    appId: "1:246698437768:web:580b070f71bd59d960833d"
  };

   const firebaseApp = firebase.initializeApp(firebaseConfig); 
   const db= firebaseApp.firestore();
   const auth = firebase.auth();
   const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
   const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

   export {db, auth, googleAuthProvider, facebookAuthProvider};