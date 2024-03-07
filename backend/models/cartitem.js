'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
 
    static associate(models) {
      CartItem.belongsTo(models.Product, { foreignKey: 'productId' });
      CartItem.belongsTo(models.Users, { foreignKey: 'userId' });
    }
  }
  CartItem.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'CartItem',
  });
  return CartItem;
};