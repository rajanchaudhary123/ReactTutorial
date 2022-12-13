import React, { useRef, useState } from "react";
//import Login from './Login';

// const Register = () => {
//   const [count, setCount] = useState(0);
//   const [data, setData] = useState(10);

//   // const myMemo = useMemo(() => {
//   //   return count * 5;
//   // }, [count]);

//   // const mmyMemo = useMemo(() => {
//   //   return count / 2;
//   // }, [count]);
//   // return (
//     <>
//       <div>
//         {/* <Login count={count}/> */}
//         <h1>Count:{count}</h1>
//         <h1>Data:{data}</h1>
//         <p>{myMemo}</p>
//         <p>{mmyMemo}</p>
//         <button onClick={() => setCount(count + 1)}>Update Count</button>
//         <button onClick={() => setData(data * 5)}>Update Data</button>
//       </div>
//     </>
//   );
// };


const Register = () => {
  const [show,setShow]=useState(false);
  const inputRef= useRef(null);

  const handleClick=(event)=>{
  event.preventDefault();

  const name=inputRef.current.value;
  name === ""? alert("please fill the form"): setShow(true);
  };
  return (
    <>
    <div>
      <label>Enter your data</label>
      <br/>
      <input type="text" ref={inputRef}/>
      <br/>
      <button onClick={handleClick}>Click Me</button>
      <br/>
      <p>{show? `your lucky number is :${inputRef.current.value}`:" "}</p>
    </div>
    
    </>
  )
}

export default Register;
