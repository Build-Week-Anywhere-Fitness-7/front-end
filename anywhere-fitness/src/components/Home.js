import { Link, useRouteMatch } from 'react-router-dom'
import React from 'react'

export default function FitHome() {
  const { url } = useRouteMatch()

  return (
    <div className='mainContainer'>
      <h1>Fitness</h1>
      <Link to={`${url}pizza`}><button id='redirect'>To the data!</button></Link>
    </div>
  )
}