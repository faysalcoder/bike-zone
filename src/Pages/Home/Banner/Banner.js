import { Button } from '@mui/material';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { blue } from '@mui/material/colors';

const Banner = () => {
    return (
        <div>
            <Carousel className='mb-5'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Tvs2Dfc/banner1.jpg"
                        alt="First slide"

                    />
                    <Carousel.Caption style={{ top: '120px', right: '700px' }}>
                        <h1 style={{ fontSize: '60px' }}>Safe Ride On Way</h1>
                        <p>Ride with a comfort, Ride with a variant.</p>
                        <button className='custom-banner-button'>Buy Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/vXWVYRw/banner2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption style={{ top: '150px', left: '550px' }}>
                        <h1 style={{ fontSize: '60px' }}>Safe Ride On Way</h1>
                        <p>We believe in a world where you</p>
                        <button className='custom-banner-button'>Buy Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src=" https://i.ibb.co/MVfYyJQ/banner3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption style={{ top: '150px', left: '550px' }}>
                        <h1 style={{ fontSize: '60px' }}>Safe Ride On Way</h1>
                        <p>To experiment. To express yourself.</p>
                        <button className='custom-banner-button'>Buy Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;