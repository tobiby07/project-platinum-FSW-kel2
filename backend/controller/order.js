const { Order, OrderItem, Product, User, CartItem } = require('../models');
const OrderController = {
  // -------- ORDER CONTROLLER ----------
  // Get all Orders
  getAllOrders: async (req, res) => {
    try {
      const result = await Order.findAll({
        include: [{
          model: OrderItem,
          include: [{ model: Product }],
        }]
      });
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error get all Orders' });
    }
  },

  // Get a single Order by ID
  getOrderById: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await Order.findByPk(id, {
        include: [{
          model: OrderItem,
          include: [{ model: Product }],
        }]
      });
      if (!result) {
        return res.status(404).json({ error: 'Order not found' });
      }
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error get Order by Id' });
    }
  },

  // Create a new Order
  createOrder: async (req, res) => {
    const { userId, totalPrice, shippingAddress, orderStatus, orderDetails } = req.body;
    try {
      const result = await Order.create({
        userId: userId,
        totalPrice: totalPrice,
        shippingAddress: shippingAddress,
        orderStatus: orderStatus
      });
      if (result) {
        orderDetails.length > 0 && orderDetails.map(async (item) => {
          await OrderItem.create({
            orderId: result.id,
            productId: item.productId,
            quantity: item.quantity,
            price: item.price
          })
        })
      }
      //Delete Chart Item
      await CartItem.destroy({
        where: { userId: userId }
      });

      //Delete Chart Item
      await CartItem.destroy({
        where: { userId: userId }
      });
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Update an existing Order
  updateOrder: async (req, res) => {
    const { id } = req.params;
    const { userId, totalPrice, shippingAddress, orderStatus, orderDetails } = req.body;
    try {
      const orderUpdate = await Order.findByPk(id);
      if (!orderUpdate) {
        return res.status(404).json({ error: 'Order not found' });
      }
      await orderUpdate.update({
        userId: userId,
        totalPrice: totalPrice,
        shippingAddress: shippingAddress,
        orderStatus: orderStatus
      }, { where: { id: id } });

      orderDetails.length > 0 && orderDetails.map(async (item) => {
        if (item.quantity === 0) {
          await OrderItem.destroy({ where: { orderId: id, productId: item.productId } })
        } else {
          await OrderItem.update({
            quantity: item.quantity,
            price: item.price
          }, { where: { orderId: id, productId: item.productId } })
        }
      })
      const result = await Order.findByPk(id);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete a Order
  deleteOrder: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await Order.findByPk(id);
      if (!result) {
        return res.status(404).json({ error: 'Order not found' });
      }
      await OrderItem.destroy({ where: { orderId: id } });
      await result.destroy();
      res.json({ message: 'Order deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // --------- END ORDER CONTROLLER ----------
};

module.exports = OrderController;
