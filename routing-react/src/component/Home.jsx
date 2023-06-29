import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import Header from './Header'
import Services from './Services'



const Home = () => {

  const navLinkStyles = ({isActive})=>{
    return{

      textDecoration:isActive? "none":"underling",
      color: isActive ? "white" : "red",
      fontSize: "50px"
    };
  };

  return (
    <>
    <div className='home'>

    <nav>
        <ul>
           <NavLink style={navLinkStyles} to={'/'}><li>Home</li></NavLink>
        
           <NavLink to={'/Aboutus'}><li>About</li></NavLink>
           <NavLink to={'/Contactus'}><li>Contact Us</li></NavLink>
           <NavLink to={'/Services'}><li>Services</li></NavLink>
       
        </ul>
    </nav>



    </div>


    </>
  )
}

export default Home
