import React,{useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ForgotPage from './pages/ForgotPage'
import ResetPage from './pages/ResetPage'
import Dashboard from './pages/Dashboard'
import Dashboardi from './pages/Dashboardi.jsx'
import InvestorMgt from './pages/InvestorMgt.jsx'
import BusinessDets from './components/BusinessDets.jsx'
import AddressDets from './components/AddressDets.jsx'
import Documents from './components/Documents.jsx'
import InvestorDets from './components/InvestorDets.jsx'

const App = () => {

  const [corporate, setCorporate] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LoginPage />} />
        <Route path='/forgot-password' element={<ForgotPage />} />
        <Route path='/reset-password' element={<ResetPage />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/investor' element={<Dashboardi />} />
        <Route path='/investor-mgt' element={<InvestorMgt />} />
        <Route path='/details/Business' element={<BusinessDets corporate={corporate} setCorporate={setCorporate} />} />
        <Route path='/details/Address' element={<AddressDets corporate={corporate} setCorporate={setCorporate} />} />
        <Route path='/details/Documents' element={<Documents corporate={corporate} setCorporate={setCorporate} />} />
        <Route path='/details/investorDets' element={<InvestorDets corporate={corporate} setCorporate={setCorporate} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App