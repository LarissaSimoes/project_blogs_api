module.exports = (sequelize, DataTypes) => {
    const postCategoryTable = sequelize.define('PostsCategory', {
      postId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    }, {
      tablename: 'posts_categories',
      underscored: true,
      timestamps: false,
    })

    postCategoryTable.associate = ({ BlogPost, Category }) => {

        BlogPost.belongsToMany(Category, {
          through: postCategoryTable,
          foreignKey: 'postId',
          otherKey: 'categoryId'
        });
    
        Category.belongsToMany(BlogPost, {
          through: postCategoryTable,
          foreignKey: 'categoryId',
          otherKey: 'postId' 
        });
    
      }
    
 
    return postCategoryTable;
  };