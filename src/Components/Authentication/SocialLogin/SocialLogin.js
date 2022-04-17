import React from 'react';
import googleImg from '../../../images/social/search (1).png'
import faceBookImg from '../../../images/social/facebook.png'
import './SocialLogin.css'



const SocialLogin = () => {
    return (
        <div>
            {/* GOOGLE LOGIN BUTTON  */}
            <button className="google-button btn w-75 d-block mx-auto mb-3">
                <img style={{ width: '30px' }} className='mx-2' src={googleImg} alt="" />
                <span className='contiune-google'>Contiune with Google</span>
            </button>

            <button className="google-button btn w-75 d-block mx-auto mb-4">
                <img style={{ width: '30px' }} className='mx-2' src={faceBookImg} alt="" />
                <span className='contiune-google'>Contiune with FaceBook</span>
            </button>
        </div>
    );
};

export default SocialLogin;