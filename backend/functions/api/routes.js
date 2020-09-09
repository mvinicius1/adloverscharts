
const app = require ('express')();
const userController = require ('../controllers/userController')
const authController = require ('../controllers/authController')
const facebookController = require ('../controllers/facebookController')

//AUTH ROUTES
app.post('/login', authController.logIn)
app.post("/signup", authController.signUp)


//USER ROUTES
app.route('/user/:id')
    .get(userController.getUserbyId)

app.route('/users')
    .all(authController.isLogged)
    .get(authController.isAdmin, userController.getUsers)
    .post(userController.postUsers)


// FACEBOOK ROUTES
app.route("/facebook")
    /* .all(authController.isLogged) */
    .get(facebookController.teste)

module.exports = app