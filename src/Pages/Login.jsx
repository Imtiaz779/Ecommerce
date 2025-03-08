import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react'

const Login = () => {

  const [showpass,setShowpass] = useState(false);
 const togglePass = () => {
  setShowpass(!showpass)
 }
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100 px-6 md:px-0'>
      <div className='w-full max-w-md p-8 space-y-4 bg-white shadow-lg rounded-xl'>
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login To Your Account
        </h2>
        <form action="" className='space-y-6'>
          {/* email  */}
          <div>
            <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-600'>Email Address</label>
            <input type="email"  placeholder='Enter Your Email' className='w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring focus:ring-red-300 focus:outline-none' required />
          </div>
          {/* password */}
          <div className='relative'>
            <label htmlFor="password" className='block mb-2 text-sm font-medium text-gray-600'>Password</label>
          <div className='items-center flex relative'>
          <input type={
            showpass ? "text":"password"
          } placeholder='Enter Your Password' className='w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring focus:ring-red-300 focus:outline-none' required />
          <button type='button' onClick={togglePass}  className='absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700'>
            {showpass ? <Eye className='size-5'/> : <EyeOff className='size-5'/>}
          </button>
          </div>
          </div>
          {/* submit */}
          <button type='submit'
          className='w-full px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus-ring focus-ring-red-300'>
            Login
          </button>
        </form>
        <div className='text-center'>
          <p className='text-sm text-gray-600'>
            Don't have a account?
            <a href="#" className="text-teal-500 hover:text-green-300 hover:underline"> Sign in</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login