const { User } = require('../models');
const { createToken } = require('../utils/JWT');

const login = async ({ email, password }) => {
  const findUser = await User.findOne({ where: { email } });

  if (!email || !password) {
    return { type: 400, message: 'Some required fields are missing' };
  }

  if (!findUser || password !== findUser.password) {
    return { type: 400, message: 'Invalid fields' };
  }

  const payload = {
    id: findUser.id,
  };
  const token = createToken(payload);

  return { type: null, message: token };
};

module.exports = {
  login,
};