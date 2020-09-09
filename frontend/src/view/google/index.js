import React, {useState} from 'react';
import './google.css'
import {Link, Redirect} from 'react-router-dom';
import Navbar from '../../components/navbar'
import {useSelector} from 'react-redux'
import LineGoogle from '../../components/googleCharts/lineGoogle'
import BarGoogle from '../../components/googleCharts/barGoogle'
import RadarGoogle from '../../components/googleCharts/radarGoogle'
import DoughnutGoogle from '../../components/googleCharts/doughnutGoogle'

function Google(){
    return(<>
       <Navbar/>
       <div className='linegoogle'>
            <LineGoogle/></div>
          <div className='bargoogle'>
            <BarGoogle /></div>
          <div className='radargoogle'>
          <RadarGoogle /></div>  
          <div className='doughnutgoogle'>
          <DoughnutGoogle /></div>  
     {/*   {
                useSelector (state => state.userLogged) > 0  ? <Redirect to ='/google' /> : <Redirect to ='/login' />
            } */}

        </>
    )
}

export default Google;