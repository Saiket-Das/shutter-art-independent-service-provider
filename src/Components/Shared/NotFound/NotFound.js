import React from 'react';
import notFound from '../../../images/notFound.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notFound-container'>
            <img className='notFound-img img-fluid' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;