import React from 'react'
import './CarList.css'
import { Link } from 'react-router-dom'
const CarList = () => {
  return (
    <div>
        <head>
	<title>Rextree Car Rental | Vehicle Types</title>
</head>
<body>
	<h1>
		<a href="Home.html"><img src="https://th.bing.com/th/id/OIP.aQlQ0rNfBo28R3Qt8RzyFQHaH_?pid=ImgDet&rs=1" alt="Rental Logo" width="50" height="50"/></a> Our Vehicle Types
	</h1>
	<nav>
	<a ><Link to={'/Home'} >Home</Link></a> 
    <a ><Link to={'/AboutUs'}>About</Link></a> 
    <a ><Link to={'/CarList'}>car List</Link></a> 
    <a ><Link to={'/CarDetails'}>car details</Link></a> 
    <a ><Link to={'/Booking'}>Booking </Link></a> 

	</nav>
	<br />
	<hr />
	<br />
	<nav>
		<ol>
			<li><a href="#small_vehicle">Small Vehicle</a></li>
			<li><a href="#medium_vehicle">Medium Vehicle</a></li>
			<li><a href="#large_vehicle">Large Vehicle</a></li>
		</ol>
	</nav>
	<h2>Small Vehicle</h2>
		<div class="small_vehicle">
		<img src="https://th.bing.com/th/id/OIP._Ual_RHyq5TO2-nzTdqdegHaEK?pid=ImgDet&rs=1" style={{float: "left"}} alt="small_vehicle_manual" width="220" height="120"/>
		<div class="small-vehicle-section-polo">
		<sub>
			Volkswagen Polo
		</sub>
		<ul>
			<li>5 Doors</li>
			<li>Manual</li>
			<li>CD Player</li>
			<li>Air Conditioning</li>
			<li>Daily Rate: $30</li>
			<li><a href="http://www.volkswagen.co.nz/new-cars/polo/">For More Information</a></li>
		</ul>
		</div>
		<br />
		<br />
		<div class="small-vehicle-section-barina">
		<img src="https://th.bing.com/th/id/R.ebc604fd394bcd0d18c5269637ee0838?rik=NiUeeQ1gZSv1Fw&pid=ImgRaw&r=0" style={{float: "left"}} alt="small_vehicle_auto" width="220" height="120"/>
		<sub>
			Holden Barina
		</sub>
		<ul>
			<li>5 Doors</li>
			<li>Automatic</li>
			<li>CD Player</li>
			<li>Air Conditioning</li>
			<li>Daily Rate: $35</li>
			<li><a href="http://www.holden.co.nz/cars/barina">For More Information</a></li>
		</ul>
		</div>
		</div>
	<br />
	<br />
		
	<h2>Medium Vehicle</h2>
		<div class="medium_vehicle">
		<img src="https://th.bing.com/th/id/OIP.JpPy6R3c8z95z3F3Y1D1QwHaEK?pid=ImgDet&rs=1" style={{float: "left"}} alt="medium_vehicle" width="220" height="120"/>
		<sub>
			Holden Malibu
		</sub>
		<ul>
			<li>4 Doors</li>
			<li>Automatic</li>
			<li>MP3 Player</li>
			<li>Auto Air Conditioning</li>
			<li>Daily Rate: $50</li>
			<li><a href="http://www.holden.co.nz/cars/malibu">For More Information</a></li>
		</ul>
	<br />
	<br />
	</div>
		
	<h2>Large Vehicle</h2>
		<div class="large_vehicle">
		<img src="https://th.bing.com/th/id/R.62c45c340d00e04a55d79a2c641c8b40?rik=8%2fUbH8md47pv2g&pid=ImgRaw&r=0"style={{float: "left"}} alt="large_vehicle" width="220" height="120" />
		<sub>
			Holden Commodore
		</sub>
		<ul>
			<li>4 Doors</li>
			<li>Automatic</li>
			<li>Navigation System</li>
			<li>Auto Air Conditioning</li>
			<li>Huge Power</li>
			<li>Daily Rate: $60</li>
			<li><a href="http://www.holden.co.nz/cars/commodore">For More Information</a></li>
		</ul>
		</div>
</body>
    </div>
  )
}

export default CarList