import React from 'react'
import './UserProfile.css' // Make sure to create this CSS file

const UserProfile = () => {
  // Mock user data - replace with real data
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    // Add other user details as needed
  }

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <div>
        <label>Name:</label>
        <span>{user.name}</span>
      </div>
      <div>
        <label>Email:</label>
        <span>{user.email}</span>
      </div>
      {/* Add more user details and possibly an edit profile form */}
    </div>
  )
}

export default UserProfile
