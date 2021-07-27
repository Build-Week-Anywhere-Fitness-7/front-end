import { Link, useRouteMatch } from 'react-router-dom'
import React from 'react'

export default function Nav() {
  const { url } = useRouteMatch()

  return (
    <div className='header'>
      <title>Anytime Fitness</title>
      <nav>
        <Link to='/'>Anytime Fitness</Link>
        <Link to='/login'>Login</Link>
        <Link to='/sign-up'>Sign Up</Link>
        <Link to='/profile'>Profile</Link>
        <Link to={''}>Logout</Link>
      </nav>
    </div>
  )
}