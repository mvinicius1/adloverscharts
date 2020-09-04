import React, {useState} from 'react';
import './login.css'
import {Link, Redirect} from 'react-router-dom';
import Navbar from '../../components/navbar'


import firebase from '../../config/firebase';
import 'firebase/auth';

import {useSelector, useDispatch, useStore} from 'react-redux';

import axios from "axios"


function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msgType, setMsgtype] = useState('');
    const [spinner, setSpinner] = useState(false);

    const dispatch = useDispatch();
    const db= firebase.firestore();

    function signin(){
        
        setSpinner(1)
        const user = { email, password}
        axios.post(`${process.env.REACT_APP_URL}/login`, user)

            .then((res)=>{
                if (res.data.type === "LOG_IN"){
                dispatch ({
                    type: 'LOG_IN',
                    userToken: res.data.token,
                    userId: res.data.id,
                    userEmail: res.data.email, 
                    userName: res.data.name, 
                    userPhone: res.data.phone,
                    /* userAdmin: res.data.admin,  */
                    })
                    localStorage.setItem('adlovers_localstorage', `Bearer ${res.data.token}`)
                    axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`
                    setSpinner(0)
                    setMsgtype('sucesso')
                    window.location.href='/'
                 }else{
                    setSpinner(0)
                    setMsgtype('error')}
              })
              .catch((err)=>{ 
                     setSpinner(0)
                     setMsgtype('error'); 
        }) 

    }


    return (
        <>
        <Navbar/>
        <div className = "login-content d-flex align-items-center" >

          {/*   {
                useSelector (state => state.userLogged) > 0  ? <Redirect to ='/' /> : null
            } */}
        <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                <h1 className="h3 mb-3 font-weight-normal">AdL&#9829;vers - Login</h1>
                <p>Bem vindo(a) de volta! Por favor, faça o login abaixo.</p>
            </div>
         
                <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control" placeholder="Endereço de e-mail" name="email" required/>           
                <input onChange={(e) => setPassword(e.target.value)} type="password" id="inputPassword" className="form-control" placeholder="Senha" name= "password" required/>
                {
                    spinner ? <div class="spinner-border text-primary d-flex m-auto" role="status">
                    <span class="sr-only">Loading...</span>
                   </div> : <button onClick={signin} className=" form-label-group btn btn-lg btn-primary btn-block btn-login" type="button">Entrar</button>
                }              
            

            <div className = "msg-login text-white text-center">
                { msgType === 'sucesso' && <span><strong>Você está conectando!</strong></span>}
                { msgType === 'error' && <span><strong>Login ou senha incorretos!</strong></span>}
            </div>
            
            <div className="opcoes-login">
            <Link to='/recuperarsenha' className="mx-2"> Recuperar senha</Link>   
            <Link to ="cadastro" className="mx-2"> Quero me cadastrar</Link>
            </div>

            <p className="mt-5 mb-3 text-muted text-center"> AdL&#9829;vers - Todos os direitos reservados &copy; 2020</p>
            
        </form>
        </div>
        </>)
    
}

export default Login;