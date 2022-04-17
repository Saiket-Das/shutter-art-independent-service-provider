import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Service.css'


const Service = (props) => {

    const { name, comment, img, price } = props.service

    return (

        <div className='service'>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='photography-type'>{name}</Card.Title>

                    <Card.Text>{comment}</Card.Text>
                    <Card.Text className='photography-cost'>Price: ${price}</Card.Text>
                    <Button >Checkout</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;