const User = require('../models/User');
const Property = require('../models/Property');
const Booking = require('../models/Booking');
const Payment = require('../models/Payment');
const Review = require('../models/Review');

class AdminService {
    // User methods
    async getAllUsers() {
        return await User.findAll();
    }

    async getUserById(id) {
        return await User.findByPk(id);
    }

    async createUser(data) {
        return await User.create(data);
    }

    async updateUser(id, updates) {
        const user = await User.findByPk(id);
        if (!user) throw new Error('User not found');
        Object.assign(user, updates);
        await user.save();
        return user;
    }

    async deleteUser(id) {
        const user = await User.findByPk(id);
        if (!user) throw new Error('User not found');
        await user.destroy();
        return { message: 'User deleted successfully' };
    }

    // Property methods
    async getAllProperties() {
        return await Property.findAll();
    }

    async getPropertyById(id) {
        return await Property.findByPk(id);
    }

    async createProperty(data) {
        return await Property.create(data);
    }

    async updateProperty(id, updates) {
        const property = await Property.findByPk(id);
        if (!property) throw new Error('Property not found');
        Object.assign(property, updates);
        await property.save();
        return property;
    }

    async deleteProperty(id) {
        const property = await Property.findByPk(id);
        if (!property) throw new Error('Property not found');
        await property.destroy();
        return { message: 'Property deleted successfully' };
    }

    // Booking methods
    async getAllBookings() {
        return await Booking.findAll();
    }

    async getBookingById(id) {
        return await Booking.findByPk(id);
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

    // Payment methods
    async getAllPayments() {
        return await Payment.findAll();
    }

    async getPaymentById(id) {
        return await Payment.findByPk(id);
    }

    async createPayment(data) {
        return await Payment.create(data);
    }

    async updatePayment(id, updates) {
        const payment = await Payment.findByPk(id);
        if (!payment) throw new Error('Payment not found');
        Object.assign(payment, updates);
        await payment.save();
        return payment;
    }

    async deletePayment(id) {
        const payment = await Payment.findByPk(id);
        if (!payment) throw new Error('Payment not found');
        await payment.destroy();
        return { message: 'Payment deleted successfully' };
    }

    // Review methods
    async getAllReviews() {
        return await Review.findAll();
    }

    async getReviewById(id) {
        return await Review.findByPk(id);
    }

    async createReview(data) {
        return await Review.create(data);
    }

    async updateReview(id, updates) {
        const review = await Review.findByPk(id);
        if (!review) throw new Error('Review not found');
        Object.assign(review, updates);
        await review.save();
        return review;
    }

    async deleteReview(id) {
        const review = await Review.findByPk(id);
        if (!review) throw new Error('Review not found');
        await review.destroy();
        return { message: 'Review deleted successfully' };
    }
}

module.exports = new AdminService(); 