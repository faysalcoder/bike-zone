import { Container } from '@mui/material';
import React from 'react';
import Services from '../Services/Services';
import Headers from '../Shared/Headers/Headers';
import Banner from './Banner/Banner';
import Blogs from './Blogs/Blogs';

import Footer from './Footer/Footer';
import ReviewShow from './ReviewShow/ReviewShow';

const Home = () => {
    return (
        <div>
            <Headers></Headers>

            <Banner></Banner>

            <Container maxWidth='lg'>
                <Services></Services>
            </Container>

            <ReviewShow></ReviewShow>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;