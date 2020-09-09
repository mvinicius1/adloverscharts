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
import AuthRoute from './utils/AuthRoute'
import SystemRoute from './utils/SystemRoute'
/* import AdminRoute from './utils/AdminRoute'; */

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          
          <AuthRoute exact path='/login' component={Login} />
          <AuthRoute exact path='/cadastro' component={NewUser} />
          <AuthRoute exact path='/recuperarsenha' component={Recpass} />
          <SystemRoute exact path='/home' component={Home} />
          <SystemRoute exact path='/facebook' component={Facebook} />
          <SystemRoute exact path='/google' component={Google} />
          <SystemRoute exact path='/dados' component={Dados} />
          <SystemRoute exact path='/pagamentos' component={Pagamentos} />
          <SystemRoute exact path='/ajuda' component={Ajuda} />
          <SystemRoute exact path='/admin' component={Admin} />
        
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
