import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts';


import './Footer.css';

const Footer = () => {
    const { products } = useProducts();
    const featuredProducts = products.slice(0, 6)
    return (
        <div>
            {/* <!-- Footer --> */}
            <footer className=" text-center text-lg-start bg-light text-light">

                <div className='bg-custom'>

                    <section>
                        <div className="container text-light text-center text-md-start pt-4 mt-5">
                            {/* <!-- Grid row --> */}
                            <div className="row mt-3">
                                {/* <!-- Grid column --> */}
                                <div className="col-md-3 text-light col-lg-4 col-xl-3 mx-auto mb-4">
                                    {/* <!-- Content --> */}
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        <img src="https://i.ibb.co/DGhrQWc/blogo.png" alt="" />
                                    </h6>
                                    <p className='text-light'>
                                        We believe in a world where you have total freedom to be you, without judgement. To experiment. To express yourself.
                                    </p>
                                </div>
                                {/* <!-- Grid column -->

        <!-- Grid column --> */}
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    {/* <!-- Links --> */}
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        Services


                                    </h6>

                                    {
                                        featuredProducts.map(product => <p key={product._id}>
                                            <NavLink to={`/placeorder/${product._id}`} className="text-light">{product.name}</NavLink>
                                        </p>)
                                    }


                                </div>
                                {/* <!-- Grid column -->

        <!-- Grid column --> */}
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    {/* <!-- Links --> */}
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        Useful links
                                    </h6>
                                    <p>
                                        <NavLink to="/explore" className="text-light">Explore Products</NavLink>
                                    </p>
                                    <p>
                                        <NavLink to="/login" className="text-light">Login </NavLink>
                                    </p>
                                    <p>
                                        <NavLink to="/dashboard" className="text-light">Dashboard</NavLink>
                                    </p>

                                </div>
                                {/* <!-- Grid column -->

        <!-- Grid column --> */}
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 foot">
                                    {/* <!-- Links --> */}
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        Contact
                                    </h6>
                                    <p><i className="fas fa-home me-3"></i> Dhaka, Bangladesh</p>
                                    <p>
                                        <i className="fas fa-envelope me-3"></i> info@bikezone.com.bd
                                    </p>
                                    <p><i className="fas fa-phone me-3"></i> 01750485095</p>

                                </div>
                                {/* <!-- Grid column --> */}
                            </div>
                            {/* <!-- Grid row --> */}
                        </div>
                    </section>
                </div>
                {/* <!-- Section: Links  -->

  <!-- Copyright --> */}
                <div className=" bg-custom2 p-4" >
                    <div className='container px-4 text-center'>
                        <p>© 2021 Copyright || Bikezone.com.bd</p>

                    </div>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
            {/* <!-- Footer --> */}
        </div>
    );
};

export default Footer;