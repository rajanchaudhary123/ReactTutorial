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
    </>
  )
}

export default Home