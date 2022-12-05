// import React from "react";
// import { useState } from "react";

// const Home = () => {
//   return (
//     <>
//       <div >
//     <RedHOC cmp={Counter}/>
//     <GreenHOC cmp={Counter}/>
//     <BlueHOC cmp={Counter}/>
//       </div>
//     </>
//   );
// };
// const Counter =()=>{
//   const [count,setCount]=useState(0);
//   return(
//     <>
//     <h1>{count}</h1>
//     <button onClick={()=>setCount(count+1)}>Click Meeeee</button>
//     </>
    
//   )
// }
// const RedHOC=(props)=>{
//   return(
//     <>
//     <div>
//       <h1 style={{backgroundColor:"red", width:"100px"}}>Red<props.cmp/> </h1>
//     </div>
//     </>
//   )

// }
// const GreenHOC=(props)=>{
//   return(
//     <>
//     <div>
//       <h1 style={{backgroundColor:"green", width:"100px"}}>Green<props.cmp/> </h1>
//     </div>
//     </>
//   )

// }
// const BlueHOC=(props)=>{
//   return(
//     <>
//     <div>
//       <h1 style={{backgroundColor:"blue", width:"100px"}}>Blue<props.cmp/> </h1>
//     </div>
//     </>
//   )

// }
// export default Home;

import React from 'react';
import fish from "../../../images/jpt.gif"; 
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
      <Button variant="outline-primary">Get-Started</Button>{' '}
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