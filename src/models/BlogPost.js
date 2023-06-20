module.exports = (sequelize, DataTypes) => {
    const blogPostTable = sequelize.define('BlogPost', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE
    }, {
      tablename: 'blog_posts',
      underscored: true,
      timestamps: false,
    })

    blogPostTable.associate = ({ User }) => {
        blogPostTable.belongsTo(User,
          { foreignKey: 'userId', as: 'user' });
      }
    
 
    return blogPostTable;
  };