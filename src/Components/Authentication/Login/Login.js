import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';




const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    // const location = useLocation();
    let errorPara;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)
    }

    if (error) {
        errorPara = <p className='text-danger text-center'>{error?.message.slice(22, -2)}</p>
    }



    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }

    return (
        <div className='login-container'>

            <h2 className='login-title text-center mt-4 mb-5'>LOGIN HERE</h2>

            <div className='login form'>
                <Form onSubmit={handleSubmit}>
                    {/* EMAIL FIELD */}
                    <Form.Group className="mb-5" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    </Form.Group>

                    {/* PASSWORD FIELD */}
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                    </Form.Group>


                    {errorPara}
                    {/* SUBMIT BUTTON */}
                    <Button className='w-75 mx-auto d-block mb-2 submit-button' variant="" type="submit">
                        Submit
                    </Button>

                </Form>


                <p className='text-center'>Forget Password?
                    <button className='btn btn-link text-primary text-decoration-none' onClick={resetPassword}>Reset Password</button>
                </p>

                <p className='text-center'>Are you new user? <Link to="/signup" className='text-primary pe-auto text-decoration-none' onClick=''>Please Register</Link> </p>

                <SocialLogin></SocialLogin>

            </div>
        </div>
    );
};

export default Login;