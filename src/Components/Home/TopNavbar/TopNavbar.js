import React from 'react';
import './TopNavbar.css'
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from 'react-router-dom';

const TopNavbar = () => {
    return (
        <div>
            <Link className='text-decoration-none'>
                <p className='TopNavbar-bg py-2'>Enjoy complimentary carbon neutral shipping on all Hong Kong and Macau orders. <AiOutlinePlus className='plusIcon' /> </p></Link>

        </div>
    );
};

export default TopNavbar;