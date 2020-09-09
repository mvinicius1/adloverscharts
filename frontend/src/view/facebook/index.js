import React, {useState, useCallback} from 'react';
import './facebook.css'
import {Link, Redirect} from 'react-router-dom';
import Navbar from '../../components/navbar'
import {useSelector} from 'react-redux'
import axios from 'axios'
import LineFacebook from '../../components/facebookCharts/LineFacebook'
import BarFacebook from '../../components/facebookCharts/BarFacebook'
import RadarFacebook from '../../components/facebookCharts/RadarFacebook'
import DoughnutFacebook from '../../components/facebookCharts/DoughnutFacebook'

function Facebook(){

    const [msg, setMsg] = useState("")

    const testeFB = useCallback (async ()=>{
         const res = await axios.get(`${process.env.REACT_APP_URL}/facebook`)
            setMsg(res.data)
        })

    return(<>
          <Navbar/>
          <div className='linefacebook'>
            <LineFacebook/></div>
          <div className='barfacebook'>
            <BarFacebook /></div>
          <div className='radarfacebook'>
          <RadarFacebook /></div>  
          <div className='doughnutfacebook'>
          <DoughnutFacebook /></div>  
          
          
          
       {/*    {
                useSelector (state => state.userLogged) > 0  ? <Redirect to ='/facebook' /> : <Redirect to ='/login' />
            } */}
        {/* <button onClick={testeFB}></button>
            {msg} */}
        </>
    )
}

export default Facebook;