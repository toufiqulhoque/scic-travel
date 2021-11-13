import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';

import Rating from 'react-rating';
import useAuth from '../../hooks/useAuth';
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

const ManageAllOrder = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()
    useEffect(() => {
        fetch('http://localhost:5000/addOrders')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                console.log(data)
            });

    },
        [orders]);

    const handleUpdate = id => {
        const proceed = window.confirm('Are you sure you want to delete')
        if (proceed) {
            const url = `http://localhost:5000/addOrders/${id}`
            fetch(url, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        alert('Updated');
                    } else {

                    }
                })
        }
    }

    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure you want to delete')
        if (proceed) {
            const url = `http://localhost:5000/addOrders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingUsers = orders.filter(user => user._id !== id)
                        setOrders(remainingUsers)
                    }
                })
        }

    }

    return (
        <div>
            <div>
                <div className='background'>
                    <Container>
                        <h2 className='py-3 text-white'>Orders and Rating Cars</h2>
                        <Row xs={1} lg={3} className="g-3">
                            {

                                orders.length === 0 ? <Spinner className='mx-auto' animation="border" /> : orders.map(order => <Col key={order._id} className='p-3 ' >
                                    <Card className='h-100 hover-card card-border' >
                                        <Card.Img className='img1  ' variant="top" src={order.order.image} height='300' />
                                        <Card.Body>
                                            <Card.Title>{order.order.name}</Card.Title>
                                            <Card.Text>
                                                <p className='text-muted'>{order.order.bodytype}</p>
                                            </Card.Text>
                                            <Card.Text>
                                                <p>{order.order.description}</p>
                                            </Card.Text>
                                            <Card.Text>
                                                <p>Status: {order.status}</p>
                                            </Card.Text>
                                            <Card.Text>
                                                <Rating initialRating={order.rating}
                                                    emptySymbol={<BsStar />}
                                                    fullSymbol={<BsStarFill />}
                                                    readonly />
                                            </Card.Text>
                                            <Button onClick={() => handleUpdate(order._id)} variant="outline-warning" className='mx-auto my-3 p-1'>Update Status</Button>

                                            <button className="btn btn-outline-warning ms-3 rounded px-4 " onClick={() => handleDeleteUser(order._id)}>DELETE</button>
                                            {/* <Link to={`/services/${service._id}`}><button>update</button></Link> */}
                                            <br />
                                            {/* <Link to={`/order/${service._id}`}>
                                    <button className="btn btn-warning">Detail</button>
                                </Link> */}
                                            {/* <button
                                                onClick={() => handleAddToCart(index, user.email)}
                                                className="btn btn-warning m-2"
                                            >
                                                buy now
                                            </button> */}



                                        </Card.Body>
                                    </Card >
                                </Col >

                                )

                            }

                        </Row >
                    </Container >
                </div >
            </div >
        </div >
    );
};

export default ManageAllOrder;