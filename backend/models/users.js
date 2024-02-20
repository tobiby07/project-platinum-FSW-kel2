const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.hasMany(models.Cart, { foreignKey: 'userId' });
      Users.hasMany(models.Order, { foreignKey: 'userId' });
      Users.belongsTo(models.Address, { foreignKey: 'addressId' });
    }
  }
  Users.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'member'
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    addressId: DataTypes.INTEGER,
    phoneNumber: DataTypes.STRING,
    createdBy: DataTypes.STRING,
    modifiedBy: DataTypes.STRING
  }, {
    tableName: 'Users',
    sequelize,
    modelName: 'Users',
  });
  return Users;
};