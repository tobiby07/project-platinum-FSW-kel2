'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CartItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // diganti dengan userid
      userId: {
        type: Sequelize.INTEGER,
        references: {model: "Users", key:"id"}
      },
      productId: {
        type: Sequelize.INTEGER,
        references: { model: "Products", key:"id" }
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      // price nya tidak usah, nanti kita ambil dari  Products
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CartItems');
  }
};