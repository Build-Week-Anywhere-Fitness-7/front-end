import { Link, useRouteMatch } from 'react-router-dom'
import React from 'react'

export default function Login() {
  const { url } = useRouteMatch()

  return (
    <div className='mainContainer'>
      <h1>Login</h1>
      <Link to={`/`}><button id='redirect'>Back Home</button></Link>
    </div>
  )
}