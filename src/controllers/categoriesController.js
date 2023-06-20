const { categoriesService } = require('../services');

const create = async (req, res) => {
  const { type, message } = await categoriesService.create(req.body);

  if (type) return res.status(type).json({ message });

  return res.status(201).json(message);
  };

const findAll = async (_req, res) => {
  const result = await categoriesService.findAll();
  res.status(200).json(result);
  };

  module.exports = {
    create,
    findAll,
  };