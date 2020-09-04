const admin = require ('firebase-admin');
const firebase = require('firebase');
const db = admin.firestore();

function getInfo(req,res) {
    return res.send('oi')
}

module.exports = {getInfo}