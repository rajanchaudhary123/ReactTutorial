import React from 'react';
import fish from "../../../images/aaa.gif"; 
import Button from 'react-bootstrap/esm/Button';
const Home = () => {
  return (
    <>
          <div class="container">
  <div class="row">
    <div class="col">
      <h1 style={{marginTop:"20%"}}>We started <span style={{color:"green"}}>our Business with</span></h1>
      <h1 style={{color:"red"}}>HAMRO KHANA</h1>
      <h2>We are a team of talented developers for making a websites</h2>
      <Button variant="outline-primary" >Get-Started</Button>{' '}
    </div>
    <div class="col">
    <img style={{width:"100%",height:"100%"}} src={fish} alt="rajan"/>
    </div>
  </div>
</div>

    </>
  )
}

export default Home