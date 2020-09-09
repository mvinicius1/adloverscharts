const functions = require('firebase-functions');
const admin = require ('firebase-admin');
const firebase = require('firebase');

const express = require ('express');
const app = express();

const cors = require('cors')

const serviceAccount = require("./config/adlovers-41b00-firebase-adminsdk-8fhis-8689399031.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://adlovers-41b00.firebaseio.com"
  });
const config = {    
  apiKey: "AIzaSyAInAnDTSkhVQ9xODEIs2QMNF1c8pThah4",
  authDomain: "adlovers-41b00.firebaseapp.com",
  databaseURL: "https://adlovers-41b00.firebaseio.com",
  projectId: "adlovers-41b00",
  storageBucket: "adlovers-41b00.appspot.com",
  messagingSenderId: "508228833470",
  appId: "1:508228833470:web:52078753c8b81b416a8eef"
              };
firebase.initializeApp(config)
const db = admin.firestore();




const apiRoutes = require ('./api/routes')
app.use(cors())
app.use("/", apiRoutes)




exports.api = functions.https.onRequest(app);


