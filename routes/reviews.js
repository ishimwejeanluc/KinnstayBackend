const express = require('express');
const router = express.Router();
const ReviewController = require('../controllers/reviewController');

// Define routes and map to controller methods
router.get('/', ReviewController.getAllReviews);
router.get('/:id', ReviewController.getReviewById);
router.post('/', ReviewController.createReview);
router.patch('/:id', ReviewController.updateReview);
router.delete('/:id', ReviewController.deleteReview);

module.exports = router; 