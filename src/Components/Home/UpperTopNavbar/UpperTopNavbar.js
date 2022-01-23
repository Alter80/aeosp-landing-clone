import React from 'react';
import { Link } from 'react-router-dom';
import './UpperTopNavbar.css'

const UpperTopNavbar = () => {
    return (
        <div className=''>
            <p className='UpperTopNavbar-bg py-2'>In line with government guidelines, our stores in Hong Kong will remain open under adjusted opening hours. <Link className='text-decoration-none text-light' to='./'>For assistance, please click here.</Link></p>
        </div>
    );
};

export default UpperTopNavbar;