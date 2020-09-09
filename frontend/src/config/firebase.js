import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAInAnDTSkhVQ9xODEIs2QMNF1c8pThah4",
  authDomain: "adlovers-41b00.firebaseapp.com",
  databaseURL: "https://adlovers-41b00.firebaseio.com",
  projectId: "adlovers-41b00",
  storageBucket: "adlovers-41b00.appspot.com",
  messagingSenderId: "508228833470",
  appId: "1:508228833470:web:52078753c8b81b416a8eef"
  };
  
 export default firebase.initializeApp(firebaseConfig);