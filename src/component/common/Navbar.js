import React from 'react'
import './Navbar.css'
import logo from '../assets/NavBarImages/LevelUpWorks-white.png';
import flag1 from '../assets/NavBarImages/NZFlag.png'
import flag2 from '../assets/NavBarImages/MaoriFlag.png'
import avatar1 from '../assets/NavBarImages/Avatar-white.png'


const Navbar = () => {
  return (
    <div className='navBarGlobal'>

        {/* container for the levelUpWorks logo  */}
        <div className='navBar-left'>
            <img src={logo} alt='levelUpWorksLogo' className='levelUpLogo'></img>
        </div>
       
       {/* container for the anchor tags in the middle  */}
        <div className='navBar-middle'>
            <a href="/">Home</a>
            <a href="/features">Features</a>
            <a href="/teachers">Teachers</a>
        </div>
        
        {/* container for  the right part of the navBar  */}
        <div className='navBar-right'>
            {/* container for the lang text and the flag icons  */}
         <div className="language">
            <span>Lang</span>
            <img src={flag1} alt="Flag 1" />
            <img src={flag2} alt="Flag 2" />    
         </div>
         {/* container for the avatar image, login and register   */}
            <div className="login-register">
                <img src={avatar1} alt='userAvatar'></img>
                {/* container for the register and login links  */}
                {/* created to enable the text to be aligned vertically on the avatar image  */}
                <div className='links'>
                    <a href="/register">Register</a>
                    <span>|</span>
                    <a href="/login">Login</a>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar