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

  module.exports = {
    create,
    findAll,
  };