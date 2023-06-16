const emailValidation = (req, res, next) => {
    const { email } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: '"email" must be a valid email' });
      }
    next();
};

module.exports = {
    emailValidation,
};