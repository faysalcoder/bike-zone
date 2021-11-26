import { Typography, Container, Grid } from '@mui/material';
import React from 'react';
import useProducts from '../../Hooks/useProducts';
import Service from '../Services/Service';
import Headers from '../Shared/Headers/Headers';
import SkeletonProvider from '../Shared/SkeletonProvider';

const Expore = () => {
    const { products, isLoading } = useProducts();



    return (
        <div>
            <Headers></Headers>
            <Typography variant='h4' style={{ fontWeight: 'bold', borderBottom: '3px solid #7211F5', display: 'inline-block', margin: '30px' }} >Products</Typography>
            <Container maxWidth='lg' sx={{ my: '20px' }}>

                {
                    isLoading ? <SkeletonProvider></SkeletonProvider> : <Grid container spacing={{ xs: 4, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            products.map(product => <Grid item xs={4} sm={4} md={4} key={product._id}> <Service product={product}></Service> </Grid>)
                        }
                    </Grid>
                }

            </Container>
        </div>
    );
};

export default Expore;