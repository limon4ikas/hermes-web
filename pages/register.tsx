import { createUser } from 'lib/auth';
import { NextPage } from 'next';
import { useState } from 'react';

const Register: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateUserSubmit = () => {
    createUser(email, password);
  };

  return (
    <div>
      <h1>Register</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleCreateUserSubmit}>Submit</button>
    </div>
  );
};

export default Register;
