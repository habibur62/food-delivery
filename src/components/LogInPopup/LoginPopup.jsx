import React, { useState } from 'react'
import './LoginPopup.css'
export default function LoginPopup({setShowLogin}) {

    const [currState, setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className="login-popup-title">
              <h2>{currState}</h2>
                <p onClick={()=> setShowLogin(false)}>X</p>
            </div>
            <div className="login-popup-inputs">
                {currState ==="Login"?<></>:<input type="text" name='name' placeholder='your name...' required/>    
                }
                <input type="email" placeholder='your email...' />
                <input type="password" placeholder='password' required />
                <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, I aggree the terms & conditions</p>
                </div>
            </div>
            
            <button type='submit'>{currState === "Login"?"Log In": "Create an account"}</button>

            {   currState==="Login"?<p >Ceate a new account ?<span onClick={()=>{setCurrState("Sign Up")}}>Click Here</span></p>:   
             <p>Already have an account? <span  onClick={()=>{setCurrState("Login")}}>Log In</span></p>

            }
        </form>
        </div>
  )
}
