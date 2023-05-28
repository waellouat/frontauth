import React, { useEffect } from 'react'
import NavbarContainer from './NavbarContainer'
import { useNavigate } from 'react-router'
// partie redux
import {useDispatch,useSelector} from 'react-redux'
import AdminCompo from './Admin/AdminCompo'
import UserCompo from './User/UserCompo'
// db li redux
import {fetchAccount} from '../api/auth'
import {setauth} from '../store/authSlice'
import Login from './Login'

const PrivetRoute = () => {
  // partie jiben data mil redux 
const auth =useSelector(state=>state.authuser)
console.log('auth',auth)

const dispatch=useDispatch()
// partie navigation
const navigation=useNavigate()

//parite jiben data mil db li redux
const getAuth=async()=>{
  const data= await fetchAccount()
  console.log('data',data)
  dispatch(setauth(data))
}

useEffect(()=>{
  getAuth()
},[])

const token= localStorage.getItem('token')
console.log('tkoen',token)

// logout
const logout=()=>{
  localStorage.removeItem('token')
  navigation('/login')
}



  return (
    <div>
     <div>
    
      {
       token ? (<>
       
       <NavbarContainer authinf={auth} logout={logout}   />
       
       {
        auth.role === "user" ? (<UserCompo/>) : (<AdminCompo/>)
       }
       
       </>) : (<Login/>)
      }
     </div>
     
    </div>
  )
}
 
export default PrivetRoute