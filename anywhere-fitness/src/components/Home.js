import { Link, useRouteMatch } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import images from '../images/home-bg.jpg'

export default function FitHome() {
  const { url } = useRouteMatch()
  const ImageWrapper = styled.img`
    background-image: url('../images/home-bg.jpg');
    background-size: cover;
  `

  return (
    <div className='mainContainer'>
      <h1>Fitness</h1>
      <Link to={`${url}login`}><button id='redirect'>Login</button></Link>
      <ImageWrapper></ImageWrapper>
    </div>
  );
}