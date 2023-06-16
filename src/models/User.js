module.exports = (sequelize, DataTypes) => {
    const userTable = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING
    }, {
      tablename: 'users',
      underscored: true,
      timestamps: false,
    })
 
    return userTable;
  };