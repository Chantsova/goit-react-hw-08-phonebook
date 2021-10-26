import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as authOperation from '../components/redux/auth/auth-operations';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperation.logIn({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login and enjoy working with your phonebook</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          ></input>
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          ></input>
        </label>

        <button>Login</button>
      </form>
    </div>
  );
}
