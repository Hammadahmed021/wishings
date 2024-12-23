import React from 'react'
import { Signup } from '../components'
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='container mx-auto w-full lg:w-2/4 min-h-screen'>
      <div className='my-0 md:my-10 shadow-xl border border-slate-200 pt-8 rounded-2xl relative'>
        <div className='text-center'>
          <Link to={'/'} className="outline-none">
            <img
              src={logo}
              alt="logo"
              className="inline align-middle w-40 xl:w-60"
            />
          </Link>
          <Link to={'/signin'} className='absolute top-2 right-4 text-base hover:underline'>Login</Link>
        </div>
        <Signup />
      </div>
    </div>
  )
}

export default SignUp
