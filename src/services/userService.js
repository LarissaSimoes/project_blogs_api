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

  console.log(createdUser, 'AQUI!!!!');

  const payload = {
    email: createdUser.email,
  };

  const token = createToken(payload);

  return { type: null, message: token };
  };

const findAll = async () => {
  const result = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return result;
  };

const findById = async (id) => {
  const result = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  }); 
  if (!result) {
  return {
    message: 'User does not exist',
   }; 
  }
  return result;
  };

module.exports = {
    create,
    findAll,
    findById,
};