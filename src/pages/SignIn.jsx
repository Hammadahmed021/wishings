import React from 'react';
import { useForm } from 'react-hook-form';

function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Sign-In Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Sign In</h2>
      <input {...register("email", { required: "Email is required" })} placeholder="Email" />
      {errors.email && <span>{errors.email.message}</span>}
      
      <input {...register("password", { required: "Password is required" })} type="password" placeholder="Password" />
      {errors.password && <span>{errors.password.message}</span>}
      
      <button type="submit">Sign In</button>
    </form>
  );
}

export default SignIn;