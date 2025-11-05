import React from 'react'
import PUP from '../assets/pup.svg'

function SignupBox() {
  return (
    <div className='bg-[#19191D] border shadow-2xs w-[25vw] text-white rounded'>
        <div className='flex flex-col items-center justify-items-start mt-10'>
            <img src={PUP} alt="PartyUp Logo" />
          <h2><b>Sign Up</b></h2>
        </div>
        <form className='space-y-4 items-center justify-center'>
            <div className='text-left ml-12 w-auto'>
                <label htmlFor="username" className="block mb-1">Username</label>
                <input type="text" id="username" name="username" className="w-[20vw] border border-gray-300 rounded px-3 py-2"/>
            </div>
            <div className='text-left ml-12 w-auto'>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input type="email" id="email" name="email" className="w-[20vw] border border-gray-300 rounded px-3 py-2"/>
            </div>
            <div className='text-left ml-12 w-auto'>
                <label htmlFor="password" className="block mb-1">Password</label>
                <input type="password" id="password" name="password" className="w-[20vw] mb-10 border border-gray-300 rounded px-3 py-2"/>
            </div>
            <div className='flex justify-center'>
            <button type="submit" className="w-[20vw] pt-2 pb-2 mb-10 bg-blue-500 text-white rounded  hover:bg-blue-600">Create Account</button>
            </div>
        </form>
    </div>
  )
}

export default SignupBox