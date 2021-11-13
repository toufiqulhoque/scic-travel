import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import useAuth from '../../hooks/useAuth';
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

const MyOrder = () => {
    const [orders, setOrders] = useState([])
    const [isUpdate, setIsUpdated] = useState([])
    const { user } = useAuth()
    const [selectedId, setSelectedId] = useState();
    const { register, handleSubmit, formState: { errors } } = useForm();
    useEffect(() => {
        fetch('http://localhost:5000/addOrders')
            .then(res => res.json())
            .then(data => setOrders(data));

    },
        [orders]);




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

    function selectedRating(id) {
        setSelectedId(id);
    }

    const onSubmit = (data, e) => {
        const { rating } = data
        const proceed = window.confirm('Are you sure you want to update')
        if (proceed) {
            const givenRating = { rating, selectedId }
            const url = `http://localhost:5000/addOrders`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(givenRating)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        setIsUpdated(true);
                        alert('Updated');

                    } else {
                        setIsUpdated(false);
                    }
                })
        }
        e.target.reset()
    }

    return (
        <div>
            <div>
                <div className='background'>
                    <Container>
                        <h2 className='py-3 text-white'>Available Cars</h2>
                        <Row xs={1} lg={3} className="g-3">
                            {

                                orders.length === 0 ? <Spinner className='mx-auto' animation="border" /> : orders.map(order => user.email == order.email && <Col key={order._id} className='p-3 ' >
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
                                            <Rating initialRating={order.rating}
                                                emptySymbol={<BsStar />}
                                                fullSymbol={<BsStarFill />}
                                                readonly />
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <div className="form-label-group mb-3">
                                                    <p>Give Your Personal Rating</p>
                                                    <select onClick={() => selectedRating(order._id)} {...register("rating", { required: true })}>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                    </select>
                                                </div>
                                                <input className='login-btn my-3' type="submit" />
                                            </form>
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
                                    </Card>
                                </Col>

                                )

                            }

                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;