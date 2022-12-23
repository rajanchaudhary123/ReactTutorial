import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Contact from "./components/pages/contact/Contact";
import Pagenotfound from "./components/pages/notfound/Pagenotfound";
import Login from "./components/pages/user/Login";
import SchoolForm from './components/schoolform/schoolForm';
import Service from "./components/pages/Services/service";
import Register from "./components/pages/user/Register";
import { ToastContainer } from 'react-toastify';
import Profile from "./components/pages/Profile/Profile";
// import { Component } from "react";
// import Form from "./components/form/Form";


function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer/>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/services" element={<Service/>} />
          <Route path="/schoolform" element={<SchoolForm/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="*" element={<Pagenotfound />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
