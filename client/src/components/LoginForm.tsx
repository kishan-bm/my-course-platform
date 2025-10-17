// 'use client';

// import { useAuthModal } from '@/hooks/userAuthModal';
// import { FaGoogle } from 'react-icons/fa';
// import { useState, FormEvent } from 'react';
// import axios from 'axios';

// export default function LoginForm() {
//   const { switchView, closeModal } = useAuthModal();
//   const [emailOrPhone, setEmailOrPhone] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5001/api/auth/login', {
//         emailOrPhone,
//         password,
//       });
//       alert(`Welcome, ${response.data.user.fullName}!`);
//       closeModal();
//     } catch (error: any) {
//       const errorMessage = error.response?.data?.error || 'Login failed.';
//       alert(errorMessage);
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold text-center mb-2">Welcome Back!</h2>
//       <p className="text-center text-sm text-gray-500 mb-6">
//         Don't have an account?{' '}
//         <button onClick={() => switchView('register')} className="font-semibold text-blue-600 hover:underline">
//           Sign up Now
//         </button>
//       </p>

//       <form className="space-y-4" onSubmit={handleLoginSubmit}>
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email / Phone</label>
//           <input type="text" id="email" name="email" value={emailOrPhone} onChange={(e) => setEmailOrPhone(e.target.value)} placeholder="Enter your email or phone" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
//         </div>
//         <div>
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//           <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
//         </div>
//         <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
//           Login Now
//         </button>
//       </form>

//       <div className="my-6 flex items-center">
//         <div className="flex-grow border-t border-gray-300"></div>
//         <span className="mx-4 text-sm text-gray-500">OR</span>
//         <div className="flex-grow border-t border-gray-300"></div>
//       </div>

//       <button className="w-full flex items-center justify-center gap-2 border border-gray-300 px-6 py-3 rounded-md font-semibold hover:bg-gray-50 transition-colors">
//         <div className="text-red-500">
//           <FaGoogle />
//         </div>
//         Login with Google
//       </button>
//     </div>
//   );
// }

'use client';

import { useAuthModal } from '@/hooks/userAuthModal';
import { FaGoogle } from 'react-icons/fa';
import { useState, FormEvent } from 'react';
import axios from 'axios';

export default function LoginForm() {
  const { switchView, closeModal } = useAuthModal();
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/auth/login', {
        emailOrPhone,
        password,
      });
      alert(`Welcome, ${response.data.user.fullName}!`);
      closeModal();
      setEmailOrPhone('');
      setPassword('');
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || 'Login failed.';
      alert(errorMessage);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-2">Welcome Back!</h2>
      <p className="text-center text-sm text-gray-500 mb-6">
        {/* --- FIX 2: Changed "Don't" to "Don&apos;t" --- */}
        Don&apos;t have an account?{' '}
        <button onClick={() => switchView('register')} className="font-semibold text-blue-600 hover:underline">
          Sign up Now
        </button>
      </p>

      <form className="space-y-4" onSubmit={handleLoginSubmit}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email / Phone</label>
          <input type="text" id="email" name="email" value={emailOrPhone} onChange={(e) => setEmailOrPhone(e.target.value)} placeholder="Enter your email or phone" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
          Login Now
        </button>
      </form>

      <div className="my-6 flex items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-sm text-gray-500">OR</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <button className="w-full flex items-center justify-center gap-2 border border-gray-300 px-6 py-3 rounded-md font-semibold hover:bg-gray-50 transition-colors">
        <div className="text-red-500">
          <FaGoogle />
        </div>
        Login with Google
      </button>
    </div>
  );
}