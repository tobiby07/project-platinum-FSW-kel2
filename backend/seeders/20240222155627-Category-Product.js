'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ProductCategories', [
      { id: 7, categoryName: 'Nike', createdAt: new Date(), updatedAt: new Date() },
      { id: 8, categoryName: 'Adidas', createdAt: new Date(), updatedAt: new Date() },
      { id: 9, categoryName: 'New Balance (NB)', createdAt: new Date(), updatedAt: new Date() },
      { id: 10, categoryName: 'Converse', createdAt: new Date(), updatedAt: new Date() },
      { id: 11, categoryName: 'Vans', createdAt: new Date(), updatedAt: new Date() },
      { id: 12, categoryName: 'League', createdAt: new Date(), updatedAt: new Date() },
      { id: 13, categoryName: 'Other Man', createdAt: new Date(), updatedAt: new Date() },
      { id: 14, categoryName: 'Other Woman', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ProductCategories', null, {});
  }
};
