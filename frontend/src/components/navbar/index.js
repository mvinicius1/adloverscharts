import React, {useState, useCallback} from 'react';
import './navbar.css'
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import firebase from '../../config/firebase'
import Axios from 'axios';


function Navbar(){
    const dispatch = useDispatch();

    const userName = useSelector((state) => {
      return state.auth.userName
    });

    const userAdmin = useSelector((state) =>{
      return state.auth.userAdmin
    })  ;

    const logout = useCallback(() =>{
      firebase.auth().signOut()
      localStorage.removeItem('adlovers_localstorage')
      localStorage.clear('adloversusers')
      delete Axios.defaults.headers.common['Authorization']
      window.location.href='/login'
      dispatch({type: 'LOG_OUT'});
    })

    return(
        <nav class="navbar navbar-expand-lg navbar-primary bg-primary">
  <span class="navbar-brand">AdL&#9829;vers</span>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fas fa-bars "></i>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to="/home" className="nav-link" >Início</Link>
      </li>

        {           localStorage.adlovers_localstorage ?
                     /* useSelector (state => state.userEmail) ? */
             <>
      <li className="nav-item"><Link to="/facebook" className="nav-link" href="#">Facebook</Link> </li>
      <li className="nav-item"> <Link to="/google" className="nav-link" href="#">Google</Link></li>
     
      
      {/* <li className="nav-item dropdown">
        <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Serviços
        </span>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Visualizar Gráficos</a>
          <a className="dropdown-item" href="#">Criar Relatórios</a>
          <a className="dropdown-item" href="#">Comparar Gráficos </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Meus Arquivos</a>
        </div>
      </li> */}
      
      <ul className="float-right">
      <li className="nav-item float-right"> <Link to='/login' className="nav-link" onClick={logout} href="#">Sair</Link></li>
      
      </ul>
      <li className="nav-item dropdown">
        <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {userName}
        </span>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to="/dados" className="dropdown-item">Dados</Link>
          <Link to="/pagamentos" className="dropdown-item">Pagamentos</Link>
          <Link to="/ajuda" className="dropdown-item">Preciso de ajuda</Link>
          <div className="dropdown-divider"></div>
          {userAdmin ? <Link to ='/admin' className="dropdown-item">Admin</Link> : null} 
        </div>
      </li>
      </>
      :
      <>
      <li className="nav-item"><Link to="/login" className="nav-link" href="#">Login</Link> </li>
      <li className="nav-item"> <Link to="/cadastro" className="nav-link" href="#">Cadastro</Link></li>
      </>

     
        }   

   
    </ul>
  </div>
</nav>
    )
}

export default Navbar;