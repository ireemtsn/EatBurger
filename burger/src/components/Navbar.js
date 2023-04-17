import React from 'react';
import BurgerLogo from '../assets/logo2.jpg';
import {Link} from 'react-router-dom'
import '../styles/Navbar.css';


export const Navbar = () => {
  return(
    <div className='navbar'>
        <div className='main'>
        <div>
            <img src={BurgerLogo} alt=""></img>
            <Link to="/">Anasayfa
            </Link>
            <Link to="/menu">Menü
            </Link>
            <Link to="/about">Hakkımızda
            </Link>
            <Link to="/contact">İletişim
            </Link>
            </div>
       
        </div>
      
        
    </div>
  ) 
};
