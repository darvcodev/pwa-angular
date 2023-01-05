import firebase from "firebase/app";
import "firebase/messaging";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyAAEJL43L0Jns7BWL1meJ_jozUeLk14jNA",
  authDomain: "pwa-angular-2023.firebaseapp.com",
  projectId: "pwa-angular-2023",
  storageBucket: "pwa-angular-2023.appspot.com",
  messagingSenderId: "363981709882",
  appId: "1:363981709882:web:72c9b1d8e02d6fc7d2cb03",
  measurementId: "G-D1GP7C08HS",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = firebase.messaging();
