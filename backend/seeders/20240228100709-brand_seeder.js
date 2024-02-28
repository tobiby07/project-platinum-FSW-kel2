'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Brands', [
      {
        name: 'Adidas',
        logo: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
        createdBy: 'Putu Indrayana',
        modifiedBy: 'Putu Indrayana',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nike',
        logo: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
        createdBy: 'Putu Indrayana',
        modifiedBy: 'Putu Indrayana',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Puma',
        logo: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
        createdBy: 'Putu Indrayana',
        modifiedBy: 'Putu Indrayana',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nike',
        logo: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
        createdBy: 'Putu Indrayana',
        modifiedBy: 'Putu Indrayana',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Brands', null, {});
  }
};
