import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Signup.css'


const Signup = () => {

    const navigate = useNavigate()
    let errorPara;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleSignUp = async (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
    }

    if (user) {
        navigate('/home')
    }

    if (error) {
        errorPara = <p className='text-danger text-center'>{error?.message.slice(22, -2)}</p>
    }

    if (loading) {
        return <Loading></Loading>
    }



    return (
        <div className='login-container'>

            <h2 className='login-title text-center mt-4 mb-5'>SIGN UP HERE</h2>

            <div className='login form'>


                <Form onSubmit={handleSignUp}>
                    {/* EMAIL FIELD */}
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control type="name" name='name' placeholder="Your name" />
                    </Form.Group>

                    {/* EMAIL FIELD */}
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control type="email" name='email' placeholder="Your email" />
                    </Form.Group>

                    {/* PASSWORD FIELD */}
                    <Form.Group className="mb-1" controlId="formBasicPassword">
                        <Form.Control type="password" name='password' placeholder="Password" />
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
                {errorPara}


                <p className='text-center'>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick=''>Login here</Link> </p>

                <SocialLogin></SocialLogin>

            </div>
        </div>
    );
};

export default Signup;