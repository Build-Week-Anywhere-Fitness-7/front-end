import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import FitHome from './components/Home'
import Login from './components/Login'
import FitNav from './components/FitNav'
import './App.css';

export default function App() {
  return (
    <>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <FitNav />
        <Route path='/'>
          <FitHome />
        </Route>
      </Switch>
    </>
  )
}
