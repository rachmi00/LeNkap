import React from 'react'


import './App.css'
import Signin from './components/Signin'
import Login from './components/Login'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'

function App() {


  return (
    <Router>
      <div>
        <section>
          <Routes>
           <Route path='/signup' element={<Signin/>} />
           <Route path='/login' element={<Login/>} />
          </Routes>
        </section>
      </div>
    </Router>
  )
}

export default App
