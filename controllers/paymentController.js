const PaymentService = require('../services/PaymentService');

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
}

module.exports = new PaymentController(); 