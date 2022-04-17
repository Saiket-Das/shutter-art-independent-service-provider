import React from 'react';
import useService from '../../Hooks/useService/useService';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {

    const [services, setServices] = useService()


    return (
        <div>
            <h2 className='mt-5 text-center'>MY SERVICES</h2>

            <div className='services mt-4'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;