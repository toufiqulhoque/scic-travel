import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageAllCars = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));

    },
        []);
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure you want to delete')
        if (proceed) {
            const url = `http://localhost:5000/services/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingUsers = services.filter(user => user._id !== id)
                        setServices(remainingUsers)
                    }
                })
        }

    }

    return (
        <div>
            <div className='background'>
                <Container>
                    <h2 className='py-3 text-white'>Manage All Cars</h2>
                    <Row xs={1} lg={3} className="g-3">
                        {

                            services.length === 0 ? <Spinner className='mx-auto' animation="border" /> : services.map((service, index) => <Col key={service._id} className='p-3 ' >
                                <Card className='h-100 hover-card card-border' >
                                    <Card.Img className='img1  ' variant="top" src={service.image} height='300' />
                                    <Card.Body>
                                        <Card.Title>{service.name}</Card.Title>
                                        <Card.Text>
                                            <p className='text-muted'>{service.bodytype}</p>
                                        </Card.Text>
                                        <Card.Text>
                                            <p>{service.description}</p>
                                        </Card.Text>
                                        <button variant="outline-warning" className="btn btn-outline-warning ms-3 rounded px-4 " onClick={() => handleDeleteUser(service._id)}>DELETE</button>
                                        {/* <Link to={`/services/${service._id}`}><button>update</button></Link> */}
                                        <br />
                                        {/* <Link to={`/order/${service._id}`}>
                                <button className="btn btn-warning">Detail</button>
                            </Link> */}
                                        {/* <Link to={`/services/${service._id}`}>
                                            <Button variant="outline-warning">
                                                Confirm Order
                                            </Button>
                                        </Link> */}



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

export default ManageAllCars;