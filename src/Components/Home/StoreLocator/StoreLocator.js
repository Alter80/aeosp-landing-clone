import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './StoreLocator.css'
import { BsArrowRight } from "react-icons/bs";

import Slider from "react-slick";

const StoreLocator = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        arrows: false
    };
    return (
        <div className='store-locator-main'>
            <Row className='store-locator d-flex justify-content-end'>
                <Col className='col-md-5 store-locator-info'>
                    <h2>Store locator</h2>
                    <p>Our consultants are available to host you in-store and <br /> provide tailored guidance on gift purchases. </p>
                    <Link className='store-locator-btn text-decoration-none' to='/'><p className='mb-0'>Find a nearby store</p> <BsArrowRight className='banner-icon' /></Link>
                </Col>



                <Col className='col-md-6 store-locator-slider'>

                    <Slider {...settings}>
                        <div>
                            <h3><img className='img-fluid' height='600' src="https://www.aesop.com/u1nb1km7t5q7/40xVxq4tBdXpyJLXVTQPvO/aa8ef7a4cca7a713e12b58f1ab8cc6ea/Aesop-HK-K11-Hero-Bleed-Desktop-2880x1620px.jpg" alt="" /></h3>
                        </div>
                        <div>
                            <h3><img className='img-fluid' height='600' src="https://www.aesop.com/u1nb1km7t5q7/DqJCGx3tPeDqODieHw5uA/48f50fbd1758ee27990a600c131bd2ce/Aesop-HK-New-Town-Plaza-Hero-Bleed-Desktop-2880x1620px.jpg" alt="" /></h3>
                        </div>
                        <div>
                            <h3><img className='img-fluid' height='600' src="https://www.aesop.com/u1nb1km7t5q7/3b6KRiDt3QpNut8LoYGgB9/1d62a7373daa8a6ba4dff6ea300b891e/Aesop-HK-Hollywood-Road-Hero-Desktop-2880x1620.jpg" alt="" /></h3>
                        </div>

                    </Slider>

                </Col>

            </Row>
        </div>
    );
};

export default StoreLocator;