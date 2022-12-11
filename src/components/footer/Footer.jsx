import React from "react";
import footStyle from "../footer/footer.css";
const Footer = () => {
  return (
    <>

      <div className="main-footer" style={footStyle}>
      <div className="container">
         <div className="row">
          {/*column1*/}

          <div className="col">
            <h4>We're HAMROKHANA</h4>
            <ul className="list-unstyled">
              <li>Delivery Charges</li>
              <li>Available Areas</li>
              <li> Blog</li>
            </ul>
          </div>
          {/*column 2*/}
          <div className="col">
            <h4>Get Help</h4>
            <ul className="list-unstyled">
              <li>How To Order?</li>
              <li>FAQS</li>
              <li>Contact US</li> 

            </ul>
          </div>


          {/*column 3*/}
          <div className="col">
            <h4>Call Us</h4>
            <ul className="list-unstyled">
              <li>Kathmandu: 9804750584 </li>
             
            </ul>
          </div>

          {/*column4*/}
          <div className="col">
            <h4>Download App</h4>
            <ul className="list-unstyled">
              <li>Connect with us : </li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
             
            </ul>
          </div>
        
        </div>
        <hr/>

         <div className="row">
           <p className="col-sm">
            &copy; {new Date().getFullYear()} Thicc Memes Inc | All right reserved |Terms of Service | Privacy

           </p>

         </div>

      </div>

    </div>

       
    </>
  );
};

export default Footer;
