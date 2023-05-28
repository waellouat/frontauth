import React,{useState} from 'react'
import './Login.css'
import { useNavigate } from 'react-router'
import axios from 'axios'


const Login = () => {

  let nnavigate=useNavigate()
 
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

//

const handelLogin=async(values)=>{

  try{
const res =await axios.post('http://localhost:5002/auth/user/signin',values)
  await localStorage.setItem('token',res.data.token)
  //if uer role = admin navigate interface admin 
  
nnavigate('/app/private')
}catch(err){
console.log(err,'errlogin')
  }
}



  return (
    <div>
      <div class="container">
	<div class="screen">
		<div class="screen__content">
			<form class="login">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder=" Email"  value={email} onChange={(e)=>setEmail(e.target.value)} />
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
				</div>
				<button class="button login__submit"  type="button" onClick={()=>handelLogin({email,password})} >
					<span class="button__text">Log In Now</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>
        <button class="button login__submit">
					<span class="button__text" type="button">Register</span>
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

export default Login