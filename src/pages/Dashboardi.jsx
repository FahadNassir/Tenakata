import React from 'react'
import Sidenav from '../components/Sidenav'
import Navbar from '../components/Navbar'
import InvestorDash from '../components/InvestorDash'

const Dashboardi = () => {
  return (
    <div className='flex bg-buttonBlue min-w-screen'>
        <span className='lg:w-sidenavW w-0'>
            <Sidenav />
        </span>
        <span className='flex flex-col bg-dashbg lg:rounded-l-2xl lg:w-contentW p-7 w-full'>
            <Navbar />
            <InvestorDash />
        </span>
    </div>
  )
}

export default Dashboardi