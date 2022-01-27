import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import './Service.css'


const Service = () => {
    const [services, setServices] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)
    // const randomSpot = services.sort((first, second) => 0.5 - Math.random());
    const size = 10;
    useEffect(() => {
        fetch(`https://safe-citadel-14001.herokuapp.com/services?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setServices(data.users)
                const count = data.count;
                const pageNumber = Math.ceil(count / size)
                setPageCount(pageNumber)
            })
    },
        [page]);
    return (
        <div className='background '>
            <Container >
                <h2 className='py-3 text-white'>Travel Blogs</h2>
                <Row xs={1} lg={1} className="g-3 ">
                    {

                        services.length === 0 ? <Spinner className='mx-auto' animation="border " /> : services.map((service, index) =>
                            <Col key={service._id} className='p-3 ' >
                                <Card className='h-100 hover-card card-border flex-md-row ' >
                                    <Card.Img className='img1' variant="top" src={service.image} height='300' />
                                    <Card.Body className='text-start'>
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
                                            <p className='m-0' >Description: {service.description.slice(0, 160)}</p>
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
                <div className="pagination">
                    {
                        [...Array(pageCount).keys()]
                            .map(number => <button
                                className={number === page ? 'selected' : ''}
                                key={number}
                                onClick={() => setPage(number)}
                            >{number + 1}</button>)
                    }
                </div>
            </Container>

        </div >
    );
};

export default Service;