const { BlogPost, Category, PostsCategory, User } = require('../models');
const { decodeToken } = require('../utils/JWT');

const create = async ({ title, content, categoryIds }, token) => {
    const categories = await Category.findAll({ where: { id: categoryIds } });
    if (categories.length !== categoryIds.length) {
        return { type: 400, message: 'one or more "categoryIds" not found' };
      }
    const { id: userId } = decodeToken(token);
    console.log(userId);
    const createdPost = await BlogPost.create(
        { title, content, categoryIds, userId, published: new Date(), updated: new Date() },
);

await Promise.all(
  categoryIds.map(async (category) => {
    await PostsCategory.create({ postId: createdPost.id, categoryId: category });
  }),
);
  
    return { type: null, message: createdPost };
    };

const findAll = async () => {
  const result = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user', 
        attributes: ['id', 'displayName', 'email', 'image'],
      },
      {
        model: Category,
        attributes: ['id', 'name'],
        through: { attributes: [] },
      },
    ],
  });
  return result;
  };

module.exports = {
    create,
    findAll,
};