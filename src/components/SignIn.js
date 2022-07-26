import React from 'react'

function SignIn() {
  return (
      <div class="logIn">
        <form >
          <span class = "closeBtn1">
            <i class = "fas fa-times"></i>
          </span>

          <div class="container2">
            <h1>Log In</h1>
          
      
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" id="email2" required/>
      
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" id="psw2" required/>
      
          
      
            <button type="submit" class="registerbtn">Log In</button>
          </div>
      
          <div class="container signin">
            <p>Don't have an account? <a href="#signUp" id="butt2">Sign Up</a>.</p>
          </div>
        </form>
      </div>
   


  )
}

export default SignIn