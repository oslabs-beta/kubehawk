import React from 'react'
import Navbar from './Navbar'
import loginImg from './assets/login_4.png'
import LandCopy from './LandCopy'
import GetKlusterInfo from './GetKlusterInfo'
import { Login } from './Login'

function Landing() {
  return (
    <div className='landing'>
            <Navbar />
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