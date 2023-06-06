'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       
       Cart.hasOne(models.Customer,{foreignKey:'cart_id'})

       Cart.belongsToMany(models.Product, {
        through: "Product_Cart",
       // foreignKey: "user_id",
      });
      // define association here
    }
  }
  Cart.init({
    customer_id: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};