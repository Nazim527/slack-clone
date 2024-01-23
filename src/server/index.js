// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2CsludXaFV4LFtqd8kDV8d4q5Yp8hzHE",
  authDomain: "slack-clone1-acfab.firebaseapp.com",
  projectId: "slack-clone1-acfab",
  storageBucket: "slack-clone1-acfab.appspot.com",
  messagingSenderId: "392714585110",
  appId: "1:392714585110:web:2dae60ddfa59842f452137",
  measurementId: "G-ZYF4XWERL9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const room = collection(db,"rooms")
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default room;