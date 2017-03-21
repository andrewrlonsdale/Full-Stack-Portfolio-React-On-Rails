import React from 'react'
import { Link, browserHistory } from 'react-router'

const Nav = function (props) {

    return (
        <nav className='navbar'>
        <div className="float-left">
        <Link to='/' className='title'>Home</Link>
        <Link to='/about' className='assignments'>About</Link>
        <Link to='/assignments' className='assignments'>Projects</Link>
        <Link to='/contact' className='assignments'>Contact</Link>
        </div>
        <div className="float-right">
        <Link to='/login' className='login'>Login</Link>
        </div>
      </nav>
     
  )

}

export default Nav