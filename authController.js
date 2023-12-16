// server/auth/auth.js

const jwt = require("jsonwebtoken");
const secretKey = "arunramasamy46"; // Replace with your secret key

async function generateToken(user) {
  const payload = {
    userId: user._id,
    email: user.email, // Include user-specific information in the payload
  };
  const options = { expiresIn: "1h" }; // Token expires in 1 hour
  return jwt.sign(payload, secretKey, options);
}

module.exports = { generateToken };
