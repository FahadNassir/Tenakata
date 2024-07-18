import React from 'react'
import promo from '../assets/promo.jpg'
import logo from '../assets/logo.jpg'

const Login = () => {
  return (
    <div className='flex w-customWidth h-customHeight border-mainbg border-8 rounded-2xl'>
        <span className='w-1/2 bg-white rounded-2xl px-9 py-12'>
            <div className='flex justify-between mb-16'>
                <span className='h-logoHeight w-logoWidth'>
                    <img src={logo} alt="logo" />
                </span>
                <span className='font-extrabold text-xl'>
                    LOGIN
                </span>
            </div>
            <div className='mb-6 font-bold text-lg'>
              <h1>Set new password</h1>
              <h2>please enter the new password as per the following instructions</h2>
            </div>
             
             <form action="">
                <fieldset className='h-inputHeight w-inputWidth border border-inputborder mb-3 rounded-lg'>
                    <legend className='ml-5'>New password</legend>
                    <input type="text" />
                </fieldset>
                <fieldset className='h-inputHeight w-inputWidth border border-inputborder mb-6 rounded-lg'>
                    <legend className='ml-5'>Confirm password</legend>
                    <input type="text" />
                </fieldset>
               
                <button className='w-inputWidth h-inputHeight bg-buttonBlue rounded-xl text-white font-bold'>RESET PASSWORD</button>
             </form>
        </span>
        <span className='w-1/2'>
            <img src={promo} alt="promo-image" className='object-cover h-full w-full rounded-2xl'/>
        </span>
    </div>
  )
}

export default Login