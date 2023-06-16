const { authService } = require('../services');

const login = async (req, res) => {
  const { type, message } = await authService.login(req.body);
  if (type) return res.status(type).json({ message });
  return res.status(200).json({
    token: message,
  });
};

module.exports = {
  login,
};