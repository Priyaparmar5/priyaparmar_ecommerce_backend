'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sellers', [
      {
        name: 'siya',
        email: 'siya@gmail.com',
        address: 'shahibag,ahmedabad',
        contact: '9879356623',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Riya',
        email: 'riya@gmail.com',
        address: 'naranpura,surat',
        contact: '9233444545',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'krisha',
        email: 'krisha@gmail.com',
        address: 'mumbai',
        contact: '9278444545',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'heer',
        email: 'heer@gmail.com',
        address: 'delhi',
        contact: '9233444567',
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
