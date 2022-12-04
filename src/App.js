import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Contact from "./components/pages/contact/Contact";
import Pagenotfound from "./components/pages/notfound/Pagenotfound";
import Login from "./components/pages/user/Login";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import SchoolForm from './components/schoolform/schoolForm'
// import { Component } from "react";
// import Form from "./components/form/Form";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<ProtectedRoute Component={Home} />} />
          <Route path="/about" element={<ProtectedRoute Component={About} />} />
          <Route path="/contact" element={<ProtectedRoute Component={Contact} />} />
          <Route path="/schoolform" element={<SchoolForm/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<Pagenotfound />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
