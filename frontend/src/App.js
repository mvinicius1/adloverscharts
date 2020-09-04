import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import {store,persistor} from "../src/store";
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import Login from './view/login/'
import NewUser from './view/register'
import Home from './view/home'
import Recpass from './view/recpass'
import Facebook from './view/facebook/'
import Google from './view/google'
import Admin from './view/admin'
import Dados from './view/dados'
import Pagamentos from './view/pagamentos'
import Ajuda from './view/ajuda'
import jwtDecode from 'jwt-decode' 
import AuthRoute from './utils/AuthRoute'
import SystemRoute from './utils/SystemRoute'


let authenticated;
const token = localStorage.adlovers_localstorage;
if(token){
  const decodedToken = jwtDecode (token);
  if(decodedToken.exp * 1000 < Date.now()){
    window.location.href ='/login'
    authenticated = false
  }else{
    authenticated = true
  }
}

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <Router>
      <AuthRoute exact path='/login' component={Login} authenticated={authenticated}/>
      <AuthRoute exact path='/cadastro' component={NewUser} authenticated={authenticated}/>
      <SystemRoute exact path='/' component={Home} authenticated={authenticated}/>
      <AuthRoute exact path='/recuperarsenha' component={Recpass} authenticated={authenticated}/>
      <SystemRoute exact path='/facebook' component={Facebook} authenticated={authenticated}/>
      <SystemRoute exact path='/google' component={Google} authenticated={authenticated}/>
      <SystemRoute exact path='/admin' component={Admin} authenticated={authenticated}/>
      <SystemRoute exact path='/dados' component={Dados} authenticated={authenticated}/>
      <SystemRoute exact path='/pagamentos' component={Pagamentos} authenticated={authenticated}/>
      <SystemRoute exact path='/ajuda' component={Ajuda} authenticated={authenticated}/>
    </Router>
    </PersistGate>
    </Provider>
  );
}

export default App;
