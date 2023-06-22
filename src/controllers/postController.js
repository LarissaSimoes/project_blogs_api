const { postService } = require('../services');

const create = async (req, res) => {
  const { authorization: token } = req.headers;
  const { type, message } = await postService.create(req.body, token);

  if (type) return res.status(type).json({ message });

  return res.status(201).json(message);
  };

const findAll = async (_req, res) => {
  const result = await postService.findAll();
  res.status(200).json(result);
   };

  module.exports = {
    create,
    findAll,
  };