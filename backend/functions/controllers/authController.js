const functions = require('firebase-functions');
const admin = require ('firebase-admin');
const firebase = require('firebase');
const db = admin.firestore();


async function  signUp (req,res){
    const user = {
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        confirmPassword: req.body.confirmPassword,
        phone:req.body.phone,
    }

    //VALIDATION PLACE


    try {
        const newUser =  await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        const id = newUser.user.uid
        const token = await newUser.user.getIdToken()

        await db.collection('users').doc(id).set({
            name:user.name, 
            email:user.email, 
            phone:user.phone,
            id,
            admin: false,
            date: admin.firestore.Timestamp.fromDate(new Date())
        })                    
  
                 res.status(200).json({message:'Cadastro realizado com sucesso!', token});        
    }
    catch(err) {
        console.log(err)
            switch(err.message){
            case "Password should be at least 6 characters":
                res.send ('Sua senha precisa ter pelo menos 6 characteres');
                break;
            case 'The email address is already in use by another account.':
                res.send('O e-mail já está em uso!');
                break;
            case 'The email address is badly formatted.':
                res.send("O formato do seu e-mail é inválido!") ;
                break;
            default:
                res.send(err) ;
                break;      
        }
    }
}

async function  logIn (req,res) {
           
     const email = req.body.email
     const password = req.body.password
     
        
        try{
        const loggedUser = await firebase.auth().signInWithEmailAndPassword(email, password)
        const userFromDB = await db.collection('users').doc(loggedUser.user.uid).get()
        const token = await loggedUser.user.getIdToken();

        res.status(200).json({
            
            email:userFromDB.data().email,
            name:userFromDB.data().name,
            phone:userFromDB.data().phone,
            /* admin:userFromDB.data().admin, */
            id:userFromDB.data().id,
            type: 'LOG_IN',
            setMsgtype:'sucesso',
            token
        })}
          catch(error) {
              if (error.code ==='auth/wrong-password'){
                  return res.status(403).send('Login ou senha incorretos')
              }
              return res.status(500).send(error)
              }         
            
}

 function isLogged (req, res, next){
    let idToken;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
        idToken = req.headers.authorization.split('Bearer ')[1];
    }else{
        return res.status(403).json({error: 'Não autorizado!'})
    }

   admin.auth().verifyIdToken(idToken)
   .then(decodedToken =>{
       db.collection('users').doc(decodedToken.uid).get()
       .then (user =>{
           id = user.data().id
           if(id) return next();
       })
   }).catch (err =>{
       return res.status(403).json({error: err})
   })
}

function isAdmin (req, res, next){
    let idToken;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
        idToken = req.headers.authorization.split('Bearer ')[1];
    }else{
        return res.status(403).json({error: 'Não autorizado!'})
    }

   admin.auth().verifyIdToken(idToken)
   .then(decodedToken =>{
       db.collection('users').doc(decodedToken.uid).get()
       .then (user =>{
           admin = user.data().admin
           if(admin) return next();
       }).catch(err =>{
        return res.status(403).json({error: 'You are not admin'})
       })
   }).catch (err =>{
       return res.status(403).json({error: err})
   })
}

module.exports = {logIn , signUp, isLogged, isAdmin}