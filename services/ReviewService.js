const Review = require('../models/Review');

class ReviewService {
    async getAllReviews() {
        return await Review.findAll();
    }

    async getReviewById(id) {
        const review = await Review.findByPk(id);
        if (!review) throw new Error('Review not found');
        return review;
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

module.exports = ReviewService; 