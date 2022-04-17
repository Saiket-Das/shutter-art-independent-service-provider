import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Signup = () => {
    return (
        <div className='login-container'>

            <h2 className='login-title text-center mt-4 mb-5'>SIGN UP HERE</h2>

            <div className='login form'>
                <Form>

                    {/* EMAIL FIELD */}
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Your name" />
                    </Form.Group>

                    {/* EMAIL FIELD */}
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Your email" />
                    </Form.Group>

                    {/* PASSWORD FIELD */}
                    <Form.Group className="mb-1" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>



                    {/* onClick={() => setAgree(!agree)}  */}
                    {/* className={`ps-2 ${agree ? '' : 'text-danger'}`} */}
                    <div className='mt-3 mb-3 text-center '>
                        <input type="checkbox" name="terms" id="terms" />
                        <label className='mx-1' htmlFor="terms">Accept Terms and Conditions</label>

                    </div>
                    {/* SUBMIT BUTTON */}
                    <Button className='w-75 mx-auto d-block mb-2 submit-button' variant="" type="submit">
                        Submit
                    </Button>


                </Form>

                <p className='text-center'>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick=''>Login here</Link> </p>

                <SocialLogin></SocialLogin>

            </div>
        </div>
    );
};

export default Signup;