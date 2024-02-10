'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrderItem.hasOne(models.Order, {
        foreignKey: 'id',
        sourceKey: 'orderId',
      })
      OrderItem.belongsTo(models.Product, {
        foreignKey: 'id',
        sourceKey: 'productId',
      })
    }
  }
  OrderItem.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    tableName: 'OrderItems',
    sequelize,
    modelName: 'OrderItem',
  });
  return OrderItem;
};