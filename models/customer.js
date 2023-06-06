'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Customer.belongsTo(models.Cart,{foreignKey:'cart_id'});
      Customer.hasMany(models.Order,{foreignKey:'order_id'});
      Customer.hasMany(models.Address,{foreignKey:'address_id'});
      Customer.belongsToMany(models.Order, {
        through: "Order_Product",
       // foreignKey: "user_id",
      });
    }
  }
  Customer.init({
    cart_id: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    contact: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};