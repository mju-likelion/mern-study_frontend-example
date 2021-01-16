import axios from 'axios';
import { useState } from 'react';

function Auth() {
  const [type, setType] = useState('register');

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function toggleAuth() {
    if (type === 'register') setType('login');
    else setType('register');
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (type === 'register') {
      try {
        await axios.post('/auth/register', {
          username,
          email,
          password,
        });
        setSuccessMessage(`Hello ${username}`);
      } catch (error) {
        const { status } = error.response;
        if (status === 400) {
          setErrorMessage('Bad Request');
        } else if (status === 409) {
          setErrorMessage('Conflict');
        } else {
          setErrorMessage('Server Error');
        }
      }
    } else {
      try {
        const { data } = await axios.post('/auth/login', {
          email,
          password,
        });
        console.log(data);
      } catch (error) {
        const { status } = error.response;
        if (status === 400) {
          setErrorMessage('Bad Request');
        } else if (status === 401) {
          setErrorMessage('Wrong Email or Password');
        } else {
          setErrorMessage('Server Error');
        }
      }
    }
  }

  function handleChange(e) {
    const {
      target: { name, value },
    } = e;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'username') {
      setUsername(value);
    }
  }

  return (
    <>
      <h1>Register</h1>
      <button type="button" onClick={toggleAuth}>
        {type === 'register' ? '로그인하기' : '회원가입하기'}
      </button>
      <form onSubmit={handleSubmit}>
        {type === 'register' && (
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleChange}
          />
        )}
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit">
          {type === 'register' ? 'Register' : 'Login'}
        </button>
      </form>
      <p className="text-green-400">{successMessage}</p>
      <p className="text-red-400">{errorMessage}</p>
    </>
  );
}

export default Auth;
