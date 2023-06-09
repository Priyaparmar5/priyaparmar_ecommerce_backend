'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Seller.hasMany(models.Product_Sellers,{foreignKey:'seller_id'});
      // define association here
      Seller.belongsToMany(models.Product, {
        through: "product_sellers",
       // foreignKey: "user_id",
      });
    }
  }
  Seller.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    contact: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Seller',
  });
  return Seller;
};