import express from 'express';

import { getReview, createReview, updateReview } from '../controllers/reviews.js';

const router = express.Router();

router.get('/', getReview);
router.post('/', createReview);
router.patch('/:id', updateReview);

export default router;
