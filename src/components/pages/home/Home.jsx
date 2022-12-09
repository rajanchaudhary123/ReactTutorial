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

import React from "react";
import fish from "../../../images/jpt.gif";
import { dealData } from "../../constants/data";
import CommonPages from "../CommonPages/commonPages";
import HomeCard from "./HomeCard";
const Home = () => {
  return (
    <>
      <CommonPages
        title="we Started Our Statup with"
        description="We trust in our Hardwork Ans Services"
        btnHome="Get Services"
        imgHome={fish}
        visit="/services"
      />
      <div className="my-0">
        <h2 className="text-center">Best Deal of the Day</h2>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              {dealData.map((curValue) => {
                return (
                  <HomeCard
                    key={curValue.id}
                    title={curValue.title}
                    url={curValue.url}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
