import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    // Clear the input fields after logging
    setEmail("");
    setPassword("");
  };

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-14 rounded-xl'>
        <form onSubmit={submitHandler} className='flex flex-col items-center justify-center'>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='text-black outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full w-80'
            type='email'
            placeholder='Enter your email'
          />
          <div className='relative mt-5 w-80'>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='text-black outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full w-full pr-10'
              type={showPassword ? 'text' : 'password'}
              placeholder='Enter your password'
            />
            <div
              className='absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-xl text-emerald-600'
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <button
            type="submit"
            className='text-black outline-none border-none bg-emerald-600 text-xl py-3 px-5 rounded-full mt-3'
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
