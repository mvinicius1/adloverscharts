import React, {useState} from 'react';
import './ajuda.css'
import {Link, Redirect} from 'react-router-dom';
import Navbar from '../../components/navbar'
import {useSelector} from 'react-redux'

function Ajuda(){
    return(<>
       <Navbar/>
    {/*    {
                useSelector (state => state.userLogged) > 0  ? <Redirect to ='/ajuda' /> : <Redirect to ='/login' />
            } */}
        <h1>Aqui é o ajuda</h1>
        </>
    )
}

export default Ajuda;