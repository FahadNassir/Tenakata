import React from 'react'
import Login from '../components/Login'

const LoginPage = () => {
  return (
    <div className='loginPage'>
        <Login />
        <p>© 2023 Tenakata is Licensed by the Central Bank of Kenya. All rights reserved.</p>
        {alert("click the login button to proceed")}
    </div>
  )
}

export default LoginPage