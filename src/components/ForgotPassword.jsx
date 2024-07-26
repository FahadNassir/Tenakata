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
                <span className='h-logoHeight w-logoWidth cursor-pointer' onClick={() => navigate("/")}>
                    <img src={logo} alt="logo" />
                </span>
                <span className='font-extrabold text-xl'>
                    FORGOT PASSWORD
                </span>
            </div>
            <div className='mb-6'>
                <h1 className='font-bold text-lg'>Forgot password</h1>
                <h2>Please enter the email shared during onboarding</h2>
            </div>
             
             <form action="">
                <div className="input-container">
                    <label for="email">Enter email</label>
                    <input type="email" id="email" name="email" />
                </div>
                
                <button className='w-full h-inputHeight bg-buttonBlue rounded-xl
                    cursor-pointer lg:mt-24
                text-white font-semibold'
                    onClick={() => navigate("/reset-password")}
                >SUBMIT</button>
             </form>
        </span>
        <span className='w-1/2'>
            <img src={promo} alt="promo-image" className='w-0 h-0 lg:object-cover lg:h-full lg:w-full lg:rounded-2xl'/>
        </span>
    </div>
  )
}

export default Login