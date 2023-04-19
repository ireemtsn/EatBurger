import React from 'react';
import burgerImage from '../assets/banneryeni.jpg';
import '../styles/About.css';

export const About = () => {
  return(
    <div className='about'>
      <div className='aboutTop'
        style={{backgroundImage: `url(${burgerImage})`  }}>
      </div>
      <div className='aboutBottom'>
        <h1>Hakkımızda</h1>
        
        <p>Alışveriş Merkezleri ve Yatırımcıları Derneği ve (AYD) araştırma şirketi AKADEMETRE işbirliği ile yapılan “2016 AVM'ler’de En Beğenilen ve Tercih Edilen Perakende Markaları Araştırması”'nda 1 numaralı marka seçilmiştir. 2017 yılında Mediabrands Insight tarafından yapılan “Türkiye’de Fast Food Sektörü” araştırmasında en çok tercih edilen marka, Marketing Türkiye’nin AKADEMETRE işbirliğiyle yaptığı 2017 yılı “İtibar ve Marka Değeri Performans Ölçümlemesi” araştırmasında “Fast-Food” kategorisinde marka kategorisinde birincilik, Marketing Türkiye ile Roamler Türkiye iş birliğiyle gerçekleştirilen “Türkiye’nin En Cool Markaları” araştırması sonucu “Fast-Food” kategorisinde “En Cool Marka”, A.L.F.A. Awards’ta “Hızlı Servis Restoranları” kategorisinde müşteri deneyimini en iyi yöneten marka olarak birincilik ödülü, UFRAD Franchising Ödülleri’nde “Türkiye’nin En Büyük Franchise” ödülü, The Brand Age Dergisi ile Xsights Araştırma ve Danışmanlık iş birliğinde gerçekleştirilen "Summer Hits 2017: Yazın Sevilen Markaları” araştırmasında birincilik, Restaurant Brands International tarafından hazırlanan “Restoranların Açılış Kalitesi Endeksi” kriterine göre “Yılın Pazarlama Ödülü (Marketer of the Year)”, Kristal Elma Ödülleri’nde “Paket Servis Buz Gibi” ilanı ile “Bilboard ve Radyo” kategorisinde 2 Gümüş ödülü almıştırr.</p>


      </div>

    </div>
  ) 
};
