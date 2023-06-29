import React from 'react'
import Home from './Home'
import {Link,Outlet} from 'react-router-dom'

const Contactus = () => {
  return (
    <>
    <div>
        
        <Home/>
    </div>
        <h1>Iam Contact us page</h1>
        <Link to={'Insta'}><h4>Contact via Instagram</h4></Link>
        <Link to={'Mail'}><h4>Contact via Mail</h4></Link> 
        <Outlet/>
        </>
  )
}

export default Contactus