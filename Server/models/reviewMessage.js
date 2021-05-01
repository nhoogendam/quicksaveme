import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    gameName: String,
    userEmail: String,
    reviewText: String,
    rating: Number,

    createdAt: {
        type: Date,
        default: new Date()
    },
});

const ReviewMessage = mongoose.model('ReviewMessage', reviewSchema);

export default ReviewMessage;