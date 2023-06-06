import React, { useState } from 'react';

const UserListing = () => {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <h2>User Listing Page</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>{user.name}</span>
            <span>{user.code}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserListing;
