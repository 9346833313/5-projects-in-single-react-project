import React from 'react'
import {Link} from "react-router-dom"
import "./nav.css"

export default function Nav() {
  return (
    <div>
      <nav className='nav'>
        <div className='nav-container'>
          <Link to="/"> Home </Link>
          <Link to="/login">Login</Link>  
          <Link to="/crypto"> Cryptcurrency API </Link>
          <Link to="/Covid">Covid api</Link>
          <Link to="/Nasa">Nasa api</Link>
          
        </div>
      </nav>
            
    </div>
  )
}
