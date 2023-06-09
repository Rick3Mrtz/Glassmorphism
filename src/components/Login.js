import React from 'react';
import Background from './Background';
import '../styles/Login.css'

function Login() {
    return (
        <div>
        <div className='login-screen'>
            
            
        <div class="form-bg">
          <form>
            <h1>Login Here</h1>

            <label for="username">Username</label>
            <input type="text" placeholder="Username or Phone"/>

            <label for="password">Password</label>
            <input type="password" placeholder="Password"/>

            <button type="submit">Log In</button>
          </form>
        </div>
        
      </div>
      <Background />
      </div>
    )
}

export default Login;