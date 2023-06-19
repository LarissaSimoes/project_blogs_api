const { Category } = require('../models');

const create = async ({ name }) => {
  const createdCategory = await Category.create({ name });

  return { type: null, message: createdCategory };
  };

module.exports = {
    create,
};