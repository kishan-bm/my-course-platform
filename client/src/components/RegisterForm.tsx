'use client';

import { useAuthModal } from '@/hooks/userAuthModal';
import { FaGoogle, FaEye, FaEyeSlash, FaCheck, FaTimes } from 'react-icons/fa';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const PasswordRequirement = ({ met, text }: { met: boolean; text: string }) => (
  <p className={`flex items-center text-sm ${met ? 'text-green-500' : 'text-red-500'}`}>
    <span className="mr-2">{met ? <FaCheck /> : <FaTimes />}</span>
    {text}
  </p>
);

export default function RegisterForm() {
  const { switchView } = useAuthModal();
  
  const [fullName, setFullName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [countdown, setCountdown] = useState(30);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [validation, setValidation] = useState({
    minLength: false,
    hasUpper: false,
    hasLower: false,
    hasSpecial: false,
  });

  const otpInputs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (otpSent && countdown > 0) {
      timer = setInterval(() => setCountdown((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [otpSent, countdown]);

  useEffect(() => {
    setValidation({
      minLength: password.length >= 6,
      hasUpper: /[A-Z]/.test(password),
      hasLower: /[a-z]/.test(password),
      hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    });
  }, [password]);

  const handleSendOtp = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!emailOrPhone || !fullName) {
      alert('Please enter your full name and email/phone.');
      return;
    }
    try {
      await axios.post('http://localhost:5001/api/auth/send-otp', {
        emailOrPhone,
        fullName,
      });
      setOtpSent(true);
      setCountdown(30);
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || 'Failed to send OTP.';
      alert(errorMessage);
    }
  };

  const handleVerifyOtp = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    if (enteredOtp.length !== 4) {
      alert("Please enter the complete 4-digit OTP.");
      return;
    }
    try {
      await axios.post('http://localhost:5001/api/auth/verify-otp', {
        emailOrPhone,
        otp: enteredOtp,
      });
      setIsOtpVerified(true);
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || 'Failed to verify OTP.';
      alert(errorMessage);
    }
  };
  
  const handleOtpChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) {
      otpInputs.current[index + 1]?.focus();
    }
  };
  
  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputs.current[index - 1]?.focus();
    }
    if (e.key === 'Enter' && index === 3 && otp.join('').length === 4) {
      handleVerifyOtp(e);
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isOtpVerified || !isPasswordValid) return;
    try {
      await axios.post('http://localhost:5001/api/auth/register', {
        fullName,
        emailOrPhone,
        password,
      });
      alert('User registered successfully! Please log in.');
      // Reset all fields
      setFullName('');
      setEmailOrPhone('');
      setOtpSent(false);
      setIsOtpVerified(false);
      setOtp(['', '', '', '']);
      setCountdown(30);
      setPassword('');
      setShowPassword(false);
      switchView('login');
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || 'Registration failed.';
      alert(errorMessage);
    }
  };
  
  const isPasswordValid = Object.values(validation).every(Boolean);

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-2">Create an account</h2>
      <p className="text-center text-sm text-gray-500 mb-6">
        Already have an Account?{' '}
        <button onClick={() => switchView('login')} className="font-semibold text-blue-600 hover:underline">
          Login now
        </button>
      </p>

      <form className="space-y-4" onSubmit={handleRegisterSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input type="text" id="name" name="name" value={fullName} onChange={(e) => setFullName(e.target.value)} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
        </div>

        <div>
          <label htmlFor="email-reg" className="block text-sm font-medium text-gray-700">Email / Phone</label>
          <div className="flex items-center space-x-2 mt-1">
            <input type="text" id="email-reg" name="email" value={emailOrPhone} onChange={(e) => setEmailOrPhone(e.target.value)} placeholder="Enter your email or phone" required className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" disabled={otpSent}/>
            {!otpSent && <button onClick={handleSendOtp} className="w-40 bg-gray-200 text-gray-800 px-4 py-2 rounded-md font-semibold hover:bg-gray-300">Send OTP</button>}
          </div>
        </div>
        
        {otpSent && !isOtpVerified && (
          <div className="space-y-4 pt-2">
            <label className="block text-sm font-medium text-gray-700">Enter OTP</label>
            <div className="flex justify-between space-x-2">
              {otp.map((digit, index) => (
                <input key={index} ref={(el) => { if (el) otpInputs.current[index] = el; }} type="text" maxLength={1} value={digit} onChange={(e) => handleOtpChange(index, e.target.value)} onKeyDown={(e) => handleOtpKeyDown(index, e)} className="w-1/4 p-2 text-center border border-gray-300 rounded-md"/>
              ))}
            </div>
            <div className="text-xs text-gray-500 text-right">
              {countdown > 0 ? (<span>Resend OTP in {countdown}s</span>) : (<button type="button" onClick={() => setCountdown(30)} className="text-blue-600 hover:underline">Resend OTP</button>)}
            </div>
            <button type="button" onClick={handleVerifyOtp} className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">Verify OTP</button>
          </div>
        )}
        
        {isOtpVerified && <p className="text-green-600 font-semibold text-center">✓ OTP Verified Successfully!</p>}

        <div className="relative">
          <label htmlFor="password-reg" className="block text-sm font-medium text-gray-700">Password</label>
          <input type={showPassword ? 'text' : 'password'} id="password-reg" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 top-6 flex items-center pr-3 text-gray-400">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        
        {password.length > 0 && (
          <div className="p-3 bg-gray-50 rounded-md space-y-1">
            <PasswordRequirement met={validation.minLength} text="At least 6 characters" />
            <PasswordRequirement met={validation.hasUpper} text="One uppercase letter" />
            <PasswordRequirement met={validation.hasLower} text="One lowercase letter" />
            <PasswordRequirement met={validation.hasSpecial} text="One special character or number" />
          </div>
        )}
        
        <button type="submit" disabled={!isOtpVerified || !isPasswordValid} className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold transition-colors hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed">
          Register
        </button>
      </form>
    </div>
  );
}

