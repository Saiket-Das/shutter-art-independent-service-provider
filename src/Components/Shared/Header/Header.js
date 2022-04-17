import React from 'react';
import { Link } from 'react-router-dom';
// import headerLogo from '../../../images/logo/camera.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header '>

            <div className='navbar mx-auto'>

                <div className='logo-title'>
                    {/* <Link to='/home'><img className='navbar-img' src={headerLogo} alt="" /></Link> */}
                    <Link to='/home'><h2 className='title pt-2'>Shutter Art</h2></Link>
                </div>

                <div className='link'>
                    <Link to='/home'>Home</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/Shop'>Shop</Link>
                    <Link to='/login'>Login</Link>
                </div>

            </div>

        </div>
    );
};

export default Header;