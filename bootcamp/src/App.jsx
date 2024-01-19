import React from 'react'


import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'

function App() {


  return (
    <Router>
      <div>
        <section>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
           <Route path='/signup' element={<Signup/>} />
           <Route path='/login' element={<Login/>} />
          </Routes>
        </section>
      </div>
    </Router>
  )
}

export default App
