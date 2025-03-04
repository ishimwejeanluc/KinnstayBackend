const Booking = require('../models/Booking');

class BookingService {
    async getAllBookings() {
        return await Booking.findAll();
    }

    async getBookingById(id) {
        const booking = await Booking.findByPk(id);
        if (!booking) throw new Error('Booking not found');
        return booking;
    }

    async createBooking(data) {
        return await Booking.create(data);
    }

    async updateBooking(id, updates) {
        const booking = await Booking.findByPk(id);
        if (!booking) throw new Error('Booking not found');

        Object.assign(booking, updates);
        await booking.save();
        return booking;
    }

    async deleteBooking(id) {
        const booking = await Booking.findByPk(id);
        if (!booking) throw new Error('Booking not found');

        await booking.destroy();
        return { message: 'Booking deleted successfully' };
    }
}

module.exports = BookingService; 