import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ForgotPage from './pages/ForgotPage'
import ResetPage from './pages/ResetPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <LoginPage />} />
        <Route path='/forgot-password' element={<ForgotPage />} />
        <Route path='/reset-password' element={<ResetPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App