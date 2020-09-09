import React, {useState} from 'react';
import './home.css'
import {Link, Redirect} from 'react-router-dom';
import Navbar from '../../components/navbar'
import {useSelector} from 'react-redux'
import LineComparing from '../../components/homeCharts/lineComparing'
import BarComparing from '../../components/homeCharts/barComparing'
import DoughnutComparing from '../../components/homeCharts/doughnutComparing'

function Home(){
    return(<>
        <Navbar/>
        <div className='linehome'>
            <LineComparing/></div>
          <div className='barhome'>
            <BarComparing /></div>
          <div className='doughnuthome'>
          <DoughnutComparing /></div> 
      {/*   {
                useSelector (state => state.userLogged) > 0  ? <Redirect to ='/' /> : <Redirect to ='/login' />
            } */}
            
        </>
    )
}

export default Home;