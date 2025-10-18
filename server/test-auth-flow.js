const axios = require('axios');

const BASE = 'http://localhost:5001/api/auth';

async function run() {
  try {
    const identifier = 'testuser@example.com';
    const fullName = 'Test User';
    // 1. send otp
    const send = await axios.post(`${BASE}/send-otp`, { emailOrPhone: identifier, fullName });
    console.log('send-otp response:', send.data);
    const otp = send.data.otp;
    if (!otp) throw new Error('No OTP returned from /send-otp');

    // 2. verify otp
    const verify = await axios.post(`${BASE}/verify-otp`, { emailOrPhone: identifier, otp });
    console.log('verify-otp response:', verify.data);

    // 3. register
    const password = 'MyPass123!';
    const register = await axios.post(`${BASE}/register`, { fullName, emailOrPhone: identifier, password });
    console.log('register response:', register.data);

    // 4. login
    const login = await axios.post(`${BASE}/login`, { emailOrPhone: identifier, password });
    console.log('login response:', login.data);

  } catch (err) {
    if (err.response) console.error('Error response:', err.response.data);
    else console.error(err);
  }
}

run();
