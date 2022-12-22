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

// import React,{useEffect,useState} from 'react';
// import axios from 'axios';

// const Register = () => {
//   const [myData,setMyData]=useState([]);
//   useEffect(()=>{
//     axios
//     .get("https://jsonplaceholder.typicode.com/posts")
//     .then((res)=>setMyData(res.data))
//     .catch((error)=>console.log(error));

//   },[])
//   return (
//     <>
//     <div>

//       {myData.map((curValue)=>{
//         return(
//           <div classnameName='card' key={curValue.id}>
//             <h1>{curValue.title}</h1>
//             <p>{curValue.body}</p>
//           </div>
//         )
//       })

//       }
//     </div>
//     </>
//   )
// }

// export default Register

// import React from 'react'

// const Register = () => {
//   return (
//     <>
//     <div>
//     <section classname="vh-100 bg-image">
//   <div classname="mask d-flex align-items-center h-100 gradient-custom-3">
//     <div classname="container h-100">
//       <div classname="row d-flex justify-content-center align-items-center h-100">
//         <div classname="col-12 col-md-9 col-lg-7 col-xl-6">
//           <div classname="card">
//             <div classname="card-body p-5">
//               <h2 classname="text-uppercase text-center mb-5">Create an account</h2>

//               <form>

//                 <div classname="form-outline mb-4">
//                   <input type="text" id="form3Example1cg" classname="form-control form-control-lg" />
//                   <label classname="form-label" for="form3Example1cg">Your Name</label>
//                 </div>

//                 <div classname="form-outline mb-4">
//                   <input type="email" id="form3Example3cg" classname="form-control form-control-lg" />
//                   <label classname="form-label" for="form3Example3cg">Your Email</label>
//                 </div>

//                 <div classname="form-outline mb-4">
//                   <input type="password" id="form3Example4cg" classname="form-control form-control-lg" />
//                   <label classname="form-label" for="form3Example4cg">Password</label>
//                 </div>

//                 <div classname="form-outline mb-4">
//                   <input type="password" id="form3Example4cdg" classname="form-control form-control-lg" />
//                   <label classname="form-label" for="form3Example4cdg">Repeat your password</label>
//                 </div>

//                 <div classname="form-check d-flex justify-content-center mb-5">
//                   <input classname="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
//                 </div>

//                 <div classname="d-flex justify-content-center">
//                   <button type="button"
//                     classname="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
//                 </div>

//               </form>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//       </div></>
//   )
// }

// export default Register

import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from 'react-bootstrap/Spinner';

const Register = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const[isLoading,setIsLoading]=useState(false);

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    e.preventDefault();
    setAvatar(e.target.files[0]);
  };
  const validForm = () => {
    let newErrors = {};
    if (!fullName) {
      newErrors.fullName = "fullname is required";
    }

    if (!email) {
      newErrors.email = "email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      newErrors.email = "invalid Email";
    }
    if (!mobile) {
      newErrors.mobile = "mobile is required";
    } else if (mobile.length !== 10) {
      newErrors.mobile = "Mobile number must be of 10";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 10) {
      newErrors.password = "password must be 10 character";
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (confirmPassword.length < 10) {
      newErrors.confirmPassword = "Confirm Password must be 10 character";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "password doesnot match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "multiport/form-data",
      },
    };
    const registerData = new FormData();
    registerData.append("fullName", fullName);
    registerData.append("email", email);
    registerData.append("mobile", mobile);
    registerData.append("password", password);
    registerData.append("confirmPassword", confirmPassword);
    registerData.append("avatar", avatar);

    if (validForm()) {
      try {
        setIsLoading(true);
        const res = await axios.post(
          "http://localhost:5000/api/register",
          registerData,
          config
        );
        if (res.data.success===true){
        toast.success(res.data.message);
        navigate("/login");
        setInterval(()=>{navigate("/login")},2000)
        }
      } catch (error) {
        const msg= await error.response.data.message;
        setIsLoading(false);
        setErrors("");
        toast.error(msg);
      }
    } else {
      return toast.error("Invalid Form");
    }
  };

  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration">
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                    Registration Form
                  </h3>
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            name="fullName"
                            className="form-control form-control-lg"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                          />
                          {errors.fullName && <span style={{color:"red"}}>{errors.fullName}</span>}
                          <label className="form-label" for="fullName">
                            Full Name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            name="Email"
                            className="form-control form-control-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          {errors.email && <span style={{color:"red"}}>{errors.email}</span>}
                          <label className="form-label" for="Email">
                            Email
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          name="mobileNumber"
                          className="form-control form-control-lg"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                        />
                        {errors.mobile && <span style={{color:"red"}}>{errors.mobile}</span>}
                        <label className="form-label" for="mobileNumber">
                          Mobile Number
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="password"
                            name="password"
                            className="form-control form-control-lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          {errors.password && <span style={{color:"red"}}>{errors.password}</span>}
                          <label className="form-label" for="password">
                            Password
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="password"
                            name="confirmPassword"
                            className="form-control form-control-lg"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                          />
                          {errors.confirmPassword && <span style={{color:"red"}}>{errors.confirmPassword}</span>}
                          <label className="form-label" for="confirmPassword">
                            Confirm Password
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <input
                          type="file"
                          name="avatar"
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="mt-4 pt-2">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Submit"
                        onClick={handleSubmit}
                      />
                      {isLoading &&<Spinner animation="border" size="sm"/>}
                    </div>
                  </form>
                  <p>
                    Already have a account?
                    <NavLink to="/login">Login</NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
