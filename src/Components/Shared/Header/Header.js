import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomHook from '../../Hooks/Active Link/CustomHook';
import './Header.css'

const Header = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    const handleSignout = () => {
        signOut(auth);
        navigate('/login')

    }
    return (
        <div className='header '>

            <div className='navbar mx-auto'>

                <div className='logo-title'>

                    <Link to='/home'><h2 className='title pt-2'>Shutter Art</h2></Link>
                </div>

                <div className='link'>
                    <CustomHook className='a' to='/home'>Home</CustomHook>

                    <CustomHook className='a' to='/blogs'>Blogs</CustomHook>

                    <CustomHook className='a' to='/about'>About me</CustomHook>

                    {
                        user ?

                            <p style={{ cursor: 'pointer' }} className='sign-out-btn d-inline text-decoration-none text-black' onClick={handleSignout}>Sign out</p>
                            :
                            <CustomHook className='a' to='/login'>Login</CustomHook>
                    }

                </div>

            </div>

        </div >
    );
};

export default Header;