const { Users } = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const UserController = {
  // Get all users

  getAllUsers: async (req, res) => {
    console.log("helo");
    try {
      const users = await Users.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error get all Users' });
    }
  },

  // Get a single user by ID
  getUserById: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await Users.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error get User by Id' });
    }
  },

  // Create a new user
  createUser: async (req, res) => {
    const { name, email, password, createdBy } = req.body;
    const hash = bcrypt.hashSync(password, saltRounds)
    try {
      const user = await Users.create({ name, email, hash, createdBy });
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Update an existing user
  updateUser: async (req, res) => {
    const { id } = req.params;
    const hash = bcrypt.hashSync(password, saltRounds)
    const { name, email, password, modifiedBy } = req.body;
    try {
      const user = await Users.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      await user.update({ name, email, hash, modifiedBy });
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete a user
  deleteUser: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await Users.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      await user.destroy();
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

module.exports = UserController;
