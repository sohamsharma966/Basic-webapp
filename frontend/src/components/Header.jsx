// we created this file to make buttons in heading which will take you to different path that is defined in app.js (14,15,16 line)
import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser} from "react-icons/fa"
import {Link} from "react-router-dom"

function Header() {
  return (
    <header className='header'>
      <div className="logo">
        <Link to="/">GoalSetter</Link>
      </div>
      <ul>
        <li>
          <Link to="/login"> {/* by clicking Login this will go to /login page that is defined in app.js */}
            <FaSignInAlt /> Login
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/register">
            <FaUser /> register
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header