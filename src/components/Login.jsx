import React from 'react';
import promo from '../assets/promo.jpg';
import logo from '../assets/logo.jpg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col lg:flex-row w-full lg:w-customWidth h-full lg:h-customHeight border-mainbg border-8 rounded-2xl'>
      <span className='w-full h-full lg:w-1/2 bg-white rounded-l-2xl lg:rounded-l-2xl px-9 py-12'>
        <div className='flex justify-between mb-16'>
          <span className='h-logoHeight w-logoWidth cursor-pointer' onClick={() => navigate('/')}>
            <img src={logo} alt='logo' />
          </span>
          <span className='font-extrabold text-xl'>LOGIN</span>
        </div>
        <h1 className='mb-8 font-bold text-lg'>Welcome back, Sebie</h1>

        <form action=''>
          <div className='input-container mb-4'>
            <label htmlFor='name'>Username</label>
            <input type='text' id='name' name='name' className='w-full p-2 border rounded' />
          </div>

          <div className='input-container mb-4'>
            <label htmlFor='email'>Password</label>
            <input type='password' id='password' name='password' className='w-full p-2 border rounded' />
          </div>

          <div className='flex lg:flex-row justify-between mb-5 flex-row'>
            <span className='mb-2 lg:mb-0'>
              <input type='checkbox' /> Keep me logged in
            </span>
            <span className='cursor-pointer' onClick={() => navigate('/forgot-password')}>Forgot Password</span>
          </div>
          <button className='bg-buttonBlue rounded-xl text-white font-bold w-full h-inputHeight'
            onClick={() => navigate('/dashboard')}
          >
            LOGIN
          </button>
        </form>
      </span>
      <span className='w-1/2'>
        <img src={promo} alt='promo-image' className='lg:object-cover lg:h-full lg:w-full lg:rounded-r-2xl w-0 h-0' />
      </span>
    </div>
  );
}

export default Login;
