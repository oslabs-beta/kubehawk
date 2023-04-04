import React from 'react'
import logo from './assets/logo.png'
import menu from './assets/menu.png'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
    <img id='logo' src={logo} alt="logo"/> 
    <p>KubeHawk</p>
      </div>
      <div id='left-nav'>
<button>Get KubeHawk</button>
       <ul>
        <li>Login</li>
        <li>Help</li>
      </ul>
        </div>
    </div>

  )
}

export default Navbar