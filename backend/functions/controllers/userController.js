const functions = require('firebase-functions');
const admin = require ('firebase-admin');
const firebase = require('firebase');
const db = admin.firestore();

 const getUsers = (req,res) =>{
    admin.firestore().collection('users').orderBy('createdAt', 'desc').get()
    .then((
        data) =>{
        let users = [];
        data.forEach(doc =>{
            users.push({
                userId: doc.id,
                body: doc.data().body,
                createdAt:doc.data().createdAt

            });
        });
        return res.json(users)
    })
    .catch(err => console.log(err))
}

const postUsers = (req,res) =>{
    const newUser = {
        name: req.body.name,
        createdAt: admin.firestore.Timestamp.fromDate(new Date())
       };
       admin.firestore().collection('users').add(newUser)
       .then(doc=>{
           res.json({message: `documento ${doc.id} criado com sucesso`})
       })
       .catch(err => {res.status(500).json({error:'algo deu errado'});
       console.log(err)
    })
}

const getUserbyId =(req,res) => {
    const id = req.params.id
    db.collection('users').doc(id).get().then(user =>{
        const isAdmin = user.data().admin
        res.send(isAdmin)
    })
}

module.exports = {getUsers, postUsers, getUserbyId}