// 'use client';

// import { useAuthModal } from '@/hooks/userAuthModal';
// import { FaGoogle, FaEye, FaEyeSlash, FaCheck, FaTimes } from 'react-icons/fa';
// import { useState, useEffect, useRef } from 'react';
// import axios from 'axios'

// // A component for the password validation criteria
// const PasswordRequirement = ({ met, text }: { met: boolean; text: string }) => (
//   <p className={`flex items-center text-sm ${met ? 'text-green-500' : 'text-red-500'}`}>
//     {met ? <FaCheck className="mr-2" /> : <FaTimes className="mr-2" />}
//     {text}
//   </p>
// );

// export default function RegisterForm() {
//   const { switchView } = useAuthModal();
  
//   // States for form logic
//   const [emailOrPhone, setEmailOrPhone] = useState('');
//   const [otpSent, setOtpSent] = useState(false);
//   const [isOtpVerified, setIsOtpVerified] = useState(false);
//   const [otp, setOtp] = useState(['', '', '', '']);
//   const [countdown, setCountdown] = useState(30);
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   // State for password validation rules
//   const [validation, setValidation] = useState({
//     minLength: false,
//     hasUpper: false,
//     hasLower: false,
//     hasSpecial: false,
//   });

//   const otpInputs = useRef<HTMLInputElement[]>([]);

//   // Timer effect
//   useEffect(() => {
//     let timer: NodeJS.Timeout;
//     if (otpSent && countdown > 0) {
//       timer = setInterval(() => setCountdown((prev) => prev - 1), 1000);
//     }
//     return () => clearInterval(timer);
//   }, [otpSent, countdown]);

//   // Real-time password validation effect
//   useEffect(() => {
//     setValidation({
//       minLength: password.length >= 6,
//       hasUpper: /[A-Z]/.test(password),
//       hasLower: /[a-z]/.test(password),
//       hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password),
//     });
//   }, [password]);

//   const handleSendOtp = async (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     if (!emailOrPhone) {
//       alert('Please enter an email or phone number.');
//       return;
//     }
//     try {
//       // Make the API call to our backend
//       await axios.post('http://localhost:5001/api/auth/send-otp', {
//         emailOrPhone: emailOrPhone,
//       });

//       // Only proceed if the API call was successful
//       setOtpSent(true);
//       setCountdown(30);
//     } catch (error) {
//       console.error('Failed to send OTP:', error);
//       alert('There was an error sending the OTP. Please try again.');
//     }
//   };

