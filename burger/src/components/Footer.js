import React from 'react';


export const Navbar = () => {
  return(
    <div className='footer'>
        <div className='main'>
       
            <img src={BurgerLogo} alt=""></img>
            <div className='socialMedia'>
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
