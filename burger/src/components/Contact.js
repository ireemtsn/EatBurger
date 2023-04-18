import React from 'react';
import burgerContact from '../assets/burgercontact.jpg';
import '../styles/Contact.css';

export const Contact = () => {
return(
<div className='contact'>
   <div  
   style={{backgroundImage: `url(${burgerContact})`  }}>
</div>
<div className='contactForm'>
   <h2>Bizimle İletişime Geçiniz..</h2>
   <form>
      <label>Mail adresiniz:</label>
      <input type='text'
         name='name'
         placeholder='Lütfen mail adresinizi giriniz..'>
      </input>

      <label>Mesajınız:</label>
      <textarea
         name='massage'
         rows="6"
         placeholder='Lütfen mesajınızı giriniz..'>
      </textarea>

   </form>
</div>
</div>
) ;
};