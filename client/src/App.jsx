import { BrowserRouter , Routes, Route } from 'react-router-dom'

import React from 'react'
import Projects from './pages/Projects'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'

export default function App() {
  return (
  <BrowserRouter>
  <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/projects" element={<Projects />} />
    
  </Routes>
  </BrowserRouter>
  )
}
