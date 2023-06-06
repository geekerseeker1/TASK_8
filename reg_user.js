import React, { useState } from 'react';

const UserRegistration = ({ addUser }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      id: Date.now(),
      name,
      code: generateUniqueCode(),
    };
    addUser(user);
    setName('');
  };

  const generateUniqueCode = () => {
   
    return Math.floor(Math.random() * 9000) + 1000;
  };

  return (
    <div>
      <h2>User Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserRegistration;
