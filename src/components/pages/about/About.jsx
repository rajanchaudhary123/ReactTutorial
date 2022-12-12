import React from 'react';
import CommonPages from '../CommonPages/commonPages';
import abc from "../../../images/aaa.gif";
import nat from "../../../images/a.jpg";
import nat1 from "../../../images/abc.jpg";
import nat2 from "../../../images/fish.jpg";
import Carousel from 'react-bootstrap/Carousel';
const Home = () => {
  return (
    <>
    <CommonPages title="ABOUT US" 
    description="This is our about us page" 
    btnHome="CONTACT US"
    imgHome={abc}
    visit="/contact"

    />
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={nat}
          alt="First slide"
          height="500px"
          width="100px"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={nat1}
          alt="Second slide"
          height="500px"
          width="100px"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={nat2}
          alt="Third slide"
          height="500px"
          width="100px"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Home