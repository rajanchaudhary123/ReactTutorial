import React from "react";
import { NavLink } from "react-router-dom";
import Error from "../../../images/error.PNG";

const Pagenotfound = () => {
  return (
    <div className="notfound">
      <img src={Error} alt="page not found"/><br/>
      <NavLink to="./">
        <button> GO BACK</button>
      </NavLink>
    </div>
  );
};

export default Pagenotfound;
