import { Card, CardActions, CardContent, CardMedia, Typography, Button, Divider } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ product }) => {
    const { name, image, price, description, _id } = product
    return (
        <div>
            <Card sx={{ maxWidth: 500 }}>
                <CardMedia
                    component="img"
                    height="100%"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <Divider />
                <CardActions style={{ display: 'flex', justifyContent: "space-around" }}>
                    <Typography variant="h6" >
                        {price}
                    </Typography>
                    <Link to={`/placeorder/${_id}`} style={{ textDecoration: 'none' }}><Button variant='contained'>Buy Now</Button></Link>

                </CardActions>
            </Card>
        </div>
    );
};

export default Service;