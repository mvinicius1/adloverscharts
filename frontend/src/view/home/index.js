import React, {useState} from 'react';
import './home.css'
import {Link, Redirect} from 'react-router-dom';
import Navbar from '../../components/navbar'
import {useSelector} from 'react-redux'

function Home(){
    return(<>
        <Navbar/>
      {/*   {
                useSelector (state => state.userLogged) > 0  ? <Redirect to ='/' /> : <Redirect to ='/login' />
            } */}
            <h1>Aqui é a home</h1>
        </>
    )
}

export default Home;