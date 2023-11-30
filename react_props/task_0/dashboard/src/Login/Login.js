import React from 'react';
import './Login.css';

function Login() {
  return (
    <main>
      <body className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' />
        <button type='button'>OK</button>
      </body>
    </main>
  );
}

export default Login;
