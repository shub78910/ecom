import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyBN2TYLsvxvHa0F4JbYlhprACenzC0kglM",
    authDomain: "ecommerce-store-53e86.firebaseapp.com",
    projectId: "ecommerce-store-53e86",
    storageBucket: "ecommerce-store-53e86.appspot.com",
    messagingSenderId: "228490399964",
    appId: "1:228490399964:web:59b1ceef38d682db5ae419",
    measurementId: "G-FGRNHP6ZEY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth}
