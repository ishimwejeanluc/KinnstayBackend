const Booking = require('../models/Booking');
const { Op, fn, col, literal } = require('sequelize');
const User = require('../models/User');
const Property = require('../models/Property');
const Payment = require('../models/Payment');

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
        const currentDate = new Date();
        try {
            return await Booking.findAll({
                where: {
                    guest_id: guestId,
                    check_in: {
                        [Op.gt]: currentDate
                    }
                },
                include: [
                    {
                        model: User,
                        as: 'guest',
                        attributes: ['id', 'name', 'email', 'profile_picture']
                    },
                    {
                        model: Property,
                        as: 'property',
                        attributes: ['id', 'title', 'location', 'picture', 'price_per_night']
                    }
                ],
                order: [['check_in', 'ASC']] // Order by upcoming check-in dates
            });
        } catch (error) {
            throw new Error('Error retrieving upcoming bookings: ' + error.message);
        }
    }

    async getRecentBookings(guestId) {
        try {
            return await Booking.findAll({
                where: {
                    guest_id: guestId,
                },
                include: [
                    {
                        model: User,
                        as: 'guest',
                        attributes: ['id', 'name', 'email', 'profile_picture']
                    },
                    {
                        model: Property,
                        as: 'property',
                        attributes: ['id', 'title', 'location', 'picture', 'price_per_night']
                    }
                ],
                order: [['check_in', 'DESC']], // Order by check-in date descending
                limit: 2 // Get the 2 most recent bookings
            });
        } catch (error) {
            throw new Error('Error retrieving recent bookings: ' + error.message);
        }
    }

    async getExpiredBookings(guestId) {
        const currentDate = new Date();
        try {
            return await Booking.findAll({
                where: {
                    guest_id: guestId,
                    check_out: {
                        [Op.lt]: currentDate
                    }
                },
                include: [
                    {
                        model: User,
                        as: 'guest',
                        attributes: ['id', 'name', 'email', 'profile_picture']
                    },
                    {
                        model: Property,
                        as: 'property',
                        attributes: ['id', 'title', 'location', 'picture', 'price_per_night']
                    }
                ],
                order: [['check_out', 'DESC']] // Order by most recently expired first
            });
        } catch (error) {
            throw new Error('Error retrieving expired bookings: ' + error.message);
        }
    }

    async getRecentBookingsByHost(hostId) {
        try {
            return await Booking.findAll({
                include: [
                    {
                        model: Property,
                        as: 'property',
                        where: { host_id: hostId },
                        attributes: ['id', 'title'],
                    },
                    {
                        model: User,
                        as: 'guest',
                        attributes: ['id', 'name', 'email'],
                    },
                    {
                        model: Payment,
                        as: 'payment',
                        attributes: ['amount', 'status'],
                    }
                ],
                order: [['check_in', 'DESC']],
                limit: 3,
            });
        } catch (error) {
            throw new Error('Error retrieving recent bookings by host: ' + error.message);
        }
    }

    async getHostEarnings(hostId) {
        try {
            // Calculate total revenue by month
            const earnings = await Booking.findAll({
                include: [
                    {
                        model: Property,
                        as: 'property',
                        where: { host_id: hostId },
                        attributes: [],
                    },
                    {
                        model: Payment,
                        as: 'payment',
                        attributes: ['amount', 'created_at'],
                    }
                ],
                attributes: [
                    [fn('SUM', col('payment.amount')), 'totalRevenue'],
                    [fn('DATE_TRUNC', 'month', col('payment.created_at')), 'month'],
                ],
                group: [
                    literal('month'),
                    'payment.id'
                ],
                order: [[literal('month'), 'DESC']],
            });

            // Get recent transactions
            const recentTransactions = await Payment.findAll({
                include: [
                    {
                        model: Booking,
                        as: 'booking',
                        include: [
                            {
                                model: Property,
                                as: 'property',
                                where: { host_id: hostId },
                                attributes: ['id', 'title'],
                            }
                        ]
                    }
                ],
                order: [['created_at', 'DESC']],
                limit: 5,
            });

            return { earnings, recentTransactions };
        } catch (error) {
            throw new Error('Error retrieving host earnings: ' + error.message);
        }
    }

    async printBookingAssociations() {
        console.log(Object.keys(Booking.associations));
    }
}

module.exports = new BookingService(); 