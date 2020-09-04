import React, {useState} from 'react';
import './recpass.css'
import {Link} from 'react-router-dom';
import Navbar from '../../components/navbar'

import firebase from '../../config/firebase';
import 'firebase/auth';

function Recpass(){
    
    const [email, setEmail] = useState();
    const [msg, setMsg] = useState();

    function recpassword(){
        firebase.auth().sendPasswordResetEmail(email).then(resultado => {
            setMsg('Enviamos um link para seu email para você redefinir sua senha!');
        }).catch (err => {
            setMsg('Seu email está correto? Não foi possível identificar um cadastro!')
        })
    }

    return (
        <>
        <Navbar/>
        <div className = "login-content d-flex align-items-center" >

<form className="form-signin mx-auto">
    <div className="text-center mb-4">
    <h1 className="h3 mb-3 font-weight-normal">AdL&#9829;vers - Recuperar senha</h1>
    <p>Por favor, informe seu login de cadastro abaixo</p>
</div>

    <input onChange={(e)=> setEmail (e.target.value)} type="email" id="inputEmail" className="form-control" placeholder="Endereço de e-mail" name="email" required/>
    <span>{msg}</span>
    <button onClick={recpassword} className=" form-label-group btn btn-lg btn-primary btn-block btn-login" type="button">Enviar</button>
           


<div className="opcoes-login">
<Link to='/login' className="mx-2"> Voltar para login</Link>   
<Link to ="cadastro" className="mx-2"> Quero me cadastrar</Link>
</div>

<p className="mt-5 mb-3 text-muted text-center"> AdL&#9829;vers - Todos os direitos reservados &copy; 2020</p>

</form>
</div>
        </>
    )
}

export default Recpass;