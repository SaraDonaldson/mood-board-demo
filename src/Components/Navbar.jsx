import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className='logo-container'>
       <img src="./creativemoods.png" alt="cloud site logo"/>
        <div className="logo">
          Creative Moods
        </div>
        </div>

        <div className="menu-icon" onClick={handleShowNavbar}>
          ▲
         </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">New Moodboard</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Dashboard</NavLink>
            </li>
            {/* <li>
              <NavLink to="/blog">Blog</NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/contact">Contact</NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar