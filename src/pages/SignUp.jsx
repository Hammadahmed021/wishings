import React from 'react';
import { useForm } from 'react-hook-form';

function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Sign-Up Data:", data);
    // call signup function from authService here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Sign Up</h2>
      <input {...register("name", { required: "Name is required" })} placeholder="Name" />
      {errors.name && <span>{errors.name.message}</span>}
      
      <input {...register("email", { required: "Email is required" })} placeholder="Email" />
      {errors.email && <span>{errors.email.message}</span>}

      <input {...register("password", { required: "Password is required" })} type="password" placeholder="Password" />
      {errors.password && <span>{errors.password.message}</span>}
      
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;