import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ForgotPage from './pages/ForgotPage'
import ResetPage from './pages/ResetPage'
import Dashboard from './pages/Dashboard'
import Dashboardi from './pages/Dashboardi.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LoginPage />} />
        <Route path='/forgot-password' element={<ForgotPage />} />
        <Route path='/reset-password' element={<ResetPage />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/investor' element={<Dashboardi />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App