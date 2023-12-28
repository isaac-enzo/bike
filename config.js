import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  
  const firebaseConfig = {
    apiKey: "AIzaSyCI1WWvUnZ65gYIItJVsspwKTjMKSYQeIc",
    authDomain: "bike-ebdba.firebaseapp.com",
    databaseURL: "https://bike-ebdba-default-rtdb.firebaseio.com",
    projectId: "bike-ebdba",
    storageBucket: "bike-ebdba.appspot.com",
    messagingSenderId: "57441497486",
    appId: "1:57441497486:web:4e4cbaf684f5e7260eb4df",
    measurementId: "G-FD2NGRJ4VV"
  };
  
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
