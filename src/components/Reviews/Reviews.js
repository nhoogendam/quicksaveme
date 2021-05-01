import React from 'react';
import { useSelector } from 'react-redux';
import {Grid, CircularProgress } from '@material-ui/core';

import Review from './Review/Review.js';
import useStyles from './styles';

const Reviews = () => {
    const reviews = useSelector((state) => state.reviews);
    const classes = useStyles();
    console.log(reviews);
    return (
        !reviews.length ? <CircularProgress /> : (
            <Grid className = { classes.container } container alignItems="stretch" spacing={3}>
                {reviews.map((review) => (
                    <Grid key={review._id} item xs={12} sm = {6}>
                        <Review review={review} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Reviews;