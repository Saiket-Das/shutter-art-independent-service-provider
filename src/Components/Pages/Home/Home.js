import React from 'react';
import './Home.css'
// import banner from '../../../images/banner/banner.jpg'
import Services from '../Services/Services';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>

            <Banner></Banner>

            <Services ></Services>

        </div>
    );
};

export default Home;