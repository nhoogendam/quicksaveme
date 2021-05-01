import React, { useState } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createReview } from '../../actions/reviews.js';

const Form = () => {
    const classes = useStyles();
    const [reviewData, setReviewData] = useState({gameName:'', userEmail:'', reviewText:'',  rating: 0});
    const dispatch = useDispatch();
        
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!(reviewData.gameName === '' ||
           reviewData.userEmail === '' ||
           (Number.isInteger(reviewData.rating)))){
                if(reviewData.rating > 0 && reviewData.rating <= 5)
                    dispatch(createReview(reviewData));
           }
    }

    const clear = () => {

    }
    
    return(
        <Paper className = {classes.paper}>
             <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h5">Creating a Review</Typography>
                <TextField name="gameName" required = "true" variant="outlined" label="Game" fullWidth value={reviewData.gameName} onChange={(e) => setReviewData({ ...reviewData,  gameName: e.target.value})}/>
                <TextField name="userEmail" required = "true" variant="outlined"  label="Email" fullWidth value={reviewData.userEmail} onChange={(e) => setReviewData({ ...reviewData,  userEmail: e.target.value})}/>
                <TextField name="reviewText"  variant="outlined" label="Review"  multiline = "true"  rows = "8" fullWidth value={reviewData.reviewText}  onChange={(e) => setReviewData({ ...reviewData,  reviewText: e.target.value})}  />
                <TextField name="rating"  variant="outlined" label="Rating"   fullWidth value={reviewData.rating}  onChange={(e) => setReviewData({ ...reviewData,  rating: e.target.value})}  />
                {/* <Typography variant="h6">Rating*</Typography> */}
                {/* <Slider name = "rating" label = "Rating"  step = {1} valueLabelDisplay = "on" defaultValue = {1} min = {1} max = {5} marks={true} onChange={(e) => setReviewData({ ...reviewData,  rating: e.target.value})}/> */}
                <Button className = {classes.buttonSubmit} variant= "contained" color = "primary" size= "large" type="submit" fullWidth>Submit</Button>
                <Button  variant= "contained" color = "secondary" size= "small" onClick = {clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;