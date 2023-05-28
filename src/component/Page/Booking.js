import React from 'react';
import './Booking.css';
import { Link } from 'react-router-dom';
const Booking = () => {
  return (
    <div>
        <head>
	<title>Rextree Car Rental | Booking</title>
	
</head>
<body>
	<h1>
		<a href="Home.html"><img src="https://th.bing.com/th/id/OIP.aQlQ0rNfBo28R3Qt8RzyFQHaH_?pid=ImgDet&rs=1" alt="Rental Logo" width="50" height="50"/></a> Your Booking
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
	<form action="" method="get">
		<fieldset>
			<legend>Personal Details</legend>
			<br />
			<label for="given_name_field">Given Name:</label>
			<input id="given_name_field" type="text" name="given_name_value" placeholder="Your Given Name" />
			<br />
			<br />
			<label for="family_name_field">Family Name:</label>
			<input id="family_name_field" type="text" name="family_name_value" placeholder="Your Family Name"/>
			<br />
			<br />
			<label for="email_address">Your Email Address:</label>
			<input id="email_address_field" type="text" name="email_value" placeholder="Your Email Address"/>
			<br />
			<br />
			<label for="phone_number_field">Your Phone Number:</label>
			<input id="phone_number_field" type="text" name="phone_number_value" placeholder="Your Phone Number"/>
			<br />
			<br />
			<label for="address_line1_field">Address Line 1:</label>
			<input id="address_line1_field" type="text" name="address_line1_value" placeholder="Unit/No. Street Name" />
			<br />
			<br />
			<label for="address_line2_field">Address Line 2:</label>
			<input id="address_line2_field" type="text" name="address_line2_value" placeholder="Suburb" />
			<br />
			<br />
			<label for="address_line3_field">City/Town:</label>
			<input id="address_line3_field" type="text" name="address_line3_value" placeholder="Your City or Town" />
			<br />
			<br />
			<label for="country_field">Country</label>
			<select id="country_field" name="country_value">
				<option value="au">Australia</option>
				<option value="nz">New Zealand</option>
				<option value="us">United State</option>
				<option value="uk">United Kingdom</option>
				<option value="ca">Canada</option>
				<option value="cn">China</option>
				<option value="jp">Japan</option>
				<option value="fr">France</option>
				<option value="ge">Germany</option>
				<option value="other">Other</option>
			</select>
			<br />
			<br />
			<label for="age_field">Your Age Range</label>
			<select id="age_field" name="age_value">
				<option value="18-25">18-25</option>
				<option value="26-35">26-35</option>
				<option value="36-50">36-50</option>
				<option value="51-65">51-65</option>
				<option value="over65">Over 65</option>
			</select>
 		</fieldset>
 		<br />
 		<fieldset>
 			<legend>Preferred Vehicle Types</legend>
 			<input type="radio" name="preferred_vehicle_types" value="small" />Small<br />
 			<input type="radio" name="preferred_vehicle_types" value="medium" />Medium<br />
 			<input type="radio" name="preferred_vehicle_types" value="large" />Large
 		</fieldset>
 		<br />
 		<fieldset/>
 			<legend>Please Choose Your Rental Period</legend>
 			Start Date: <input type="date" name="start_date"/>
 			<br />
 			<br />
 			End Date: <input type="date" name="end_date"/>
 			</form>
 		<fieldset/>
	<form/>
</body>
    </div>
  )
}

export default Booking