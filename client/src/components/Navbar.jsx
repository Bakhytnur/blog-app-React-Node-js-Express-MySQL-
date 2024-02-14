import React from 'react'
import Logo from '../img/logo.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'>
                <img className='logo-img' src={Logo} alt="" />
            </div>
            <div className='links'>
                <Link />
            </div>
        </div>
    </div>
  )
}

export default Navbar