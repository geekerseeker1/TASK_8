import React, { useState } from 'react';
import UserListing from './UserListing';
import UserRegistration from './UserRegistration';

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <UserRegistration addUser={addUser} />
      <UserListing users={users} />
    </div>
  );
};

export default App;
