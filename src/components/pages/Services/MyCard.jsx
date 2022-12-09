import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {NavLink} from "react-router-dom";

export const MyCard = (props) => {
  return (
    <>
    <div className="col-md-3 col-10 mx-auto">
                <Card style={{height:"180px"}}>
                  <Card.Img variant="top" src={props.CardImage} alt="myimage"/>
                  <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                      {props.description}
                    </Card.Text>
                    <NavLink to={props.visit}>
                    <Button variant="primary">{props.CardBtn}</Button>
                    </NavLink>
                  </Card.Body>
                </Card>
              </div> 
    </>
  )
}
