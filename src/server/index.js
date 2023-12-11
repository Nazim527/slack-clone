// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDJbczo3TRSiqiiAeoMd2Z7jXCmgKKWmrw",
  authDomain: "slack-clone1-2a41d.firebaseapp.com",
  projectId: "slack-clone1-2a41d",
  storageBucket: "slack-clone1-2a41d.appspot.com",
  messagingSenderId: "203643376304",
  appId: "1:203643376304:web:525b418cd453459749e175",
  measurementId: "G-NFF69VE075"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const room = collection(db,"rooms")
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider(); 

// export { auth, provider };
export default room;