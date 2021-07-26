import { Link, useRouteMatch } from 'react-router-dom'
import React from 'react'
import FitNav from './FitNav'

export default function Login() {
  const { url } = useRouteMatch()

  return (
    <>
      <FitNav />
      <div className='mainContainer'>
        <h3>Welcome back</h3>
        <button>Sign in with Apple</button>
        <button>Log in with Facebook</button>
        <hr class="form__or mv+"></hr>
        <form>
          <label for='email'>Email address</label>
          <input
            type='text'
            id='email_input'
          ></input>
          <label for='password'>Password</label>
          <input
            type='password'
            id='password'
          ></input>
          <button type='submit' value="Submit">Log In</button>
        </form>
        <a href='#'>Forgot your password?</a>
      </div>
    </>
  )
}