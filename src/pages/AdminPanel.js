import React from 'react'
import './AdminPanel.css' // Make sure to create this CSS file

const AdminPanel = () => {
  // Mock data - replace with real data later
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    // Add more users as needed
  ]

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <h2>User Management</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              {/* Add more user details as needed */}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Add more admin functionalities as needed */}
    </div>
  )
}

export default AdminPanel
