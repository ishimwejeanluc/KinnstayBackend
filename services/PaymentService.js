const Payment = require('../models/Payment');

class PaymentService {
    async getAllPayments() {
        return await Payment.findAll();
    }

    async getPaymentById(id) {
        const payment = await Payment.findByPk(id);
        if (!payment) throw new Error('Payment not found');
        return payment;
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
}

module.exports = new PaymentService(); 