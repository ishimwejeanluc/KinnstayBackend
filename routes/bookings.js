const express = require('express');
const router = express.Router();
const BookingController = require('../controllers/bookingController');

// Define routes and map to controller methods
router.get('/', BookingController.getAllBookings);
router.get('/:id', BookingController.getBookingById);
router.post('/', BookingController.createBooking);
router.patch('/:id', BookingController.updateBooking);
router.delete('/:id', BookingController.deleteBooking);
router.get('/recent/:guestId', BookingController.getRecentBookings);
router.get('/upcoming/:guestId', BookingController.getUpcomingBookings);
router.get('/expired/:guestId', BookingController.getExpiredBookings);
router.get('/recent-by-host/:hostId', BookingController.getRecentBookingsByHost);
router.get('/host-earnings/:hostId', BookingController.getHostEarnings);

module.exports = router; 