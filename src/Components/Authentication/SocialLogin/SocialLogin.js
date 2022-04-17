import React from 'react';
import googleImg from '../../../images/social/search (1).png'
import faceBookImg from '../../../images/social/facebook.png'
import './SocialLogin.css'
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { useNavigate } from 'react-router-dom';



const SocialLogin = () => {

    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user1, loading1, error1] = useSignInWithFacebook(auth);
    let errorPara;

    if (loading) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorPara = <p className='text-danger text-center'>{error?.message.slice(22, -2)}</p>
    }

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (user || user1) {
        navigate('/home');
    }


    return (
        <div>
            {/* GOOGLE LOGIN BUTTON  */}
            <button onClick={() => signInWithGoogle()} className="google-button btn w-75 d-block mx-auto mb-3">
                <img style={{ width: '30px' }} className='mx-2' src={googleImg} alt="" />
                <span className='contiune-google'>Contiune with Google</span>
            </button>

            <button onClick={() => signInWithFacebook()}
                className="google-button btn w-75 d-block mx-auto mb-4">
                <img style={{ width: '30px' }} className='mx-2' src={faceBookImg} alt="" />
                <span className='contiune-google'>Contiune with FaceBook</span>
            </button>
            {errorPara}
        </div>
    );
};

export default SocialLogin;