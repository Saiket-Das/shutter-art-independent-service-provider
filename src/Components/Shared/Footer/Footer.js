import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <div className='footer'>
            <footer className="footer-basic mt-5">

                <h3 className="copyright text-white">Shutter Art &copy;Copyright 2022</h3>

                <ul className="list-inline">
                    <li className="list-inline-item">
                        <a href="#">Home</a>
                    </li>

                    <li className="list-inline-item">
                        <a href="#services">Services</a>
                    </li>

                    <li className="list-inline-item">
                        <a href="#home">About</a>
                    </li>

                    <li className="list-inline-item">
                        <a href="#home">Terms</a>
                    </li>

                    <li className="list-inline-item">
                        <a href="#home">Privacy Policy</a>
                    </li>
                </ul>
            </footer>

        </div>
    );
};

export default Footer;