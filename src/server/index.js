// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFe69UJbONrXIJg5Gdr3FpauMuL8LUYN8",
  authDomain: "slack-clone-fecc8.firebaseapp.com",
  databaseURL: "https://slack-clone-fecc8-default-rtdb.firebaseio.com",
  projectId: "slack-clone-fecc8",
  storageBucket: "slack-clone-fecc8.appspot.com",
  messagingSenderId: "970651267191",
  appId: "1:970651267191:web:22470284019149d9045672",
  measurementId: "G-DFLTM34VSH"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const room = collection(db,"rooms")
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default room;