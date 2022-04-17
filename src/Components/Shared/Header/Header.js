import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
// import headerLogo from '../../../images/logo/camera.png'
import './Header.css'

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignout = () => {
        signOut(auth)
    }
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
                    <Link to='/blogs'>Blogs</Link>

                    {
                        user ?
                            // <button className='sign-out-btn btn btn-link text-decoration-none text-black' onClick={handleSignout}>Sign out</button>
                            <p style={{ cursor: 'pointer' }} className='sign-out-btn d-inline text-decoration-none text-black' onClick={handleSignout}>Sign out</p>
                            :
                            <Link to='/login'>Login</Link>
                    }

                </div>

            </div>

        </div >
    );
};

export default Header;