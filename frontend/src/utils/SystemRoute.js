import React from 'react'
import {Route, Redirect} from 'react-router-dom'



const SystemRoute = ({ component: Component, authenticated,...rest}) => (
    <Route
    {...rest}
    render = {(props) => authenticated !== true ? <Redirect to='/login'/> : <Component {...props}/>}
    />
)

export default SystemRoute