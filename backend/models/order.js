'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Order.hasOne(models.OrderItem, {
        foreignKey: 'orderId',
        sourceKey: 'id',
      })
      Order.hasOne(models.Users, {
        foreignKey: 'userId',
        sourceKey: 'id',
      })
    }
  }
  Order.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL,
    shippingAddress: DataTypes.STRING,
    orderStatus: DataTypes.STRING
  }, {
    tableName: 'Orders',
    sequelize,
    modelName: 'Order',
  });
  return Order;
};