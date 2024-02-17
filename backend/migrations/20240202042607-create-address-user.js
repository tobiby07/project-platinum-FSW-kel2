'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Address', { 
      id: { allowNull: false, type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      province: { type: Sequelize.STRING },
      regency: { type: Sequelize.STRING },
      district: { type: Sequelize.STRING },
      village: { type: Sequelize.STRING },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Address'); 
  }
};
