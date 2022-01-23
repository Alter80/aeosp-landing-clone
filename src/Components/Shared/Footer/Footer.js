import React from 'react';
import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Footer.css'
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <Row className='footer-bg '>
                <Col className=' my-5 col-md-4 input '>
                    <InputGroup className="footer-sub mb-3 ms-5">

                        <FormControl
                            placeholder='Email address '
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default" />

                    </InputGroup>
                    <div className='d-flex ms-5 '>
                        <Form.Check aria-label="option 1" /><p className='ms-3'> Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our privacy policy </p>
                    </div>
                </Col>
                <Col className='  col-md-2 footer-res'>
                    <p>Orders and support</p>
                    <hr className='hr__style' />
                    <Link className='text-decoration-none footer-text'> <p>Contact us</p></Link>
                    <Link className='text-decoration-none footer-text '><p>FAQs </p></Link>
                    <Link className='text-decoration-none footer-text'><p>Shipping </p></Link>
                    <Link className='text-decoration-none footer-text'><p>Returns </p></Link>
                    <Link className='text-decoration-none footer-text'><p>Order history</p></Link>
                    <Link className='text-decoration-none footer-text'><p>Terms and conditions</p></Link>

                </Col>
                <Col className='  my-5 col-md-3 footer-res'>
                    <p>Services</p>
                    <hr className='hr__style' />
                    <Link className='text-decoration-none footer-text'><p>Live assistance</p></Link>
                    <Link className='text-decoration-none footer-text'><p>Corporate gifts</p></Link>
                    <Link className='text-decoration-none footer-text'><p>Facial appointments</p></Link>
                </Col>
                <Col className='my-5 col-md-2 .footer-res'>
                    <p>Location preferences</p>
                    <hr className='hr__style' />
                    <p>Shipping:
                        Hong Kong (S.A.R)</p>
                    <p>Language:
                        English</p>
                </Col>
            </Row>
            <Row className='footer-bg '>
                <Col className='col-md-4 footer-res'>
                    <p>Sustainability</p>
                    <hr className='hr__style' />
                    <p>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
                </Col>
                <Col className='col-md-2 footer-res'>
                    <p>About</p>
                    <hr className='hr__style' />
                    <Link className='text-decoration-none footer-text'><p>Our story</p></Link>
                    <Link className='text-decoration-none footer-text'><p>Foundation </p></Link>
                    <Link className='text-decoration-none footer-text'><p>Careers</p></Link>
                    <Link className='text-decoration-none footer-text'><p>Privacy policy</p></Link>
                    <Link className='text-decoration-none footer-text'><p>Accessibility
                    </p></Link>
                </Col>
                <Col className='col-md-3 footer-res '>
                    <p>Social media</p>
                    <hr className='hr__style' />
                    <Link className='text-decoration-none footer-text'><p>Instagram </p></Link>
                    <Link className='text-decoration-none footer-text'><p>Twitter </p></Link>
                    <Link className='text-decoration-none footer-text'><p>LinkedIn </p></Link>
                    <Link className='text-decoration-none footer-text'><p>WeChat</p></Link>
                    <Link className='text-decoration-none footer-text'><p>Weibo </p></Link>
                </Col>
                <Col className='col-md-2'></Col>
                <hr className='hr__style1' />
                <p className='footer-bottom ms-5'>© Aesop</p>
            </Row>

        </div>
    );
};

export default Footer;