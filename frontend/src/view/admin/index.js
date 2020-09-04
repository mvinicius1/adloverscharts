import React, {useState} from 'react';
import './admin.css'
import {Link, Redirect} from 'react-router-dom';
import Navbar from '../../components/navbar'
import {useSelector} from 'react-redux'
import axios from 'axios'

function Admin(){

    const [msg, setMsg] = useState();

    const id = useSelector(state =>{return state.userId})
    
    function isAdmin(){
        axios.get(`${process.env.REACT_APP_URL}/user/${id}`)
        .then (user => {
            console.log(user.data)
            if (user.data === true) {
               return setMsg('SUCESSO')
            } else {
               return setMsg('ERRO')
            }
        })
    } 

    return(<>
        {isAdmin()} 
        {msg === 'ERRO'? <Redirect to = "/" /> : null }
         
        <Navbar/>
        <div>       
        <span>Aqui é o admin</span>
        </div>
        </>
    )
}

export default Admin;