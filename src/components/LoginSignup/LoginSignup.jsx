import React, { useState } from 'react'

 
 import './LoginSignup.css'

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import { Link } from 'react-router-dom'


const LoginSignup = () => {
const [action,setAction] = useState("Login");

  return (
<div className='login1'>
<div className='containerL'>
      <div className="headerL">
        <div className="textL">{action}</div>
        <div className="underlineL"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder='Name'/>
        </div>}
        

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='Email Id'/>
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Password'/>
        </div>
      </div>

      {action==="Sign Up"?<div></div>:<div className="forget-password">Lost Password? <span>Click Here!</span></div>}
      
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}> Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        
      </div>
      <div className='sub'>
      <Link to='/home'>Submit</Link>
      </div> 
     
     
    </div>

</div>
    

  )
}


export default LoginSignup
