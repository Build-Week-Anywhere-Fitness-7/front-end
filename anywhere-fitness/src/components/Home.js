import { Link, useRouteMatch } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'

export default function FitHome() {
  const { url } = useRouteMatch()
  

  return (
    <div className='mainContainer'>
      <h1>Fitness</h1>
      <Link to={`${url}login`}><button id='redirect'>Login</button></Link>
      
    </div>
  );
}