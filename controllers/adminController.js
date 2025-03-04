const AdminService = require('../services/adminService');

class AdminController {
    // User methods
    async getAllUsers(req, res) {
        try {
            const users = await AdminService.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getUserById(req, res) {
        const { id } = req.params;
        try {
            const user = await AdminService.getUserById(id);
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createUser(req, res) {
        try {
            const user = await AdminService.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updateUser(req, res) {
        const { id } = req.params;
        try {
            const user = await AdminService.updateUser(id, req.body);
            res.json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteUser(req, res) {
        const { id } = req.params;
        try {
            const message = await AdminService.deleteUser(id);
            res.json(message);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    // Property methods
    async getAllProperties(req, res) {
        try {
            const properties = await AdminService.getAllProperties();
            res.json(properties);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getPropertyById(req, res) {
        const { id } = req.params;
        try {
            const property = await AdminService.getPropertyById(id);
            if (!property) return res.status(404).json({ message: 'Property not found' });
            res.json(property);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createProperty(req, res) {
        try {
            const property = await AdminService.createProperty(req.body);
            res.status(201).json(property);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updateProperty(req, res) {
        const { id } = req.params;
        try {
            const property = await AdminService.updateProperty(id, req.body);
            res.json(property);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteProperty(req, res) {
        const { id } = req.params;
        try {
            const message = await AdminService.deleteProperty(id);
            res.json(message);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    // Booking methods
    async getAllBookings(req, res) {
        try {
            const bookings = await AdminService.getAllBookings();
            res.json(bookings);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getBookingById(req, res) {
        const { id } = req.params;
        try {
            const booking = await AdminService.getBookingById(id);
            if (!booking) return res.status(404).json({ message: 'Booking not found' });
            res.json(booking);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createBooking(req, res) {
        try {
            const booking = await AdminService.createBooking(req.body);
            res.status(201).json(booking);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updateBooking(req, res) {
        const { id } = req.params;
        try {
            const booking = await AdminService.updateBooking(id, req.body);
            res.json(booking);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteBooking(req, res) {
        const { id } = req.params;
        try {
            const message = await AdminService.deleteBooking(id);
            res.json(message);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    // Payment methods
    async getAllPayments(req, res) {
        try {
            const payments = await AdminService.getAllPayments();
            res.json(payments);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getPaymentById(req, res) {
        const { id } = req.params;
        try {
            const payment = await AdminService.getPaymentById(id);
            if (!payment) return res.status(404).json({ message: 'Payment not found' });
            res.json(payment);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createPayment(req, res) {
        try {
            const payment = await AdminService.createPayment(req.body);
            res.status(201).json(payment);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updatePayment(req, res) {
        const { id } = req.params;
        try {
            const payment = await AdminService.updatePayment(id, req.body);
            res.json(payment);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deletePayment(req, res) {
        const { id } = req.params;
        try {
            const message = await AdminService.deletePayment(id);
            res.json(message);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    // Review methods
    async getAllReviews(req, res) {
        try {
            const reviews = await AdminService.getAllReviews();
            res.json(reviews);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getReviewById(req, res) {
        const { id } = req.params;
        try {
            const review = await AdminService.getReviewById(id);
            if (!review) return res.status(404).json({ message: 'Review not found' });
            res.json(review);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createReview(req, res) {
        try {
            const review = await AdminService.createReview(req.body);
            res.status(201).json(review);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updateReview(req, res) {
        const { id } = req.params;
        try {
            const review = await AdminService.updateReview(id, req.body);
            res.json(review);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteReview(req, res) {
        const { id } = req.params;
        try {
            const message = await AdminService.deleteReview(id);
            res.json(message);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = new AdminController(); 