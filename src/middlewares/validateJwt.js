const { decodeToken } = require('../utils/JWT');

const validateJwt = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = decodeToken(token);
    if (!decoded) throw new Error('Expired or invalid token');

    next();
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateJwt,
};