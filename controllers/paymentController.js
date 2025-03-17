const PaymentService = require('../services/PaymentService');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

class PaymentController {
    async getAllPayments(req, res) {
        try {
            const payments = await PaymentService.getAllPayments();
            res.json(payments);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getPaymentById(req, res) {
        const { id } = req.params;
        try {
            const payment = await PaymentService.getPaymentById(id);
            res.json(payment);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createPayment(req, res) {
        try {
            const payment = await PaymentService.createPayment(req.body);
            res.status(201).json(payment);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updatePayment(req, res) {
        const { id } = req.params;
        const updates = req.body;
        try {
            const payment = await PaymentService.updatePayment(id, updates);
            res.json(payment);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deletePayment(req, res) {
        const { id } = req.params;
        try {
            const message = await PaymentService.deletePayment(id);
            res.json(message);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createPaymentIntent(req, res) {
        const { amount, currency } = req.body; // Expect amount and currency from the request body

        // Validate the input
        if (!amount || !currency) {
            return res.status(400).json({ error: 'Amount and currency are required.' });
        }

        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount,
                currency,
            });

            res.json({ clientSecret: paymentIntent.client_secret });
        } catch (error) {
            console.error('Error creating payment intent:', error);
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new PaymentController(); 