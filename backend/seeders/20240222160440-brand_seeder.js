'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Brands', [
      {id: 1,name: 'Adidas',logo: 'logo-adidas.png',createdAt: new Date(),updatedAt: new Date()},
      {id: 2,name: 'Vans',logo: 'logo-vans.png',createdAt: new Date(),updatedAt: new Date()},
      {id: 3,name: 'Nike',logo: 'logo-nike.png',createdAt: new Date(),updatedAt: new Date()},
      {id: 4,name: 'New Balance (NB)',logo: 'logo-nb.png',createdAt: new Date(),updatedAt: new Date()},
      {id: 5,name: 'Converse',logo: 'logo-converse.png',createdAt: new Date(),updatedAt: new Date()},
      {id: 6,name: 'League',logo: 'logo-league.png',createdAt: new Date(),updatedAt: new Date()},
      {id: 7,name: 'Other Man',logo: 'logo-sepatu-pria.png',createdAt: new Date(),updatedAt: new Date()},
      {id: 8,name: 'Other Woman',logo: 'logo-sepatu-wanita.png',createdAt: new Date(),updatedAt: new Date()},
      
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
