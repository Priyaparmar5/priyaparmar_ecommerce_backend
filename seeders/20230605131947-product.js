'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'chair',
        imageUrl:'https://freepngimg.com/thumb/chair/8-2-chair-high-quality-png.png',
        description:'chair',
        price:'5000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'samsung galaxy s23 ultra',
        imageUrl:'https://images.samsung.com/in/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-kv.jpg',
        description:'Enjoy Nightography on Galaxy S23 Series with Galaxys most advanced camera sensors',
        price:'1,24,999',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      // Add more products as needed
    ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
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
