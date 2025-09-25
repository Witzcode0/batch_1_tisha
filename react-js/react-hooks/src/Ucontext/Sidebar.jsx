import React from 'react'
import Profile from './Profile'

function Sidebar() {
    return (
        <div style={{ backgroundColor: 'orange', color: 'white', padding: "10px" }}>
            <h1>Sidebar</h1>
            <Profile />
        </div>
    )
}

export default Sidebar