import React, { useState, useEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import FitHome from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Classes from './components/Classes'
import CreateAccount from './components/CreateAccount'
import './App.css';

export default function App() {
  return (
    <>    
    <div className='header'>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/Login'>Login</Link>
        <Link to='/SignUp'>Sign Up</Link>
        <Link to='/Profile'>Profile</Link>
        <Link to={''}>Logout</Link>
      </nav>
      <title>Anytime Fitness</title>
    </div>

    <Switch>
      <Route path='/classes'>
        <Classes />
      </Route>
      <Route path='/CreateAccount'>
        <CreateAccount />
      </Route>
      <Route path='/SignUp'>
        <SignUp />
      </Route>
      <Route path='/Login'>
        <Login />
      </Route>
      <Route path='/'>
        <FitHome />
      </Route>
    </Switch>
    </>
  )
}
