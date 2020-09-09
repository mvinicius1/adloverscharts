import React, {useState, useCallback} from 'react';
import './dados.css'
import {Link, Redirect} from 'react-router-dom';
import Navbar from '../../components/navbar'
import {useSelector} from 'react-redux'
import firebase from '../../config/firebase';
import 'firebase/auth';


function Dados(){
  
  const userName = useSelector((state) => {
    return state.auth.userName
  });
  const userEmail = useSelector((state) => {
    return state.auth.userEmail
  });
  const userPhone = useSelector((state) => {
    return state.auth.userPhone
  });
  const [msgType, setMsgtype] = useState('');
  
  const changePassword = useCallback (() =>{
    setMsgtype(null)
    firebase.auth().sendPasswordResetEmail(userEmail).then(()=> {
      setMsgtype('sucesso')
    })
    .catch((error) => 
      setMsgtype('error'))
    ;

  })
  
    return(<>
      <Navbar/>
     {/*  {
                useSelector (state => state.userLogged) > 0  ? <Redirect to ='/dados' /> : <Redirect to ='/login' />
            } */}
    
      <div className = "register-content d-flex align-items-center" >
        <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                <h1 className="h3 mb-3 font-weight-normal">AdL&#9829;vers - {userName}</h1>
                <p> Altere sua senha abaixo!</p>
            </div>
                <input type="name" id="inputName" className="form-control" placeholder={userName} name="name" required/>
                <input type="email" id="inputEmail" className="form-control" placeholder={userEmail} name="email" required/>                        
                <input type="phone" id="inputPhone" className="form-control" placeholder={userPhone}name="phone" required/>   

               {
                  <button onClick={changePassword} className=" form-label-group btn btn-lg btn-primary btn-block btn-register" type="button">Alterar minha senha</button>
                }       

              {<div className = "msg-register text-white text-center">
               { msgType === 'sucesso' && <span><strong>Foi enviado uma mensagem para o email cadastrado! Por favor, confira sua caixa de entrada.</strong></span>}
                { msgType === 'error' && <span><strong>Houve algum erro, tente novamente.</strong></span>}
            </div>}
            <p className="mt-5 mb-3 text-muted text-center"> AdL&#9829;vers - Todos os direitos reservados &copy; 2020</p>
            
        </form>
        </div>
        </>
    )
}

export default Dados;