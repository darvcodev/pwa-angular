// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAEJL43L0Jns7BWL1meJ_jozUeLk14jNA",
  authDomain: "pwa-angular-2023.firebaseapp.com",
  projectId: "pwa-angular-2023",
  storageBucket: "pwa-angular-2023.appspot.com",
  messagingSenderId: "363981709882",
  appId: "1:363981709882:web:72c9b1d8e02d6fc7d2cb03",
  measurementId: "G-D1GP7C08HS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);