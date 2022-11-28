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
  return (
    <>
      <h1 className='header'>abc ever</h1>
      <div className='img_div'>
      <img src= {abc} alt="wakanda" />
      <img src= {abc} alt="wakanda" />
      <img src= {abc} alt="wakanda" />
      </div>
    </>
  )
}

export default Home