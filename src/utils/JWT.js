const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';

const jwtConfig = {
  expiresIn: '15m',
};

const createToken = (payload) => 
  jwt.sign(payload, JWT_SECRET, jwtConfig);

const decodeToken = (token) => 
  jwt.verify(token, JWT_SECRET);

module.exports = {
  createToken,
  decodeToken,
};
