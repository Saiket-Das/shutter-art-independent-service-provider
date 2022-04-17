import React from 'react';
import { Carousel } from 'react-bootstrap';
import first from '../../../images/banner/first.jpg'
import second from '../../../images/banner/second.jpg'
import third from '../../../images/banner/third.jpg'
import './Banner.css'


const Banner = () => {
    return (
        <div>
            <Carousel className='banner-container mx-auto mt-5'>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src={first}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3> SOCIAL MEDIA</h3>
                        <p>Facebook : Ahan Bryan || Instagram: Ahan Bryan || Youtube: Ahan Bryan</p>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src={second}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>GEARS</h3>
                        <p>Camera: Sony α6400 || Lens: 18-105mm and 85mm || Drone: Dji Mini 2</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src={third}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>BRAND COLLAB</h3>
                        <p>Ahan x Nomantic || Ahan x Polar Pro || Ahan x Royal Liquid</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;