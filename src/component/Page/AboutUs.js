import React from 'react' ;
import './AboutUs.css' ;
import { Link } from 'react-router-dom';
const AboutUs = () => {
  return (
    <div>
        <head>
	<title>Rextree Car Rental | About Us</title>
	<link href="About Us.css" rel="stylesheet" type="text/css" />
</head>
<body>
    
	<h1>
		<a href="Home.html"><img src="https://th.bing.com/th/id/OIP.aQlQ0rNfBo28R3Qt8RzyFQHaH_?pid=ImgDet&rs=1" alt="Rental Logo" width="50" height="50"/></a> About Us
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
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo urna, sollicitudin a sapien vel, vehicula consequat felis. Mauris convallis, est ac ornare placerat, libero elit sollicitudin lorem, non tempus augue justo ut enim. Nam at egestas dolor. Donec tempus pellentesque ipsum vitae rhoncus. Proin lorem mi, faucibus non diam eget, accumsan suscipit nisl. Nam semper odio a sagittis interdum. Vivamus adipiscing et nulla non posuere. 
		Praesent tempor molestie neque sit amet rutrum. Praesent pellentesque sodales risus nec cursus. Donec gravida est mollis convallis consectetur.
	</p>
	
	<h2>
		Contact Details
	</h2>
	<p>
		Phone Number: +64 7 123 456
		<br />
		Address: 181 Ruak Road, Town, City, NZ, 3216
		<br />
		Email Address: rextree@carrental.co.nz
		<br />
		Opening Hours: 10am - 6pm 7days
	</p>
	
	<h2>
		Our Location
	</h2>
	
</body>
    </div>
  )
}

export default AboutUs