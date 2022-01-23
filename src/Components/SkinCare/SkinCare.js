import React from 'react';
import { Link } from 'react-router-dom';
import './SkinCare.css'
import { BsArrowRight } from "react-icons/bs";
import { Col, Row } from 'react-bootstrap';

const SkinCare = () => {
    return (
        <div>
            <div className='skin-care d-flex'>
                <div className='col-md-6 skin-care-video'>

                    <video className='video img-fluid' width='900px' src="/videos/video.mp4" autoPlay loop muted />


                </div>
                <div className='col-md-5   Skin-care-info'> <p>The Athenaeum
                </p>
                    <h2>How to curate a skin care regimen </h2>
                    <p>A well-considered, attentive skin care regimen takes time—a resource that is as finite and precious as our skin. But be assured: time spent caring for the self is always time well spent. </p>
                    <Link className='store-locator-btn text-decoration-none' to='/'><p className='mb-0'>Read our guide</p> <BsArrowRight className='banner-icon' /></Link>
                </div>

            </div>

        </div>
    );
};

export default SkinCare;