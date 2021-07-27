import { Link, useRouteMatch } from 'react-router-dom'
import React from 'react'

export default function FitNav() {
  const { url } = useRouteMatch()

  return (
    <div className='header'>
      <Link to={`/`}><h1>Anywhere Fitness</h1></Link>
    </div>
  )
}