import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { PostCar } from '../../api/auth'

const AdminCompo = () => {
  let navigate=useNavigate()
  const [carName,setCarName]=useState('')


const handelAdd=async(values)=>{
await PostCar(values)
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
     <input type="text" class="login__input" placeholder="Car name " value={carName} onChange={(e)=>setCarName(e.target.value)} />
   </div>
   
   <button class="button login__submit" type='button' onClick={()=>handelAdd({carName})}  >
     <span class="button__text">Register car</span>
     <i class="button__icon fas fa-chevron-right"></i>
   </button>
   			
 </form>
 
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

export default AdminCompo