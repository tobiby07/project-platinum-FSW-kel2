'use strict';

function generateRandom(min, max) {
  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
}
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      { 
        categoryId: 8,
        productName: "Product Example - Adidas",
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'adidas1.jpg', 
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 8,
        productName: "Product Example - Adidas",
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'adidas2.jpg', 
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 8,
        productName: "Product Example - Adidas",
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'adidas3.jpg', 
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 8,
        productName: "Product Example - Adidas",
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'adidas4.jpg', 
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 8,
        productName: "Product Example - Adidas",
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'adidas5.jpg', 
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 8,
        productName: "Product Example - Adidas",
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'adidas6.jpg', 
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 8,
        productName: "Product Example - Adidas",
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'adidas7.jpg', 
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 8,
        productName: "Product Example - Adidas",
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'adidas8.jpg', 
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 8,
        productName: "Product Example - Adidas",
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'adidas9.jpg', 
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 8,
        productName: "Product Example - Adidas",
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'adidas10.jpg', 
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      { 
        categoryId: 10,
        productName: 'Product Example - Converse',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'converse1.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 10,
        productName: 'Product Example - Converse',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'converse2.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 10,
        productName: 'Product Example - Converse',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'converse3.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 10,
        productName: 'Product Example - Converse',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'converse4.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 10,
        productName: 'Product Example - Converse',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'converse5.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 10,
        productName: 'Product Example - Converse',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'converse6.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 10,
        productName: 'Product Example - Converse',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'converse7.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 10,
        productName: 'Product Example - Converse',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'converse8.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 10,
        productName: 'Product Example - Converse',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'converse9.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 10,
        productName: 'Product Example - Converse',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'converse10.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      }, { 
        categoryId: 12,
        productName: 'Product Example - League',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'league1.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 12,
        productName: 'Product Example - League',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'league3.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 12,
        productName: 'Product Example - League',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'league4.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 12,
        productName: 'Product Example - League',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'league5.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 12,
        productName: 'Product Example - League',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'league6.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 12,
        productName: 'Product Example - League',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'league7.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 12,
        productName: 'Product Example - League',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'league8.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 12,
        productName: 'Product Example - League',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'league9.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 12,
        productName: 'Product Example - League',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'league10.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 12,
        productName: 'Product Example - League',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'league2.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      }, { 
        categoryId: 9,
        productName: 'Product Example - New Balance (NB)',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'nb1.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      }, { 
        categoryId: 9,
        productName: 'Product Example - New Balance (NB)',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'nb2.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },  { 
        categoryId: 9,
        productName: 'Product Example - New Balance (NB)',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'nb3.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },  { 
        categoryId: 9,
        productName: 'Product Example - New Balance (NB)',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'nb4.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },  { 
        categoryId: 9,
        productName: 'Product Example - New Balance (NB)',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'nb5.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },  { 
        categoryId: 9,
        productName: 'Product Example - New Balance (NB)',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'nb6.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },  { 
        categoryId: 9,
        productName: 'Product Example - New Balance (NB)',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'nb7.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },  { 
        categoryId: 9,
        productName: 'Product Example - New Balance (NB)',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'nb8.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },  { 
        categoryId: 9,
        productName: 'Product Example - New Balance (NB)',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'nb9.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },  { 
        categoryId: 9,
        productName: 'Product Example - New Balance (NB)',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'nb10.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },  { 
        categoryId: 7,
        productName: 'Product Example - Nike',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'nike1.png',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 7,
        productName: 'Product Example - Nike',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'nike2.png',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 7,
        productName: 'Product Example - Nike',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'nike3.png',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 7,
        productName: 'Product Example - Nike',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'nike4.png',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 7,
        productName: 'Product Example - Nike',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'nike5.png',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 7,
        productName: 'Product Example - Nike',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'nike6.png',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 7,
        productName: 'Product Example - Nike',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'nike7.png',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 7,
        productName: 'Product Example - Nike',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'nike8.png',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 7,
        productName: 'Product Example - Nike',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'nike9.png',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 7,
        productName: 'Product Example - Nike',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'nike10.png',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 13,
        productName: 'Product Example - Man',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'man1.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 13,
        productName: 'Product Example - Man',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'man2.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 13,
        productName: 'Product Example - Man',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'man3.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 13,
        productName: 'Product Example - Man',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'man4.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 13,
        productName: 'Product Example - Man',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'man5.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 13,
        productName: 'Product Example - Man',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'man6.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 13,
        productName: 'Product Example - Man',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'man7.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 13,
        productName: 'Product Example - Man',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'man8.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 13,
        productName: 'Product Example - Man',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'man9.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 13,
        productName: 'Product Example - Man',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'man10.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 14,
        productName: 'Product Example - Woman',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'woman1.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 14,
        productName: 'Product Example - Woman',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'woman2.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 14,
        productName: 'Product Example - Woman',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'woman3.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 14,
        productName: 'Product Example - Woman',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'woman4.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 14,
        productName: 'Product Example - Woman',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'woman5.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 14,
        productName: 'Product Example - Woman',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'woman6.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 14,
        productName: 'Product Example - Woman',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'woman7.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 14,
        productName: 'Product Example - Woman',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'woman8.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 14,
        productName: 'Product Example - Woman',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'woman9.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 14,
        productName: 'Product Example - Woman',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'woman10.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      { 
        categoryId: 11,
        productName: 'Product Example - Vans',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'vans1.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      { 
        categoryId: 11,
        productName: 'Product Example - Vans',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'vans2.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 11,
        productName: 'Product Example - Vans',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'vans3.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 11,
        productName: 'Product Example - Vans',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'vans4.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 11,
        productName: 'Product Example - Vans',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'vans5.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 11,
        productName: 'Product Example - Vans',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'vans6.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 11,
        productName: 'Product Example - Vans',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'vans7.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 11,
        productName: 'Product Example - Vans',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'vans8.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },{ 
        categoryId: 11,
        productName: 'Product Example - Vans',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'vans9.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      { 
        categoryId: 11,
        productName: 'Product Example - Vans',
        productDescription: lorem,
        price: generateRandom(200000, 1000000),
        stock: generateRandom(10, 100),
        productImage: 'vans10.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
