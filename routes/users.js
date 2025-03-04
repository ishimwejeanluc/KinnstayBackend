const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Define routes and map to controller methods
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);
router.patch('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router; 