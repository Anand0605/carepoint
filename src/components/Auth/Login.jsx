// import React, { useState } from 'react';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';

// const Login = ({handleLogin}) => {

//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevState) => !prevState);
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     handleLogin(email, password)
//     // console.log("Email:", email);
//     // console.log("Password:", password);

//     // Clear the input fields after logging
//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <div className='flex h-screen w-screen items-center justify-center bg-[#1c1c1c]'>
//       <div className='border-2 border-emerald-600 p-7 rounded-xl'>
//         <form onSubmit={submitHandler} className='flex flex-col items-center justify-center'>
//           <input
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full w-80 text-emerald-600'
//             type='email'
//             placeholder='Enter your email'
//           />
//           <div className='relative mt-5 w-80'>
//             <input
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className='text-emerald-600 outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full w-full pr-10'
//               type={showPassword ? 'text' : 'password'}
//               placeholder='Enter your password'
//             />
//             <div
//               className='absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-xl text-emerald-600'
//               onClick={togglePasswordVisibility}
//             >
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </div>
//           </div>
//           <button
//             type="submit"
//             className='text-black outline-none border-none bg-emerald-600 text-xl py-1.5 px-5 rounded-3xl mt-4'
//           >
//             Log In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = ({ handleLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="relative h-screen w-screen">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="public/video/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Login Form */}
      <div className="flex h-full items-center justify-center">
        <div className="border-2 border-emerald-600 p-9 rounded-xl bg-[#00000080] backdrop-blur-md">
          <form
            onSubmit={submitHandler}
            className="flex flex-col items-center justify-center"
          >
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-2 px-4 rounded-xl w-80 text-emerald-600"
              type="email"
              placeholder="Enter your email"
            />
            <div className="relative mt-5 w-80">
              <input
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-emerald-600 outline-none bg-transparent border-2 border-emerald-600 text-xl py-2 px-4 rounded-xl w-full pr-10"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />
              <div
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-xl text-emerald-600"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <button
              type="submit"
              className="text-black text-center outline-none border-none bg-emerald-600 text-xl py-2 px-4 rounded-3xl mt-4"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

