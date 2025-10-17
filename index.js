// const express = require('express');
// const cors = require('cors');
// const { PrismaClient } = require('@prisma/client');
// const bcrypt = require('bcryptjs');
// const nodemailer = require('nodemailer'); // Make sure nodemailer is required
// require('dotenv').config();

// const prisma = new PrismaClient();
// const app = express();

// app.use(cors());
// app.use(express.json());

// const PORT = process.env.PORT || 5001;

// // --- Nodemailer Transport for Resend ---
// const transporter = nodemailer.createTransport({
//   host: 'smtp.resend.com',
//   secure: true,
//   port: 465,
//   auth: {
//     user: 'resend', // This is always 'resend'
//     pass: process.env.RESEND_API_KEY, // Your API key from the .env file
//   },
// });

// const isEmail = (input) => input.includes('@');

// app.post('/api/auth/send-otp', async (req, res) => {
//   const { emailOrPhone, fullName } = req.body;
//   if (!emailOrPhone || !fullName) {
//     return res.status(400).json({ error: 'Full Name and Email/Phone are required.' });
//   }

//   const otp = Math.floor(1000 + Math.random() * 9000).toString();
//   console.log(`Generated OTP for ${emailOrPhone}: ${otp}`);
//   const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000);

//   const whereClause = isEmail(emailOrPhone)
//     ? { email: emailOrPhone }
//     : { phone: emailOrPhone };
  
//   try {
//     const existingUser = await prisma.user.findUnique({ where: whereClause });

//     if (existingUser) {
//       await prisma.user.update({
//         where: whereClause,
//         data: { fullName, otp, otpExpiresAt, isVerified: false }, // Always update name and reset verification
//       });
//     } else {
//       await prisma.user.create({
//         data: {
//           fullName,
//           email: isEmail(emailOrPhone) ? emailOrPhone : null,
//           phone: !isEmail(emailOrPhone) ? emailOrPhone : null,
//           passwordHash: 'temp', // Placeholder
//           otp,
//           otpExpiresAt,
//         },
//       });
//     }
//     // --- REAL EMAIL SENDING LOGIC ---
//     if (isEmail(emailOrPhone)) {
//       try {
//         await transporter.sendMail({
//           from: 'onboarding@resend.dev', // Default "from" address for Resend
//           to: emailOrPhone,
//           subject: 'Your OTP Code',
//           html: `<p>Your OTP code is: <strong>${otp}</strong></p>`,
//         });
//         console.log(`OTP email sent to ${emailOrPhone}`);
//       } catch (emailError) {
//         console.error('Failed to send email:', emailError);
//         // We don't want to fail the whole request if email fails, but we should log it.
//       }
//     } else {
//       // TODO: Add SMS sending logic here later
//       console.log('SMS sending not yet implemented.');
//     }
//     res.status(200).json({ success: true, message: 'OTP sent successfully.' });
//   } catch (error) {
//     console.error('Error sending OTP:', error);
//     res.status(500).json({ error: 'Failed to send OTP.' });
//   }
// });

// // ... (verify-otp endpoint remains the same)
// app.post('/api/auth/verify-otp', async (req, res) => {
//   const { emailOrPhone, otp } = req.body;
//   if (!emailOrPhone || !otp) {
//     return res.status(400).json({ error: 'Email/Phone and OTP are required.' });
//   }
//   const whereClause = isEmail(emailOrPhone)
//     ? { email: emailOrPhone }
//     : { phone: emailOrPhone };
//   try {
//     const user = await prisma.user.findUnique({ where: whereClause });
//     if (!user || user.otp !== otp || user.otpExpiresAt < new Date()) {
//       return res.status(400).json({ error: 'Invalid or expired OTP.' });
//     }
//     await prisma.user.update({
//       where: whereClause,
//       data: { isVerified: true, otp: null, otpExpiresAt: null },
//     });
//     res.status(200).json({ success: true, message: 'OTP verified successfully.' });
//   } catch (error) {
//     console.error('Error verifying OTP:', error);
//     res.status(500).json({ error: 'Failed to verify OTP.' });
//   }
// });

// // ... (register endpoint remains the same)
// app.post('/api/auth/register', async (req, res) => {
//   const { fullName, emailOrPhone, password } = req.body;
//   const whereClause = isEmail(emailOrPhone)
//     ? { email: emailOrPhone }
//     : { phone: emailOrPhone };
//   try {
//     const user = await prisma.user.findUnique({ where: whereClause });
//     if (!user || !user.isVerified) {
//       return res.status(400).json({ error: 'User not verified. Please complete OTP verification first.' });
//     }
//     const passwordHash = await bcrypt.hash(password, 10);
//     await prisma.user.update({
//       where: whereClause,
//       data: { fullName, passwordHash, isVerified: true },
//     });
//     res.status(201).json({ success: true, message: 'User registered successfully!' });
//   } catch (error) {
//     console.error('Registration Error:', error);
//     res.status(500).json({ error: 'Registration failed.' });
//   }
// });

// // ... (login endpoint remains the same)
// app.post('/api/auth/login', async (req, res) => {
//   const { emailOrPhone, password } = req.body;
//   const whereClause = isEmail(emailOrPhone)
//     ? { email: emailOrPhone }
//     : { phone: emailOrPhone };
//   try {
//     const user = await prisma.user.findUnique({ where: whereClause });
//     if (!user) {
//       return res.status(401).json({ error: 'Invalid credentials.' });
//     }
//     const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
//     if (!isPasswordValid) {
//       return res.status(401).json({ error: 'Invalid credentials.' });
//     }
//     res.status(200).json({ success: true, message: 'Login successful!', user: { fullName: user.fullName } });
//   } catch (error) {
//     console.error('Login Error:', error);
//     res.status(500).json({ error: 'Login failed.' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });