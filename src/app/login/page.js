import React from 'react'

const page = () => {
  return (
    <div className='text-center p-8 text-blue-500 font-semibold text-3xl'> Thank you for clik me, who created me is trying to complete the work , please wait in few day you will be able to see me completely </div>
  )
}

export default page
// import React, { useState } from "react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       setError("Please fill in both fields.");
//       return;
//     }
//     console.log("Logging in with:", { email, password });
//     // Here you can add your login logic, like API call
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//         {error && <p className="text-red-500 text-center">{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block mb-2 text-sm font-semibold">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2 text-sm font-semibold">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full p-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
