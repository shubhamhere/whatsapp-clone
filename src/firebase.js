// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDMzkvCNtbbWCB4zPsDylLT7TLSjMMa-R8",
  authDomain: "whatsapp-clone-20022.firebaseapp.com",
  projectId: "whatsapp-clone-20022",
  storageBucket: "whatsapp-clone-20022.appspot.com",
  messagingSenderId: "31531566400",
  appId: "1:31531566400:web:fff8b414f7fc59251d26a5",
  measurementId: "G-WZHCYNP9H1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

//This For Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
