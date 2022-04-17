import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetail.css'
import img from '../../../images/social/facebook.png'
import cart from '../../../images/shopping-cart.png'


const ServiceDetails = () => {

    const { serviceId } = useParams()


    return (
        <div>

            <div className='text-center mt-4'>
                <h2 className='text-center'>PROCCED TO CHECKOU</h2>
                <img style={{ width: '100px' }} src={cart} alt="" />
            </div >
            <div className="container mt-5 ">
                <div className="cart p-3 d-flex">

                    <img src={img} alt="" className='  product-img' />


                    <div className=''>
                        <p className="cetagory-title "><a href="/product/{id}">Wedding Photography</a></p>

                        <div className='text-center details-div'>
                            <span className="price tex-center"> Price:{ }</span>
                            <span className="tier">com</span>
                            <span className="term">No way</span>
                        </div>
                    </div>

                </div>
            </div>


            <div className='text-center mt-5 '>
                <Link to="/checkout">
                    <button className='btn py-2 px-5 rounded btn-primary'>Process Checkout</button>
                </Link>
            </div >


        </div >
    );
};

export default ServiceDetails;