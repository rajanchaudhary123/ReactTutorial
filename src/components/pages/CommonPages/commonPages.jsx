import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { NavLink} from "react-router-dom";


const CommonPages = (props) => {
    return (
        <>
              <div class="container">
      <div class="row">
        <div class="col">
          <h1 style={{color:"green"}}>{props.title}</h1>
          <h1 style={{color:"red"}}>HAMRO KHANA</h1>
          <h2>{props.description}</h2>
          <NavLink to={props.visit}><Button variant="outline-primary" >{props.btnHome}</Button>{' '}</NavLink> 
        </div>
        <div class="col">
        <img style={{width:"100%",height:"100%"}} src={props.imgHome} alt="rajan"/>
        </div>
      </div>
    </div>
    
        </>
      )
    }

export default CommonPages