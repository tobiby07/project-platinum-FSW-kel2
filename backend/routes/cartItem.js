const express = require('express');
const { getAllCartItems, getCartItemsByUserId, createCartItem, updateCartItem, deleteCartItem } = require('../controller/cartItem');
const cartItemRoute = express.Router();

cartItemRoute.get('/', getAllCartItems)
cartItemRoute.get('/:userId', getCartItemsByUserId )
cartItemRoute.post('/', createCartItem )
cartItemRoute.patch('/:id', updateCartItem )
cartItemRoute.delete('/:id', deleteCartItem)

module.exports ={cartItemRoute}