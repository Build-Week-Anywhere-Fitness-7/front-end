import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import FitHome from './components/Home'
import './App.css';

export default function App() {
  return (
    <>
      <Switch>
        <Route path=''>
          <FitHome />
        </Route>
      </Switch>
    </>
  )
}
