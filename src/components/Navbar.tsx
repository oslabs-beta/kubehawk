import React from 'react'
import logo from './assets/logo.png'
import NavbarProps from '../types.ts'

function Navbar(props: NavbarProps) {

  const kubeButton = props.kubeButton || '';

  return (
    <div className='navbar'>
      <div className='logo'>
    <img id='logo' src={logo} alt="logo"/> 
    <p>KubeHawk</p>
      </div>
      <div id='left-nav'>
        {kubeButton}
       <ul>
      {props.navItems}
      </ul>
        </div>
    </div>

  )
}

export default Navbar