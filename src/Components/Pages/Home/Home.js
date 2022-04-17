import React from 'react';
import './Home.css'
import banner from '../../../images/banner/banner.jpg'
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>

            <div className='banner-img mt-5'>
                <img src={banner} alt="" />
            </div>

            {/* <div className='mt-5 text-center mb-5'> */}
            <Services></Services>
            {/* </div> */}
        </div>
    );
};

export default Home;