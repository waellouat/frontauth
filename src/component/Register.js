import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router'
import {postauthRegister} from '../api/auth'
const Register = () => {
  let navigate=useNavigate()
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [role,setRole]=useState('')
  const [password,setPassword]=useState('')

const handelAdd=async(values)=>{
await postauthRegister(values)
navigate('/login')
console.log(values)
}


  return (
    <div>
         <div class="container">
	<div class="screen">
		<div class="screen__content">
			<form class="login">
      <div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="User name " value={name} onChange={(e)=>setName(e.target.value)} />
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder=" Email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder=" Role"  value={role} onChange={(e)=>setRole(e.target.value)}/>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
				</div>
				<button class="button login__submit" type='button' onClick={()=>handelAdd({name,email,password,role})}  >
					<span class="button__text">Register</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>
        <button class="button login__submit" type='button' onClick={()=>navigate('/login')} >
					<span class="button__text"  >login</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>						
			</form>
			<div class="social-login">
				<h3>log in via</h3>
				<div class="social-icons">
					<a href="#" class="social-login__icon fab fa-instagram"></a>
					<a href="#" class="social-login__icon fab fa-facebook"></a>
					<a href="#" class="social-login__icon fab fa-twitter"></a>
				</div>
			</div>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
    </div>
  )
}

export default Register