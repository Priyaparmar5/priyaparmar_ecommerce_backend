'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsToMany(models.Categories, {
        through: "product_category",
       // foreignKey: "user_id",
      });
      Product.belongsToMany(models.Seller, {
        through: "product_sellers",
       // foreignKey: "user_id",
      });
      Product.belongsToMany(models.Cart, {
        through: "Product_Cart",
       // foreignKey: "user_id",
      });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};