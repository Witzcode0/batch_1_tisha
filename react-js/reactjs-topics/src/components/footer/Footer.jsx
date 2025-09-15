import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        {/* Logo + About */}
        <div className="footer-section">
          <div className="footer-logo">
            <img src="https://cdn-icons-png.flaticon.com/512/3871/3871911.png" alt="logo" />
          </div>
          <p className="footer-about">
            MyMusic is your ultimate music hub. Discover playlists, 
            favorite tracks, and connect with the beats you love.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Musics</li>
            <li>Playlist</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@mymusic.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Mumbai, India</p>

          <div className="footer-socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      <hr />

      {/* Bottom Copy */}
      <div className="footer-bottom">
        <p>© 2025 MyMusic. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
