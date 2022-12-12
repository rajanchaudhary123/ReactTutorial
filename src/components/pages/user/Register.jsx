import React,{useEffect, useState} from 'react';
import Login from './Login';

const Register = () => {
    const [count,setCount]= useState(0);
    const [data,setData]= useState(10);
    useEffect(()=>{
      alert(`count number is : ${count}`);
    },[count]);
  return (
    <>
    <div>

        <Login count={count} data={data} />
        <button onClick={()=>setCount(count+1)}>Click Me</button>
        <button onClick={()=>setData(data+1)}>Click Me</button>
    </div>
    </>
  )
  }; 

export default Register