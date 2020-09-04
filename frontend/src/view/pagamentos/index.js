import React, {useState} from 'react';
import './pagamentos.css'
import {Link, Redirect} from 'react-router-dom';
import Navbar from '../../components/navbar'
import {useSelector} from 'react-redux'

function Pagamentos(){
    return(<>
       <Navbar/>
       {/* {
                useSelector (state => state.userLogged) > 0  ? <Redirect to ='/pagamentos' /> : <Redirect to ='/login' />
            } */}
        <h1>Aqui sao os Pagamentos</h1>
        </>
    )
}

export default Pagamentos;