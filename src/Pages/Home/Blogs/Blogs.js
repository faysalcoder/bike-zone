import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Blogs = () => {
    return (
        <div>
            <Container maxWidth='lg'>
                <Typography variant='h4' style={{ fontWeight: 'bold', borderBottom: '3px solid #7211F5', display: 'inline-block', margin: '30px' }} sx={{ mb: 5 }}>Blogs</Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 8, md: 12 }} sx={{ my: 5, textAlign: 'center' }} >
                    <Grid item xs={6} sm={4} md={4} style={{ padding: '10px' }} >
                        <div >
                            <img style={{ width: '100%' }} src="https://i.ibb.co/G7qXKFv/blog2-1024x1024.jpg" alt="" />
                        </div>
                        <div style={{ padding: '10px', backgroundColor: '#F4F4F4' }}>
                            <Typography variant="h5" style={{ color: '#007ACC', fontWeight: 'bold' }}>What is an e-bike?</Typography>
                            <Typography variant="body2" style={{ color: '#1E1E1E' }}> If you are considering purchasing an electric bike to save money, you have the right idea! The higher price tag is justified...
                            </Typography>
                            <button className='custom-banner-button' style={{ margin: '15px' }}>Read More</button>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={4} md={4} style={{ padding: '10px' }} >
                        <div >
                            <img style={{ width: '100%' }} src="https://i.ibb.co/nDG1HRY/blog3-1024x1024.jpg" alt="" />
                        </div>
                        <div style={{ padding: '10px', backgroundColor: '#F4F4F4' }}>
                            <Typography variant="h5" style={{ color: '#007ACC', fontWeight: 'bold' }}>Electric bikes buyer’s guide</Typography>
                            <Typography variant="body2" style={{ color: '#1E1E1E' }}> If you are considering purchasing an electric bike to save money, you have the right idea! The higher price tag is justified...
                            </Typography>
                            <button className='custom-banner-button' style={{ margin: '15px' }}>Read More</button>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={4} md={4} style={{ padding: '10px' }} >
                        <div >
                            <img style={{ width: '100%' }} src="https://i.ibb.co/c6tb5Hm/blog4-1024x1024.jpg" alt="" />
                        </div>
                        <div style={{ padding: '10px', backgroundColor: '#F4F4F4' }}>
                            <Typography variant="h5" style={{ color: '#007ACC', fontWeight: 'bold' }}>Living with an e-bike</Typography>
                            <Typography variant="body2" style={{ color: '#1E1E1E' }}> If you are considering purchasing an electric bike to save money, you have the right idea! The higher price tag is justified...
                            </Typography>
                            <button className='custom-banner-button' style={{ margin: '15px' }}>Read More</button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Blogs;