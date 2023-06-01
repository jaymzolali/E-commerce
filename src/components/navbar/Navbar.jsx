import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <Section1 />
        <Section2 />
    </div>
  )
}

export default Navbar;