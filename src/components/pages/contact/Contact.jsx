import React from 'react';
import abc from "../../../images/cc.gif"; 
import CommonPages from '../CommonPages/commonPages';
const Home = () => {
  return (
    <>
    
    <CommonPages title="CONTACT" 
    description="This is a CONTACT page" 
    btnHome="ABOUT US"
    imgHome={abc}
    visit="/About"
          />
    <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14132.248950854198!2d85.32386088886257!3d27.684471220460075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19bfd910ffe9%3A0x66f431dda92f7629!2sShankhamul%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1670754312703!5m2!1sen!2snp" 
    width="100%" 
    height="450" 
    style={{border:0}} 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
      </iframe></div>      
    </>
  )
}

export default Home