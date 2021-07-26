import { Link, useRouteMatch } from 'react-router-dom'
import React from 'react'
import FitNav from './FitNav'

export default function SignUp() {
  const { url } = useRouteMatch()

  return (
    <>
      <FitNav />
      <div className='mainContainer'>
        <h3>Sign Up</h3>
        <h6>Already a member? <Link to={`/login`}>Log In</Link></h6>
        <button>Sign up with Google</button>
        <button>Sign up with Facebook</button>
        <hr class="form__or mv+"></hr>
        <form>
          {/* <label for='email'>Email address</label>
          <input
            type='text'
            id='email_input'
          ></input>
          <label for='password'>Password</label>
          <input
            type='password'
            id='password'
          ></input> */}
          <button type='submit' value="Submit"><Link to={`/create-account`}>Sign up with email</Link></button>
        </form>
      </div>
    </>
  )
}