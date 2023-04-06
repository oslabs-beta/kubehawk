import React from "react";
import { useNavigate } from "react-router-dom";


  
export function Login() {
    const navigate = useNavigate()

    function handleLoginClick(){
      navigate('/cluster')
    }
    return (
      <div className="onboard-page">
      <div className="base-container" >
        <div className="header">Login</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={handleLoginClick}>
            Login
          </button>
        </div>
      </div>
      </div>
    );
  }
