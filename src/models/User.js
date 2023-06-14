module.exports = (sequelize, DataTypes) => {
    const userTable = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.string,
      image: DataTypes.string
    }, {
      tablename: 'users',
      underscored: true
    })
 
    return userTable;
  };