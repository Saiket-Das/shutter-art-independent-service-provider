import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';



const RequiredAuth = ({ children }) => {

    const location = useLocation();
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }


    if (!user.emailVerified) {
        return (
            <div className='text-center mt-4'>
                <h3 className='text-danger'>Your Email is not verified!!</h3>
                <h5 className='text-success'> Please Verify your email.</h5>

                <button
                    className='btn btn-primary'
                    onClick={async () => {
                        await sendEmailVerification();
                        toast('Sent email');
                    }}
                >
                    Send Verification
                </button>
                <ToastContainer></ToastContainer>

            </div>
        );
    }
    return children;
};

export default RequiredAuth;