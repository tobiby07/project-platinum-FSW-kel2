'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Brands', [
      { name: 'Adidas', logo: 'logo-adidas.png', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Vans', logo: 'logo-vans.png', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nike', logo: 'logo-nike.png', createdAt: new Date(), updatedAt: new Date() },
      { name: 'New Balance (NB)', logo: 'logo-nb.png', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Converse', logo: 'logo-converse.png', createdAt: new Date(), updatedAt: new Date() },
      { name: 'League', logo: 'logo-league.png', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Other Man', logo: 'logo-sepatu-pria.png', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Other Woman', logo: 'logo-sepatu-wanita.png', createdAt: new Date(), updatedAt: new Date() },

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
