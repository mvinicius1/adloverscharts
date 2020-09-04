import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDyc96Ca8WBqn6HnLaz-a3tRE_zemmJTIA",
    authDomain: "adlovers-5a1dc.firebaseapp.com",
    databaseURL: "https://adlovers-5a1dc.firebaseio.com",
    projectId: "adlovers-5a1dc",
    storageBucket: "adlovers-5a1dc.appspot.com",
    messagingSenderId: "872930594152",
    appId: "1:872930594152:web:0fe8ab2ba396b22ae4dadd"
  };
  
 export default firebase.initializeApp(firebaseConfig);