import React, {useState} from 'react';
import './google.css'
import {Link, Redirect} from 'react-router-dom';
import Navbar from '../../components/navbar'
import {useSelector} from 'react-redux'

function Google(){
    return(<>
       <Navbar/>
     {/*   {
                useSelector (state => state.userLogged) > 0  ? <Redirect to ='/google' /> : <Redirect to ='/login' />
            } */}
        <h1>Aqui é o GOOGLE</h1>
        </>
    )
}

export default Google;