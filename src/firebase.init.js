// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWJLBmICS_b_Hvt-6R9MaTArcd2MWqSig",
  authDomain: "seo-agency-18.firebaseapp.com",
  projectId: "seo-agency-18",
  storageBucket: "seo-agency-18.appspot.com",
  messagingSenderId: "342961394455",
  appId: "1:342961394455:web:0f4a9fcf82020d6157dd52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;