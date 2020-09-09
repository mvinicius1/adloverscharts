const admin = require ('firebase-admin');
const firebase = require('firebase');
const db = admin.firestore();
const adsSdk = require('facebook-nodejs-business-sdk');
const accessToken = 'EAAEeiIOjWokBADx44Wr3TWhCZC7Gl84xcLtFmZAemGw5jbDGZBQ5PhQnNDoKVMvqdDo0zuQ6o7OCf0CiRezKOkNKgUcG4hUy4A81N69KneAF9ZB1zFyZBkieZCejFieXMfnxdx9e7wLHcs75omSHmF5MDGi8mJpzITeJIvZBJlnnSQ3fhL82Ca9gisNgCZBcgokZD';
const api = adsSdk.FacebookAdsApi.init(accessToken);
const AdAccount = adsSdk.AdAccount;
const account = new AdAccount('act_306547356919644');


function teste(req,res) {
    account.read([AdAccount.Fields.name, AdAccount.Fields.age])
    .then((data) => {
        const obj = data._data
        res.send (obj.name)
    
    })
    .catch((error) => {
        console.log('Houve um erro')
    });
}

module.exports = {teste}