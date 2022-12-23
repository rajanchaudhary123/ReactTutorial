// import React from 'react'
// //import { useNavigate } from 'react-router-dom'

//  const Login = (props) => {
// //   useEffect(()=>{
// //     alert(`Count Number is: ${props.count}`)
// //   },[props.count]);

//     // const navigate= useNavigate();
//     // const [email,setEmail]=useState("");
//     // const handleLogin=()=>{
        
//     //     localStorage.setItem("login",true);
//     //     navigate("/");
//     // }
//     // useEffect(()=>{
//     //     let login=localStorage.getItem('login');
//     //     if (login){
//     //         navigate("/");
//     //     }
//     // },[navigate]);
//   return (
//     <>
//     {/* <div><h1> My Login Page</h1>
//     <input type="text" placeholder="enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
//     <input type="text" placeholder="enter the password"/><br/>
//     <button onClick={handleLogin}>Login</button>
//     </div>
//     <h1>value:{email}</h1> */}

//     <div>
//       <h1>Count:{props.count}</h1>
//             {/* <h1>Data:{props.data}</h1> */}
//     </div>
//     </>
//   )
// }

// export default Login

// import React,{memo} from 'react';

// const Login = ({todos,AddTodo}) => {
//   console.log("runs Vhalyoooo")
//   return (
//     <>
//     <div><h2>Add to do</h2>
//     {todos.map((curValue,index)=>{

//       return <p key={index}>{curValue+index}</p>
//     })}
//     </div>
//     <button onClick={AddTodo}>Add Todo</button>
//     </>
//   )
// }

// export default memo(Login)

 import { NavLink, useNavigate } from 'react-router-dom';
 import axios from "axios";
 import React, { useState } from "react";
 import { toast } from "react-toastify";


 const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors,setErrors] = useState({});

  const validForm = () =>{
    let newErrors = {};
    if(!email){
      newErrors.email="Email is required";
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
      newErrors.email = "Email is invalid"
    }
    if(!password){
      newErrors.password = "Password is required";
    }
    else if(password.length < 10){
      newErrors.password = "Password must be more than 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;

  }

  const handleSubmit = async (e)=>{
        e.preventDefault();
    
      
        if(validForm()){
          try {

            var res = await axios.post(
              "http://localhost:5000/api/login",
              {email,
              password}
              
            );
            if(res.data.success===true){
              toast.success(res.data.message);
              localStorage.setItem("token",res.data.token)
              setInterval(()=>{
                navigate("/profile");
              },2000)
            }
          
            toast.success(res.data.message);
            
          } catch (error) {
            const msg = await error.response.data.message;
            toast.error(msg)
          }
        }
    
        
        
      }
  return (
    
    <>
    <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration">
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                    SIgn In Form
                  </h3>
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            name="Email"
                             value={email}
                            className="form-control form-control-lg"
                              onChange={(e) => setEmail(e.target.value)}
                          />
                          <span style={{color:"red"}}>{errors.email}</span>
                          <label className="form-label" for="Email">
                            Email
                          </label>
                        </div>
                      </div>
                    </div>
                   
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="password"
                            name="password"
                            value={password}
                            className="form-control form-control-lg"
                            onChange={(e) => setPassword(e.target.value)}

                          />
                          <span style={{color:"red"}}>{errors.password}</span>
                          <label className="form-label" for="password">
                            Password
                          </label>
                        </div>
                      </div>
                    </div>


                    <div className="mt-4 pt-2">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Login"
                        onClick={handleSubmit}
                      />
                    </div>
                    
                  </form>
                  <p style={{marginTop:"50px"}}>Not have an account <NavLink to="/register" style={{textDecoration:"none"}}>Click Here</NavLink></p>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </section>
    </>
  )
}

export default Login

