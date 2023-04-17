import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const Navbar = () => {
  return(
    <div className='footer'>
        <div className='main'>
       
            <img src={BurgerLogo} alt=""></img>
            <div className='socialMedia'>
           <FacebookIcon/>
           <InstagramIcon/>
           <TwitterIcon/>
           <LinkedInIcon/>
     
            </div>
       
        </div> 
    </div>
  ) 
};
