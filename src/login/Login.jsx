import React from 'react'
import './login.css'
import { loginURL } from '../Utils/spotify'


function Login() {
  return (
    <div className='login'>
        <h1>Welcome to this APP - if you haven't access this site before you will require 2 accounts (Spotify account and an account to access this site) </h1>
        <a href={loginURL}>LOGIN</a>
        
      
    </div>
  )
}

export default Login
