import React from 'react'
import promo from '../assets/promo.jpg'
import logo from '../assets/logo.jpg'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col lg:flex-row w-full lg:w-customWidth h-full lg:h-customHeight border-mainbg border-8 rounded-2xl'>
        <span className='w-full h-full lg:w-1/2 bg-white rounded-l-2xl lg:rounded-l-2xl px-9 py-12'>
            <div className='flex justify-between mb-16'>
                <span className='h-logoHeight w-logoWidth cursor-pointer' onClick={() => navigate("/")} >
                    <img src={logo} alt="logo"/>
                </span>
                <span className='font-extrabold text-xl'>
                    FORGOT PASSWORD
                </span>
            </div>
            <div className='mb-8'>
                <h1 className='font-bold text-lg'>Set new password</h1>
                <h2>Please enter the new password according to instructions</h2>
            </div>
             
             <form action="">
                <div className="input-container">
                    <label htmlFor="name">New password</label>
                    <input type="text" id="name" name="name" />
                </div>

                <div className="input-container">
                    <label htmlFor="email">Confirm password</label>
                    <input type="email" id="email" name="email" />
                </div>
                <button className='bg-buttonBlue rounded-xl text-white font-bold w-full h-inputHeight'>RESET PASSWORD</button>
             </form>
        </span>
        <span className='w-1/2'>
            <img src={promo} alt="promo-image" className='lg:object-cover lg:h-full lg:w-full lg:rounded-2xl w-0 h-0'/>
        </span>
    </div>
  )
}

export default Login