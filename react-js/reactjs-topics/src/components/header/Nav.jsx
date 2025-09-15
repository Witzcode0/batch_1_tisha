import React from 'react'
import './Nav.css';

function Nav() {
  return (
    <>
    <div id="header">
        <div className="logo">
            <img src="https://cdn-icons-png.flaticon.com/512/3871/3871911.png" alt="" />
        </div>
        <div className="menus">
            <ul>
                <li>Home</li>
                <li>Musics</li>
                <li>Playlist</li>
                <li>Favorite music</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Nav;