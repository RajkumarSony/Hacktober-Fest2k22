// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm0UCXf5ClMPKY17vuLlK_2WRJ3H6g01A",
  authDomain: "quora-clone-mern-984bb.firebaseapp.com",
  projectId: "quora-clone-mern-984bb",
  storageBucket: "quora-clone-mern-984bb.appspot.com",
  messagingSenderId: "781510629131",
  appId: "1:781510629131:web:bca8cee216564a1149340e",
  measurementId: "G-VH1JXRMH6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };