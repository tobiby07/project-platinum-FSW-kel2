const { OrderItem } = require('../models');
const OrderItemController = {
  // -------- ADMIN SIDE CONTROLLER ----------
  // Get all OrderItems
  getAllOrderItems: async (req, res) => {
    try {
      const result = await OrderItem.findAll();
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error get all OrderItems' });
    }
  },

  // Get a single OrderItem by ID
  getOrderItemById: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await OrderItem.findByPk(id);
      if (!result) {
        return res.status(404).json({ error: 'OrderItem not found' });
      }
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error get OrderItem by Id' });
    }
  },

  // Create a new OrderItem
  createOrderItem: async (req, res) => {
    const { orderId, productId, quantity, price } = req.body;
    try {
      const result = await OrderItem.create({
        orderId: orderId,
        productId: productId,
        quantity: quantity,
        price: price
      });
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Update an existing OrderItem
  updateOrderItem: async (req, res) => {
    const { id } = req.params;
    const { orderId, productId, quantity, price } = req.body;
    try {
      const result = await OrderItem.findByPk(id);
      if (!result) {
        return res.status(404).json({ error: 'OrderItem not found' });
      }
      await result.update({
        orderId: orderId,
        productId: productId,
        quantity: quantity,
        price: price
      });
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete a OrderItem
  deleteOrderItem: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await OrderItem.findByPk(id);
      if (!result) {
        return res.status(404).json({ error: 'OrderItem not found' });
      }
      await result.destroy();
      res.json({ message: 'OrderItem deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // --------- OrderItem SIDE CONTROLLER ----------
};

module.exports = OrderItemController;
