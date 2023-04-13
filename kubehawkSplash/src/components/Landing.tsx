import React from 'react'
import Navbar from './Navbar'
import loginImg from './assets/login_4.png'
import LandCopy from './LandCopy'
import GetKlusterInfo from './GetKlusterInfo'
import { Login } from './Login'

function Landing() {
  const navItems = ['Login', 'help'].map((item, i)=>{
    return <li key={item + i}>{item}</li>;
  })

  return (
    <div className='landing' >
            <Navbar navItems={navItems} kubeButton = {<button>Get KubeHawk</button>}/>
          <div id="landing-login">
            <LandCopy />
            <div id='login-image'>
              <img src={loginImg} alt="security_login" />
            </div>
            </div>
    </div>
  )
}

export default Landing