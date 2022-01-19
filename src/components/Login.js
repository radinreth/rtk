import React from 'react'
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/userReducer';

const Login = () => {
  const dispatch = useDispatch();
  
  return (
    <div>
      <button
        onClick={() => { dispatch(login({ name: 'radin', age: 32, email: 'radinr@gmail.com' })) }}
      >login</button>
      <button
        onClick={() => { dispatch(logout()) }}
      >logout</button>

    </div>
  )
}

export default Login
