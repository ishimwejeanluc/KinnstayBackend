const ReviewService = require('../services/ReviewService');

class ReviewController {
    async getAllReviews(req, res) {
        try {
            const reviews = await ReviewService.getAllReviews();
            res.json(reviews);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getReviewById(req, res) {
        const { id } = req.params;
        try {
            const review = await ReviewService.getReviewById(id);
            res.json(review);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createReview(req, res) {
        try {
            const review = await ReviewService.createReview(req.body);
            res.status(201).json(review);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateReview(req, res) {
        const { id } = req.params;
        const updates = req.body;
        try {
            const review = await ReviewService.updateReview(id, updates);
            res.json(review);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteReview(req, res) {
        const { id } = req.params;
        try {
            const message = await ReviewService.deleteReview(id);
            res.json(message);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new ReviewController(); 