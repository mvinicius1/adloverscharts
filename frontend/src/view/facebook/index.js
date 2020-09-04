import React, {useState} from 'react';
import './facebook.css'
import {Link, Redirect} from 'react-router-dom';
import Navbar from '../../components/navbar'
import {useSelector} from 'react-redux'

function Facebook(){
    return(<>
          <Navbar/>
       {/*    {
                useSelector (state => state.userLogged) > 0  ? <Redirect to ='/facebook' /> : <Redirect to ='/login' />
            } */}
        
        <h1>Aqui é o Facebook</h1>
        </>
    )
}

export default Facebook;