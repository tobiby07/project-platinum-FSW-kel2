const { CartItem, Product, Users } = require('../models'); 


// Controller untuk menambahkan item ke dalam keranjang belanja
exports.createCartItem = async (req, res) => {
  try {
    const cartItem = await CartItem.create(req.body);
    return res.status(201).json(cartItem);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Controller untuk menampilkan semua item dalam keranjang belanja
exports.getAllCartItems = async (req, res) => {
  try {
    const cartItems = await CartItem.findAll();
    return res.status(200).json(cartItems);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
//  menampilkan cart item berdasarkan id user
exports.getCartItemsByUserId = async (req, res) => {
  try {
    const cartItems = await CartItem.findAll({
      where: {
        userId: req.params.userId
      },
      include: [Product, Users]
    });

    if (!cartItems || cartItems.length === 0) {
      return res.status(404).json({ error: 'Item dalam keranjang belanja tidak ditemukan' });
    }

    return res.status(200).json(cartItems);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


exports.updateCartItem = async (req, res) => {
  try {
    const [updated] = await CartItem.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedCartItem = await CartItem.findByPk(req.params.id);
      return res.status(200).json(updatedCartItem);
    }
    throw new Error('Item dalam keranjang belanja tidak ditemukan');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Controller untuk menghapus item dalam keranjang belanja berdasarkan ID
exports.deleteCartItem = async (req, res) => {
  try {
    const deleted = await CartItem.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      return res.status(204).send('Item dalam keranjang belanja berhasil dihapus');
    } else {
      return res.status(404).json({ error: 'Item dalam keranjang belanja tidak ditemukan' });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};