import React from 'react'
import { Link } from 'react-router-dom' 
import './NavbarContainer.css'
const NavbarContainer = ({authinf,logout}) => {
  return (
    <div><ul>
<li style={{color:'white'}}>{authinf.name}</li>
  <li> <a className='active'  > <Link to={'/'} >register</Link>  </a></li>
  <li> <a> <Link to={'/app/private'} >home</Link></a></li>
  <li> <a> <Link to={'/login'} >login</Link></a></li>
 

  </ul>
  
  <button onClick={()=>logout()} >logout</button>
  
  </div>
  )
}

export default NavbarContainer