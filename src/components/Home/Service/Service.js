import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import './Service.css'

const Service = () => {
    const { services } = useFetch();
    console.log(services)
    const randomCar = services.sort((first, second) => 0.5 - Math.random());
    return (
        <div className='background'>
            <Container>
                <h2 className='py-3 text-white'>Available Cars</h2>
                <Row xs={1} lg={3} className="g-3">
                    {

                        randomCar.length === 0 ? <Spinner className='mx-auto' animation="border" /> : randomCar.slice(0, 6).map((service, index) => <Col key={service._id} className='p-3 ' >
                            <Card className='h-100 hover-card card-border' >
                                <Card.Img className='img1  ' variant="top" src={service.image} height='300' />
                                <Card.Body>
                                    <Card.Title>{service.name}</Card.Title>
                                    <Card.Text>
                                        <p className='text-muted'>{service.bodytype}</p>
                                    </Card.Text>
                                    <Card.Text>
                                        <p>{service.description.slice(0, 160)}</p>
                                    </Card.Text>
                                    {/* <Link to={`/services/${service._id}`}><button>update</button></Link> */}
                                    <br />
                                    <Link to={`/services/${service._id}`}>
                                        <Button variant="outline-warning">Detail</Button>
                                    </Link>



                                </Card.Body>
                            </Card>
                        </Col>

                        )

                    }

                </Row>
            </Container>
        </div>
    );
};

export default Service;