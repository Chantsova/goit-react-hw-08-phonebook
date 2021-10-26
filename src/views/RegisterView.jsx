import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as authOperation from '../components/redux/auth/auth-operations';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

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
    dispatch(authOperation.register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Get your own phonebook in minute! Complete the registration form</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          ></input>
        </label>

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

        <button>Register Now</button>
      </form>
    </div>
  );
}
