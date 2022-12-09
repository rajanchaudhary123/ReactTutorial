import React from 'react';
import CommonPages from '../CommonPages/commonPages';
import abc from "../../../images/aaa.gif"
const Home = () => {
  return (
    <>
    <CommonPages title="ABOUT US" 
    description="This is our about us page" 
    btnHome="CONTACT US"
    imgHome={abc}
    visit="/contact"

    />
    </>
  )
}

export default Home