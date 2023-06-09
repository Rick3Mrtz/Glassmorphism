import React from 'react';
import '../styles/Signup.css'
import Background from './Background';

function Signup() {
    return (
        <div>
        <div className='signup-screen'>
            
            
        <div class="signup-bg">
          <form>
            <h1>Sign Up Here</h1>

            <label for="name">Full Name</label>
            <input type="text" placeholder="Name"/>

            <label for="password">Email</label>
            <input type="password" placeholder="Email Address"/>

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

export default Signup;