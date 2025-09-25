import React, { useContext } from 'react'
import userContext from './UContext'

function Profile() {
  const user = useContext(userContext)
  return (
    <div style={{ backgroundColor: 'red', color: 'white', padding: "10px" }}>
      <h1>Profile</h1>
      <h4><strong>Name: </strong> {user.name}</h4>
      <h4><strong>Role: </strong> {user.role}</h4>
    </div>
  )
}

export default Profile