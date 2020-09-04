const INITIAL_STATE ={
userId: null,
userToken: null,
userEmail:'',
/* userLogged: 0, */
userName: null,
/* userAdmin: false, */
userPhone: null,
}

function userReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case'LOG_IN':
        return {...state,
            userToken: action.userToken,
            userId: action.userId,
            /* userLogged: 1, */
            userEmail: action.userEmail,
            userName: action.userName,
            /* userAdmin: action.userAdmin, */
            userPhone: action.userPhone,
        }

        case 'LOG_OUT':
        return {//...state,
            userId: null,
            userToken: null,
           /*  userLogged: 0, */
            userEmail: null,
            userName: null,
           /*  userAdmin: false, */
            userPhone: null,
            }   
        default:
            return state;
    }
}

export default userReducer;