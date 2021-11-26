
import { Avatar, Card, CardContent, CardHeader, Typography, IconButton, CardActions, Grid, Container, Rating } from '@mui/material';


import React, { useEffect, useState } from 'react';
import { red } from '@mui/material/colors';






const ReviewShow = () => {


    const [reviews, setReviews] = useState([])

    console.log(reviews)

    const filterReviews = reviews.slice(0, 4)

    useEffect(() => {
        fetch('https://infinite-castle-70516.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>

            <Container maxWidth='lg'>
                <Typography variant='h3' style={{ borderBottom: '3px solid #7211F5', display: 'inline-block', margin: '30px' }}>
                    Our Valuable Client Say
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ my: '20px' }}>

                    {filterReviews.map(review => (
                        <Grid item xs={2} sm={4} md={3} key={review._id}>

                            <Card sx={{ maxWidth: 345 }}>

                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                            {
                                                reviews.length ? <img src={review.photoUrl} style={{ width: '100%' }} alt="" /> : review.name.slice(1)
                                            }
                                        </Avatar>

                                    }
                                    action={
                                        <IconButton aria-label="settings">

                                        </IconButton>
                                    }
                                    title={<Typography variant="body1" color="success">
                                        {review.name}
                                    </Typography>}
                                    subheader={<Rating name="read-only" value={review.rating} readOnly />}
                                />

                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {review.review}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">

                                    </IconButton>
                                    <IconButton aria-label="share">

                                    </IconButton>


                                </CardActions>

                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default ReviewShow;