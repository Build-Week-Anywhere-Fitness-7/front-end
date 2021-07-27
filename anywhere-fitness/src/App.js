import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import FitHome from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import FitNav from './components/FitNav'
import CreateAccount from './components/CreateAccount'
import './App.css';

export default function App() {
  return (
    <>
      <FitNav />
      <Switch>
        <Route path='/create-account'>
          <CreateAccount />
        </Route>
        <Route path='/sign-up'>
          <SignUp />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/'>
          <FitHome />
        </Route>
      </Switch>
    </>
  )
}
