import React from 'react'
//import { useNavigate } from 'react-router-dom'

 const Login = (props) => {
//   useEffect(()=>{
//     alert(`Count Number is: ${props.count}`)
//   },[props.count]);

    // const navigate= useNavigate();
    // const [email,setEmail]=useState("");
    // const handleLogin=()=>{
        
    //     localStorage.setItem("login",true);
    //     navigate("/");
    // }
    // useEffect(()=>{
    //     let login=localStorage.getItem('login');
    //     if (login){
    //         navigate("/");
    //     }
    // },[navigate]);
  return (
    <>
    {/* <div><h1> My Login Page</h1>
    <input type="text" placeholder="enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
    <input type="text" placeholder="enter the password"/><br/>
    <button onClick={handleLogin}>Login</button>
    </div>
    <h1>value:{email}</h1> */}

    <div>
      <h1>Count:{props.count}</h1>
            {/* <h1>Data:{props.data}</h1> */}
    </div>
    </>
  )
}

export default Login