//   const handleVerifyOtp = (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     const enteredOtp = otp.join('');
//     if (enteredOtp.length === 4) {
//       setIsOtpVerified(true);
//       alert("OTP Verified Successfully!");
//     } else {
//       alert("Please enter the complete 4-digit OTP.");
//     }
//   };
  
//   const handleOtpChange = (index: number, value: string) => {
//     if (isNaN(Number(value))) return;
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);
//     if (value && index < 3) {
//       otpInputs.current[index + 1]?.focus();
//     }
//   };
  
//   const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === 'Backspace' && !otp[index] && index > 0) {
//       otpInputs.current[index - 1]?.focus();
//     }
//     // New: Trigger verification on Enter in the last OTP box
//     if (e.key === 'Enter' && index === 3 && otp.join('').length === 4) {
//       handleVerifyOtp(e);
//     }
//   };
  
//   // Check if all password validation criteria are met
//   const isPasswordValid = Object.values(validation).every(Boolean);

//   return (
//     <div>
//       <h2 className="text-2xl font-bold text-center mb-2">Create an account</h2>
//       <p className="text-center text-sm text-gray-500 mb-6">
//         Already have an Account?{' '}
//         <button onClick={() => switchView('login')} className="font-semibold text-blue-600 hover:underline">
//           Login now
//         </button>
//       </p>

//       <form className="space-y-4">
//         {/* --- FORM FIELDS --- */}
//         <div>
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
//           <input type="text" id="name" name="name" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
//         </div>

//         <div>
//           <label htmlFor="email-reg" className="block text-sm font-medium text-gray-700">Email / Phone</label>
//           <div className="flex items-center space-x-2 mt-1">
//             <input type="text" id="email-reg" name="email" value={emailOrPhone} onChange={(e) => setEmailOrPhone(e.target.value)} placeholder="Enter your email or phone" required className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" disabled={otpSent}/>
//             {!otpSent && <button onClick={handleSendOtp} className="w-40 bg-gray-200 text-gray-800 px-4 py-2 rounded-md font-semibold hover:bg-gray-300">Send OTP</button>}
//           </div>
//         </div>
        
//         {otpSent && !isOtpVerified && (
//           <div className="space-y-4 pt-2">
//             <label className="block text-sm font-medium text-gray-700">Enter OTP</label>
//             <div className="flex justify-between space-x-2">
//               {otp.map((digit, index) => (
//                 <input key={index} ref={(el) => (otpInputs.current[index] = el as HTMLInputElement)} type="text" maxLength={1} value={digit} onChange={(e) => handleOtpChange(index, e.target.value)} onKeyDown={(e) => handleOtpKeyDown(index, e)} className="w-1/4 p-2 text-center border border-gray-300 rounded-md"/>
//               ))}
//             </div>
//             <div className="text-xs text-gray-500 text-right">
//               {countdown > 0 ? (<span>Resend OTP in {countdown}s</span>) : (<button type="button" onClick={() => setCountdown(30)} className="text-blue-600 hover:underline">Resend OTP</button>)}
//             </div>
//             <button type="button" onClick={handleVerifyOtp} className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">Verify OTP</button>
//           </div>
//         )}
        
//         {isOtpVerified && <p className="text-green-600 font-semibold text-center">✓ OTP Verified Successfully!</p>}

//         {/* --- PASSWORD FIELD WITH VALIDATION --- */}
//         <div className="relative">
//           <label htmlFor="password-reg" className="block text-sm font-medium text-gray-700">Password</label>
//           <input
//             type={showPassword ? 'text' : 'password'}
//             id="password-reg"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//           />
//           <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 top-6 flex items-center pr-3 text-gray-400">
//             {showPassword ? <FaEyeSlash /> : <FaEye />}
//           </button>
//         </div>
        
//         {password.length > 0 && (
//           <div className="p-3 bg-gray-50 rounded-md space-y-1">
//             <PasswordRequirement met={validation.minLength} text="At least 6 characters" />
//             <PasswordRequirement met={validation.hasUpper} text="One uppercase letter" />
//             <PasswordRequirement met={validation.hasLower} text="One lowercase letter" />
//             <PasswordRequirement met={validation.hasSpecial} text="One special character or number" />
//           </div>
//         )}
        
//         <button type="submit" disabled={!isOtpVerified || !isPasswordValid} className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold transition-colors hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed">
//           Register
//         </button>
//       </form>
//     </div>
//   );
// }