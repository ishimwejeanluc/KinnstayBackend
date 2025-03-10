const Booking = require('../models/Booking');
const { Op } = require('sequelize');
const User = require('../models/User');
const Property = require('../models/Property');

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

    async getUpcomingBookings(guestId) {
        const currentDate = new Date(); // Get the current date

        try {
            const upcomingBookings = await Booking.findAll({
                where: {
                    guest_id: guestId,
                    check_in: {
                        [Op.gt]: currentDate // Only get bookings with check_in date in the future
                    }
                },
                include: [
                    {
                        model: User,
                        as: 'guest',
                        attributes: ['id', 'name', 'email'] // Include guest details if needed
                    },
                    {
                        model: Property,
                        as: 'property',
                        attributes: ['id', 'name', 'location'] // Include property details if needed
                    }
                ]
            });

            return upcomingBookings; // Return the found bookings
        } catch (error) {
            throw new Error('Error retrieving upcoming bookings: ' + error.message);
        }
    }
}

module.exports = new BookingService(); 