const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/paymentController');

// Define routes and map to controller methods
router.get('/', PaymentController.getAllPayments);
router.get('/:id', PaymentController.getPaymentById);
router.post('/', PaymentController.createPayment);
router.patch('/:id', PaymentController.updatePayment);
router.delete('/:id', PaymentController.deletePayment);
router.post('/create-payment-intent', PaymentController.createPaymentIntent);

module.exports = router; 