import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';

import useAuth from '../../hooks/useAuth';

const AllSpots = () => {
    const { user } = useAuth()
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));

    },
        []);


    return (
        <div>
            <div className='background'>
                <Container>
                    <h2 className='py-3 text-white'>Available Spots</h2>
                    <Row xs={1} lg={1} className="g-3">
                        {

                            services.length === 0 ? <Spinner className='mx-auto' animation="border" /> : services.map((service, index) => <Col key={service._id} className='p-3 ' >
                                <Card className='h-100 hover-card card-border text-start' >
                                    <Card.Img className='img1  ' variant="top" src={service.image} height='300' />
                                    <Card.Body>
                                        <Card.Title>{service.travelerName}</Card.Title>
                                        <Card.Text>
                                            <p >{service.travelLocation}</p>
                                        </Card.Text>
                                        <Card.Text>
                                            <p >{service.travelCategory}</p>
                                        </Card.Text>
                                        <Card.Text>
                                            <p >{service.cost}</p>
                                        </Card.Text>
                                        <Card.Text>
                                            <p>{service.description}</p>
                                        </Card.Text>





                                    </Card.Body>
                                </Card>
                            </Col>

                            )

                        }

                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default AllSpots;