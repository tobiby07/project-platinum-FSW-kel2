'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brands extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Brands.hasMany(models.Product, { foreignKey: 'brandId' })
    }
  }
  Brands.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    logo: DataTypes.STRING,
    createdBy: DataTypes.STRING,
    modifiedBy: DataTypes.STRING
  }, {
    tableName: 'Brands',
    sequelize,
    modelName: 'Brands',
  });
  return Brands;
};