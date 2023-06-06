'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addConstraint('Carts',
    {fields:['customer_id'],
      
        type: 'foreign key',
        name: 'customerid_fk',
        references: {
          table: 'Customers',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
    
    
    })
  },

  async down (queryInterface, Sequelize) {

   
   return  queryInterface.removeConstraint('Carts', 'customerid_fk')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
