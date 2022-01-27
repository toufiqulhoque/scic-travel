import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import './Service.css'
import Pagination from 'react-bootstrap-4-pagination';
let paginationConfig = {
    totalPages: 2,
    currentPage: 1,
    showMax: 5,
    size: "lg",
    threeDots: true,
    prevNext: true,
    onClick: function (page) {
        console.log(page);
    }
};

const Service = () => {
    const { services } = useFetch();
    console.log(services)
    const randomSpot = services.sort((first, second) => 0.5 - Math.random());
    return (
        <div className='background'>
            <Container>
                <h2 className='py-3 text-white'>Travel Blogs</h2>
                <Row xs={1} lg={1} className="g-3 ">
                    {

                        randomSpot.length === 0 ? <Spinner className='mx-auto' animation="border " /> : randomSpot.map((service, index) =>
                            <Col key={service._id} className='p-3 ' >
                                <Card className='h-100 hover-card card-border ' >
                                    <Card.Img className='img1' variant="top" src={service.image} height='300' />
                                    <Card.Body className='card-style'>
                                        <Card.Title>{service.name}</Card.Title>
                                        <Card.Text>
                                            <p className='fw-bolder m-0'>Name: {service.travelerName}</p>
                                        </Card.Text>
                                        <Card.Text>
                                            <p className='fw-bolder m-0'>Location: {service.travelLocation}</p>
                                        </Card.Text>
                                        <Card.Text>
                                            <p className='fw-bolder m-0'>Category: {service.travelCategory}</p>
                                        </Card.Text>
                                        <Card.Text>
                                            <p className='description m-0' >Description: {service.description.slice(0, 160)}</p>
                                        </Card.Text>
                                        <Card.Text>
                                            <p className='fw-bolder m-0'>Cost: {service.cost}</p>
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
            <div className="Service">
                <Pagination {...paginationConfig} />
            </div>
        </div >
    );
};

export default Service;