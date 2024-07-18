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
                    FORGOT PASSWORD
                </span>
            </div>
            <h1 className='mb-12 font-bold text-lg'>Please enter the email shared during onboarding</h1>
             
             <form action="">
                <fieldset className='h-inputHeight w-inputWidth border border-inputborder mb-8 rounded-lg'>
                    <legend className='ml-5'>Enter email</legend>
                    <input type="text" />
                </fieldset>
                
                <button className='w-inputWidth h-inputHeight bg-buttonBlue rounded-xl text-white font-bold'>SUBMIT</button>
             </form>
        </span>
        <span className='w-1/2'>
            <img src={promo} alt="promo-image" className='object-cover h-full w-full rounded-2xl'/>
        </span>
    </div>
  )
}

export default Login