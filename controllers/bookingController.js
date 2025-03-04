const BookingService = require('../services/BookingService');

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
}

module.exports = new BookingController(); 