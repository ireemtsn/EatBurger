import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../styles/Footer.css';




export const Footer = () => {
  return (
     <div className="footer">
       <div className="socialMedia">
      <FaFacebook />
       <FaInstagram />
       <FaTwitter />
       <FaLinkedin />
       </div>
       <p>Tüm hakları saklıdır @2023 | Eat Burger</p>
     </div>
   );
};
