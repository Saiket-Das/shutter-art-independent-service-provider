import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'


const Login = () => {
    return (
        <div className='login-container'>

            <h2 className='login-title text-center mt-4 mb-5'>LOGIN HERE</h2>

            <div className='login form'>
                <Form>
                    {/* EMAIL FIELD */}
                    <Form.Group className="mb-5" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    {/* PASSWORD FIELD */}
                    <Form.Group className="mb-1" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <p className='text-center'>Forget Password?
                        <button className='btn btn-link text-primary text-decoration-none' onClick=''>Reset Password</button>
                    </p>

                    {/* SUBMIT BUTTON */}
                    <Button className='w-75 mx-auto d-block mb-2 submit-button' variant="" type="submit">
                        Submit
                    </Button>


                </Form>

                <p className='text-center'>Are you new user? <Link to="/signup" className='text-primary pe-auto text-decoration-none' onClick=''>Please Register</Link> </p>

                <SocialLogin></SocialLogin>

            </div>
        </div>
    );
};

export default Login;