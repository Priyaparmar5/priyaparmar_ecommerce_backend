'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'furniture',
        description: 'chair..',
        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'electronics',
        description: 'electronics..',
        
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
