import { Link, useRouteMatch } from 'react-router-dom'
import React from 'react'
import FitNav from './FitNav'

export default function CreateAccount() {
  const { url } = useRouteMatch()

  return (
    <>
      <FitNav />
      <div className='mainContainer'>
        <h3>Sign Up</h3>
        <h6>Already a member? <Link to={`/login`}>Log In</Link></h6>
        <hr class="form__or mv+"></hr>
        <form>
          <label for='name'>Your Name</label>
          <input
            type='text'
            id='name'
          ></input>
          <label for='email'>Email address</label>
          <input
            type='text'
            id='email'
          ></input>
          <label for='password'>Password</label>
          <input
            type='password'
            id='password'
          ></input>
          <label for='confirm-password'>Confirm Password</label>
          <input
            type='password'
            id='confirm-password'
          ></input>
          <button type='submit' value="Submit">Create Your Account</button>
        </form>
      </div>
    </>
  )
}