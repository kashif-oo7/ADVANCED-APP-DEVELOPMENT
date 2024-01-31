import React, { useState } from 'react'
import "../css/Login.css"
import { Link } from 'react-router-dom'

const Login = () => {
  const [popupStyle, showPopup] = useState("hide")
  const popup = () =>{
    showPopup("login-popup")
    setTimeout(() => showPopup("hide"), 3000)
  }
  return (
    <div className='con'>
    <div className="cover">
    <h1 className='login-color'>Login</h1>
    <input type="text" placeholder="username"/>
    <input type="password" placeholder="password"/>
    
    <Link to="/"><div className="login-btn" onClick={popup}>Login</div></Link>
    <p className='text'>Create New Account</p>
    <div className="alt-login">

    <div className="google"></div>
    </div>
    <div className={popupStyle}>
    <h3>Login Failed</h3>
    <p>Username or password incorrect</p>
    </div>
    </div>
    </div>
  )
}

export default Login
