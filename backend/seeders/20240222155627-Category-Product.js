'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ProductCategories', [
      { id: 7, categoryName: 'Sepatu Basket', createdAt: new Date(), updatedAt: new Date() },
      { id: 8, categoryName: 'Sepatu Running', createdAt: new Date(), updatedAt: new Date() },
      { id: 9, categoryName: 'Sepatu Casual', createdAt: new Date(), updatedAt: new Date() },
      { id: 10, categoryName: 'Sepatu Sekolah', createdAt: new Date(), updatedAt: new Date() },
      { id: 11, categoryName: 'Sepatu Sandal', createdAt: new Date(), updatedAt: new Date() },
      { id: 12, categoryName: 'Sepatu Wanita', createdAt: new Date(), updatedAt: new Date() },
      { id: 13, categoryName: 'Sepatu Pria', createdAt: new Date(), updatedAt: new Date() },
      { id: 14, categoryName: 'Sepatu Hiking', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ProductCategories', null, {});
  }
};
