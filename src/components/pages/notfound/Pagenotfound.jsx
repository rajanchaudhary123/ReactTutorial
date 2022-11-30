import React from 'react'
import { NavLink } from 'react-router-dom'

const Pagenotfound = () => {
  return (
    <div className='notfound'><h1>OOPSSS Page Not Found </h1>
    <NavLink to="./"><button> GO BACK</button></NavLink>

    </div>
  )
}

export default Pagenotfound