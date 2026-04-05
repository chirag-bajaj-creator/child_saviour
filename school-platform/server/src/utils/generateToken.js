const jwt = require('jsonwebtoken');

const generateToken = (user_id, role, school_id) => {
  return jwt.sign(
    {
      user_id,
      role,
      school_id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN || '8h',
    }
  );
};

module.exports = generateToken;
