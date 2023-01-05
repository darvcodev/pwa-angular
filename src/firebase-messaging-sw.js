importScripts('https://www.gstatic.com/firebasejs/7.6.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.2/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyAAEJL43L0Jns7BWL1meJ_jozUeLk14jNA",
  authDomain: "pwa-angular-2023.firebaseapp.com",
  projectId: "pwa-angular-2023",
  storageBucket: "pwa-angular-2023.appspot.com",
  messagingSenderId: "363981709882",
  appId: "1:363981709882:web:72c9b1d8e02d6fc7d2cb03",
  measurementId: "G-D1GP7C08HS",
});

const messaging = firebase.messaging();
