const express = require('express');
const router = express.Router();
const BookingController = require('../controllers/bookingController');

// Define routes and map to controller methods
router.get('/', BookingController.getAllBookings);
router.get('/:id', BookingController.getBookingById);
router.post('/', BookingController.createBooking);
router.patch('/:id', BookingController.updateBooking);
router.delete('/:id', BookingController.deleteBooking);

module.exports = router; 