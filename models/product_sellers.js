'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_Sellers extends Model {
   
    static associate(models) {
      
      // define association here
    }
  }
  Product_Sellers.init({
    seller_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Product_Sellers',
  });
  return Product_Sellers;
};