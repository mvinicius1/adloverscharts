const functions = require('firebase-functions');
const admin = require ('firebase-admin');
const firebase = require('firebase');

const express = require ('express');
const app = express();

const cors = require('cors')

const serviceAccount = require("./config/adloverbackend-firebase-adminsdk-bcoz8-d1365546a7.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://adloverbackend.firebaseio.com"
  });
const config = {    
        apiKey: "AIzaSyCTb3MPepgFvRv14v7UebdcgKMk7DiK2vU",
        authDomain: "adloverbackend.firebaseapp.com",
        databaseURL: "https://adloverbackend.firebaseio.com",
        projectId: "adloverbackend",
        storageBucket: "adloverbackend.appspot.com",
        messagingSenderId: "971163477289",
        appId: "1:971163477289:web:c27574d9dbf829b2ac8338"
      };
firebase.initializeApp(config)
const db = admin.firestore();




const apiRoutes = require ('./api/routes')
app.use(cors())
app.use("/", apiRoutes)




exports.api = functions.https.onRequest(app);


