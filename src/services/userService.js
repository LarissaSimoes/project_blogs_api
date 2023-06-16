const { User } = require('../models');
const { createToken } = require('../utils/JWT');

const create = async ({ displayName, email, password, image }) => {
  const user = await User.findOne({ where: { email } });
  if (user) {
    return { type: 409, message: 'User already registered' };
  }

  const createdUser = await User.create(
    { displayName, email, password, image: image || '' },
  );
  const token = createToken({ email: createdUser.email });

  return { type: null, message: token };
  };

module.exports = {
    create,
};