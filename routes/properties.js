const express = require('express');
const router = express.Router();
const PropertyController = require('../controllers/propertyController');

// Define routes and map to controller methods
router.get('/', PropertyController.getAllProperties);
router.get('/:id', PropertyController.getPropertyById);
router.post('/', PropertyController.createProperty);
router.patch('/:id', PropertyController.updateProperty);
router.delete('/:id', PropertyController.deleteProperty);

module.exports = router; 