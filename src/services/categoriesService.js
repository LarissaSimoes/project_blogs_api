const { Category } = require('../models');

const create = async ({ name }) => {
  const createdCategory = await Category.create({ name });

  return { type: null, message: createdCategory };
  };

const findAll = async () => {
  const result = await Category.findAll();
  return result;
  };

module.exports = {
    create,
    findAll,
};