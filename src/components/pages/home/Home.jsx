import React from "react";
import { useState } from "react";

const Home = () => {
  return (
    <>
      <div >
    <RedHOC cmp={Counter}/>
    <GreenHOC cmp={Counter}/>
    <BlueHOC cmp={Counter}/>
      </div>
    </>
  );
};
const Counter =()=>{
  const [count,setCount]=useState(0);
  return(
    <>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Click Meeeee</button>
    </>
    
  )
}
const RedHOC=(props)=>{
  return(
    <>
    <div>
      <h1 style={{backgroundColor:"red", width:"100px"}}>Red<props.cmp/> </h1>
    </div>
    </>
  )

}
const GreenHOC=(props)=>{
  return(
    <>
    <div>
      <h1 style={{backgroundColor:"green", width:"100px"}}>Green<props.cmp/> </h1>
    </div>
    </>
  )

}
const BlueHOC=(props)=>{
  return(
    <>
    <div>
      <h1 style={{backgroundColor:"blue", width:"100px"}}>Blue<props.cmp/> </h1>
    </div>
    </>
  )

}
export default Home;
