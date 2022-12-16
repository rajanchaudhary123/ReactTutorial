// // import React, { useRef, useState } from "react";
// // //import Login from './Login';

// // // const Register = () => {
// // //   const [count, setCount] = useState(0);
// // //   const [data, setData] = useState(10);

// // //   // const myMemo = useMemo(() => {
// // //   //   return count * 5;
// // //   // }, [count]);

// // //   // const mmyMemo = useMemo(() => {
// // //   //   return count / 2;
// // //   // }, [count]);
// // //   // return (
// // //     <>
// // //       <div>
// // //         {/* <Login count={count}/> */}
// // //         <h1>Count:{count}</h1>
// // //         <h1>Data:{data}</h1>
// // //         <p>{myMemo}</p>
// // //         <p>{mmyMemo}</p>
// // //         <button onClick={() => setCount(count + 1)}>Update Count</button>
// // //         <button onClick={() => setData(data * 5)}>Update Data</button>
// // //       </div>
// // //     </>
// // //   );
// // // };


// // const Register = () => {
// //   const [show,setShow]=useState(false);
// //   const inputRef= useRef(null);

// //   const handleClick=(event)=>{
// //   event.preventDefault();

// //   const name=inputRef.current.value;
// //   name === ""? alert("please fill the form"): setShow(true);
// //   };
// //   return (
// //     <>
// //     <div>
// //       <label>Enter your data</label>
// //       <br/>
// //       <input type="text" ref={inputRef}/>
// //       <br/>
// //       <button onClick={handleClick}>Click Me</button>
// //       <br/>
// //       <p>{show? `your lucky number is :${inputRef.current.value}`:" "}</p>
// //     </div>
    
// //     </>
// //   )
// // }

// // export default Register;

// // import React, { useEffect, useState } from 'react';

// // const Register = () => {
// //   const [count,setCount]=useState(0);

// //   useEffect(()=>{
// //     console.log("useEffect Runs")
// //     const interval=setInterval(() => {
// //      setCount((prev)=>prev+1); 
// //     }, 1000);

// //     return ()=>{
// //       clearInterval(interval);
// //       console.log("cleaning the effect");
// //     }
// //  },[]);

// // return(
  

// //     <>
// //     <div>
// //       <h1>Count:{count}cleaning return function </h1>
// //     </div>
    
// //     </>
// //   )
// // }

// // export default Register

// import React, { useCallback, useState } from 'react';
// import Login from "./Login";

// const Register = () => {
//   const [count,setCount]=useState(0);
//   const [todos,setTodo]=useState([]);
//   const handleIncrement=()=>{
//     setCount(count+1);
//   }
//   const AddTodo=useCallback(
//     () => {
//       setTodo((prev)=>[...prev,'new Entry'])
//     },[todos]);
  

//   return (
//     <>
//     <div>
//       <Login todos={todos} AddTodo={AddTodo}/>
//       <h1>{count}</h1>
//       <button onClick={handleIncrement}>+</button>
//     </div>
    
//     </>
//   )
// }

// export default Register

import React,{useEffect,useState} from 'react';
import axios from 'axios';

const Register = () => {
  const [myData,setMyData]=useState([]);
  useEffect(()=>{
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>setMyData(res.data))
    .catch((error)=>console.log(error));


  },[])
  return (
    <>
    <div>

      {myData.map((curValue)=>{
        return(
          <div className='card' key={curValue.id}>
            <h1>{curValue.title}</h1>
            <p>{curValue.body}</p>
          </div>
        )
      })

      }
    </div>
    </>
  )
}

export default Register