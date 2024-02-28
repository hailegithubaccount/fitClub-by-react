import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png';


const Header = () => {
  
  return (
    <div className='header'>
        <img  className="logo" src={logo} alt=""/>
      <ul className='header-list'>
        <li>Home</li>
        <li>programs</li>
        <li>why use</li>
        <li>plans</li>
        <li>testimonials</li>

      </ul>
      <button className='displat'>click here</button>
    </div>
  )
}

export default Header
