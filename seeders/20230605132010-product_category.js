'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Product_Categories', [
      {
        product_id: '1',
        category_id:'1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: '2',
        category_id:'2',
        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      // Add more products as needed
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
