import React from 'react'
import { Link } from 'react-router'
import LoginBox from '../auth/LoginBox'
import Nav from '../components/Nav';

const Login = () => (
  <div className="login-page">
  <Nav />
    <h1 className='title'>Andrews Portfolio</h1>
    <LoginBox url="http://localhost:5000/" />
  </div>
)

export default Login