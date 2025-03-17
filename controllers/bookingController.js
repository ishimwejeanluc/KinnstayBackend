const BookingService = require('../services/BookingService');
const Booking = require('../models/Booking');
const { Op } = require('sequelize');
const User = require('../models/User');
const Property = require('../models/Property');

class BookingController {
    async getAllBookings(req, res) {
        try {
            const bookings = await BookingService.getAllBookings();
            res.json(bookings);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getBookingById(req, res) {
        const { id } = req.params;
        try {
            const booking = await BookingService.getBookingById(id);
            res.json(booking);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createBooking(req, res) {
        try {
            const booking = await BookingService.createBooking(req.body);
            res.status(201).json(booking);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateBooking(req, res) {
        const { id } = req.params;
        const updates = req.body;
        try {
            const booking = await BookingService.updateBooking(id, updates);
            res.json(booking);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteBooking(req, res) {
        const { id } = req.params;
        try {
            const message = await BookingService.deleteBooking(id);
            res.json(message);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getUpcomingBookings(req, res) {
        const { guestId } = req.params;

        try {
            const upcomingBookings = await BookingService.getUpcomingBookings(guestId);

            if (upcomingBookings.length === 0) {
                return res.status(404).json({ message: 'No upcoming bookings found for this guest.' });
            }

            res.json(upcomingBookings);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async getRecentBookings(req, res) {
        const { guestId } = req.params;
        try {
            const recentBookings = await BookingService.getRecentBookings(guestId);
            res.json(recentBookings);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getExpiredBookings(req, res) {
        const { guestId } = req.params;
        try {
            const expiredBookings = await BookingService.getExpiredBookings(guestId);
            res.json(expiredBookings);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getRecentBookingsByHost(req, res) {
        const { hostId } = req.params;
        try {
            const bookings = await BookingService.getRecentBookingsByHost(hostId);
            res.json(bookings);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    }

    async getHostEarnings(req, res) {
        const { hostId } = req.params;
        try {
            const earnings = await BookingService.getHostEarnings(hostId);
            res.json(earnings);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    }

    async getRecentBookings(req, res) {
        const { guestId } = req.params;
        try {
            const recentBookings = await BookingService.getRecentBookings(guestId);
            res.json(recentBookings);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getExpiredBookings(req, res) {
        const { guestId } = req.params;
        try {
            const expiredBookings = await BookingService.getExpiredBookings(guestId);
            res.json(expiredBookings);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new BookingController(); 