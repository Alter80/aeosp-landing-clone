import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
import { BsArrowRight } from "react-icons/bs";

const Banner = () => {
    return (
        <div className='banner-img'>
            <div className='d-flex text-white'>
                <h2 className='banner-text'>Aesop</h2>
                <div className='text-white banner-text2'>
                    <h2 >In boldness, a bond</h2>
                    <p>Celebrating the power of self-expression this Lunar New Year through </p>
                    <p>gestures replete with character.</p>
                    <Link className='banner-btn text-decoration-none' to='/'><p className='mb-0'>Browse all gifts</p> <BsArrowRight className='banner-icon' /></Link>
                </div>

            </div>

        </div>
    );
};

export default Banner;