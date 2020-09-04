import React, { useState } from 'react';

import {Link, Redirect} from 'react-router-dom';
import Navbar from '../../components/navbar'
import axios from 'axios'

import './register.css';

function NewUser(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [msgType, setMsgtype] = useState('');
    const [msg, setMsg] = useState('');
    const [spinner, setSpinner] = useState(false);
    
        

    function signUp(){

        setMsgtype(null);


        if(!email || !password){
            setMsgtype('error')
            setMsg('Você precisa informar e-mail e senha para se cadastrar!') 
            return  }
                
        if(confirmPassword !== password){
            setMsgtype('error')
            setMsg('Suas senhas precisam ser iguais!') 
            return  }

         if(!name){
            setMsgtype('error')
            setMsg('Por favor, coloque seu nome!') 
            return  }  
           
         if(!phone){
            setMsgtype('error')
            setMsg('Por favor, coloque seu WhatsApp!') 
            return  } 

            if(password.split("").length < 6){
            setMsgtype('error')
            setMsg('Por favor, sua senha precisa ter mais de 6 caractéres') 
            return  }

            setSpinner(1);

            const user ={name, email, phone, password, confirmPassword}

            axios.post(`${process.env.REACT_APP_URL}/signup`, user)
            .then ((res) =>{
                console.log(res)
                 if (res.data === 'O e-mail já está em uso!' || 'Sua senha precisa ter pelo menos 6 characteres' || 'O formato do seu e-mail é inválido!' || 'Não foi possível se cadastrar. Tente novamente mais tarde!' ){
                    setMsgtype('error')
                    setMsg(res.data.message)
                    setSpinner(0)
                }else if (res.data.message === 'Cadastro realizado com sucesso!'){
                    setSpinner(0)
                }     
                      
                    
            }).catch (() =>{
                setMsgtype('error')
                    setMsg('Estamos com problemas em nosso sistema, volte mais tarde')
            })
           }

    return (<>
        <Navbar/>
        <div className = "register-content d-flex align-items-center" >
        <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                <h1 className="h3 mb-3 font-weight-normal">AdL&#9829;vers - Cadastro</h1>
                <p>Bem vindo(a)! Por favor, faça o cadastro abaixo.</p>
            </div>
                <input onChange={(e) => setName(e.target.value)} type="name" id="inputName" className="form-control" placeholder="Nome" name="name" required/>
                <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control" placeholder="Endereço de e-mail" name="email" required/>           
                <input onChange={(e) => setPassword(e.target.value)} type="password" id="inputPassword" className="form-control" placeholder="Senha" name= "password" required/>
                <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" id="confirmPassword" className="form-control" placeholder="Confirme sua senha" name= "password" required/>
                <input onChange={(e) => setPhone(e.target.value)} type="phone" id="inputPhone" className="form-control" placeholder="Whatsapp" name="phone" required/>   

                {
                    spinner ? <div class="spinner-border text-primary d-flex m-auto" role="status">
                    <span class="sr-only">Loading...</span>
                   </div> : <button onClick={signUp} className=" form-label-group btn btn-lg btn-primary btn-block btn-register" type="button">Cadastrar</button>
                }              

              <div className = "msg-register text-white text-center">
               { msgType === 'sucesso' && <span><strong>Cadastro realizado com sucesso!</strong></span>}
                { msgType === 'error' && <span><strong>{msg}</strong></span>}
            </div>
            
            <div className="opcoes-register">
            <Link to="/login" className="mx-2"> Voltar para login</Link>   
            </div>

            <p className="mt-5 mb-3 text-muted text-center"> AdL&#9829;vers - Todos os direitos reservados &copy; 2020</p>
            
        </form>
        </div>
                </>
    )}
    

export default NewUser