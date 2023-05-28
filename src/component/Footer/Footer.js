import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
        <footer class="footer">
  <div class="copy">&copy; 2022 Developer</div>
  <div class="bottom-links">
    <div class="links">
      <span>More Info</span>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </div>
    <div class="links">
      <span>Social Links</span>
      <a href="#"><i class="fab fa-facebook"></i></a>
      <a href="#"><i class="fab fa-twitter"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer