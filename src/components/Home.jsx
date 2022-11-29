// import React, { useState } from 'react'

// const Home = () => {
//   const [count,setCount]=useState(0);
//   return (<>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count+1)}>Increment</button>
//       <button onClick={()=>setCount(count-1)}>Decrement</button>
//     </>
//   )
// }

// export default Home


import React from 'react'
import abc from "../images/abc.jpg";
import "./home.css"

const Home = () => {
  const wakandaCss={
    textAlign :"center"
  };
  return (
    <>
      <h1 className='header'>Rajan Chaudhary</h1>
      <p style={wakandaCss}>This is a great pic</p>
      <div className='img_div'>
      <img src= {abc} alt="wakanda" />
      <img src= {abc} alt="wakanda" />
      <img src= {abc} alt="wakanda" />
      </div>
    </>
  )
}

export default Home