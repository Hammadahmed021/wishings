import React from 'react';
import { Login } from '../components';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/logo.png";
import { googleUser } from '../store/authSlice';
import { useDispatch } from 'react-redux';

function SignIn() {
  const location = useLocation()
  const dispatch =useDispatch()

  return (
   
     <div className='container mx-auto w-full lg:w-2/4 min-h-screen'>
     <div className='my-0 md:my-10 shadow-xl border border-slate-50 pt-8 rounded-2xl relative'>
       <div className='text-center'>
         <Link to={'/'} className="outline-none">
           <img
             src={logo}
             alt="logo"
             className="inline align-middle w-40 xl:w-60"
           />
         </Link>
         <Link to={'/signup'} className='absolute top-2 right-4 text-base hover:underline'>Sign Up</Link>
       </div>
       <Login isGoBack={Boolean(location?.state?.navigate)} />
      </div>
      <button onClick={async() => {
         try {
           const response = await dispatch(googleUser()).unwrap();
           console.log("Signup response:", response);
           // Navigate to home or another page
            //navigate("/");
         } catch (error) {
           console.error("API Signup failed:", error);
           // Check the specific error code and display the appropriate error message
           if ((error = "auth/email-already-in-use")) {
           }
         } finally {
         }
      }} >
        google
      </button>
   </div>
  );
}

export default SignIn;