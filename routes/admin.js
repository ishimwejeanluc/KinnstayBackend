const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/adminController');


// Protect all admin routes
// Only allow admin role

// User routes
router.get('/users', AdminController.getAllUsers);
router.get('/users/:id', AdminController.getUserById);
router.post('/users', AdminController.createUser);
router.patch('/users/:id', AdminController.updateUser);
router.delete('/users/:id', AdminController.deleteUser);

// Property routes
router.get('/properties', AdminController.getAllProperties);
router.get('/properties/:id', AdminController.getPropertyById);
router.post('/properties', AdminController.createProperty);
router.patch('/properties/:id', AdminController.updateProperty);
router.delete('/properties/:id', AdminController.deleteProperty);

// Booking routes
router.get('/bookings', AdminController.getAllBookings);
router.get('/bookings/:id', AdminController.getBookingById);
router.post('/bookings', AdminController.createBooking);
router.patch('/bookings/:id', AdminController.updateBooking);
router.delete('/bookings/:id', AdminController.deleteBooking);

// Payment routes
router.get('/payments', AdminController.getAllPayments);
router.get('/payments/:id', AdminController.getPaymentById);
router.post('/payments', AdminController.createPayment);
router.patch('/payments/:id', AdminController.updatePayment);
router.delete('/payments/:id', AdminController.deletePayment);

// Review routes
router.get('/reviews', AdminController.getAllReviews);
router.get('/reviews/:id', AdminController.getReviewById);
router.post('/reviews', AdminController.createReview);
router.patch('/reviews/:id', AdminController.updateReview);
router.delete('/reviews/:id', AdminController.deleteReview);

module.exports = router; 