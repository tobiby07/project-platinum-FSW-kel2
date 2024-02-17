'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate(models) {
        Address.hasOne(models.Users, {
            foreignKey: 'addressId' 
          });
          
    }
  };
  Address.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    province: DataTypes.STRING,
    regency: DataTypes.STRING,
    district: DataTypes.STRING,
    village: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Address',
    tableName: 'Address'
  });
  return Address;
};