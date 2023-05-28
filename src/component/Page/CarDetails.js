import React from 'react'
import './CarDetails.css'
import { Link } from 'react-router-dom'
const CarDetails = () => {
  return (
    <div>
        <head>
	<title>Rextree Car Rental | Rental Rates</title>
	<link href="Rental Rates.css" rel="stylesheet" type="text/css" />
</head>
<body>
	<h1>
		<a href="Home.html"><img src="https://cdn4.vectorstock.com/i/1000x1000/85/98/logo-for-car-rental-and-sales-vector-25468598.jpg" alt="Rental Logo" width="50" height="50"/></a> Rental Rates
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
	<h2>
		Following table is our rate rates<br />
		We will provide huge discount on long term rental
	</h2>
	<br />
	<table width="1000px" height="250px" border="0.5">
		<tr>
			<td>Vehicle Type</td>
			<td>Transmission</td>
			<td>1-Day-Rate</td>
			<td>5-Day-Rate</td>
		</tr>
		<tr>
			<td>Small-VW Polo</td>
			<td>Manual</td>
			<td>$30</td>
			<td>$120</td>
		</tr>
		<tr>
			<td>Small-Holden Barina</td>
			<td>Automatic</td>
			<td>$35</td>
			<td>$140</td>
		</tr>
		<tr>
			<td>Medium-Holden Malibu</td>
			<td>Automatic</td>
			<td>$50</td>
			<td>$220</td>
		</tr>
		<tr>
			<td>Large-Holden Commordore</td>
			<td>Automatic</td>
			<td>$60</td>
			<td>$270</td>
		</tr>
	</table>
</body>
    </div>
  )
}

export default CarDetails