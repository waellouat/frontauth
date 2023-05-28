import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        <header class="header">
  <a  class="logo"><img src="https://th.bing.com/th/id/OIP.aQlQ0rNfBo28R3Qt8RzyFQHaH_?pid=ImgDet&rs=1" alt="Rental Logo" width="50" height="50"/>CAR RENTAL </a>
  <nav class="nav-items">
    <a ><Link to={'/Home'} >Home</Link></a>
    <a ><Link to={'/AboutUs'}>About</Link></a>
    <a ><Link to={'/CarList'}>car List</Link></a>
    <a ><Link to={'/CarDetails'}>car details</Link></a>
    <a ><Link to={'/Booking'}>Booking </Link></a>

  </nav>
</header>

    </div>
  )
}

export default Header