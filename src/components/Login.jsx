import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from '../store/authSlice';

const Login = ({isGoBack}) => {
    const [isSigning, setIsSigning] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

  const LoginSubmit = async (data) => {
    setIsSigning(true); // Assuming you have setIsSigning state
    try {
      const loginResponse = await dispatch(loginUser(data)).unwrap();
      if (isGoBack) window.history.back();
        console.log("Login Response:", loginResponse);
      // Handle success, navigate user or update UI
    } catch (error) {
      console.error("Login failed:", error);
      if (error == "auth/wrong-password") {
        setError("Password is wrong");
      } else if (error == "auth/user-not-found") {
        setError("User does not exist");
      } else {
        setError("Please enter correct email or password."); // Generic error message
      }
      // Handle error, show error message or retry
    } finally {
      setIsSigning(false); // Reset signing state
    }
  };
  return (
    <div>
        <form onSubmit={handleSubmit(LoginSubmit)} className="mt-8">
        <div className="p-6">
          <span className="mb-6 block">
            <Input
              mainInput={"sm:w-full w-full"}
              label="Email"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                Enter valid email address
              </p>
            )}
          </span>
          <span className="mb-1 block">
            <Input
              mainInput={"sm:w-full w-full"}
              label="Password"
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                Enter correct password
              </p>
            )}
          </span>
          {error && (
            <p className="text-start text-red-500 text-xs pb-2">{error}</p>
          )}
          <p className=" text-xs mb-6 text-tn_pink text-end font-semibold"><Link to={"/forgot"}>Forgot Password? </Link></p>
          <Button
            type="submit"
            className={`w-full ${
              isSigning ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={isSigning} // Disable button while signing
          >
            {isSigning ? "Logging in..." : "Log in"}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Login
