import { Grid, Typography } from '@mui/material';
import React from 'react';
import useProducts from '../../Hooks/useProducts';
import SkeletonProvider from '../Shared/SkeletonProvider';
import Service from './Service';

const Services = () => {
    const { products, isLoading } = useProducts()
    const featuredProducts = products.slice(0, 6)


    return (
        <div>
            <Typography variant='h4' style={{ fontWeight: 'bold', borderBottom: '3px solid #7211F5', display: 'inline-block', margin: '20px' }} >Products</Typography>
            {
                isLoading ? <SkeletonProvider></SkeletonProvider> :
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 8, md: 12 }} sx={{ my: '20px', textAlign: 'center', mx: '0 auto' }}>


                        {
                            featuredProducts.map(product => <Grid item xs={6} sm={4} md={4} key={product._id} > <Service product={product}></Service> </Grid>)
                        }
                    </Grid>
            }

        </div>
    );
};

export default Services;