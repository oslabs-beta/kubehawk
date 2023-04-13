import LandCopy from "./LandCopy";
import Navbar from "./navbar";



function Landing() {
  const navItems = ['Login', 'help'].map((item, i)=>{
    return <li key={item + i}>{item}</li>;
  })

  return (
    <div className='landing' >
            <Navbar />
          <div id="landing-login">
          <LandCopy />
            <div id='login-image'>
              {/* <img src={loginImg} alt="security_login" /> */}
            </div>
            </div>
    </div>
  )
}

export default Landing