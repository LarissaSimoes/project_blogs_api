module.exports = (sequelize, DataTypes) => {
    const categoryTable = sequelize.define('Category', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
      name: DataTypes.STRING,
    }, {
      tablename: 'categories',
      underscored: true,
      timestamps: false,
    })
 
    return categoryTable;
  };