const { userService } = require('../services');

const create = async (req, res) => {
  const { type, message } = await userService.create(req.body);

  if (type) return res.status(type).json({ message });

  return res.status(201).json({ token: message });
  };

const findAll = async (_req, res) => {
  const result = await userService.findAll();
  res.status(200).json(result);
  };

const findById = async (req, res) => {
  const { id } = req.params;
  const result = await userService.findById(id);
  
  if (result.message) {
  return res.status(404).json(result);
  }
  res.status(200).json(result);
  };    

  module.exports = {
    create,
    findAll,
    findById,
  };