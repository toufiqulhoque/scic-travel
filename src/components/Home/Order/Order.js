import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Order.css'

const Order = () => {
    const { id } = useParams()
    const { user } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [order, setOrder] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))

    }, [])

    const { email } = user;
    const onSubmit = (data, e) => {
        console.log(data)
        const status = 'pending'
        const orderData = { data, email, order, status };
        console.log(orderData)
        fetch(`http://localhost:5000/addOrders`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(orderData),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if (result.insertedId) {
                    alert("add to cart");
                } else {
                    alert("Not added");
                }
            });
        e.target.reset()

    }


    // const handleAddToCart = (item, email) => {

    //     const data = { item, email };
    //     fetch(`http://localhost:5000/addOrders`, {
    //         method: "POST",
    //         headers: { "content-type": "application/json" },
    //         body: JSON.stringify(data),
    //     })
    //         .then((res) => res.json())
    //         .then((result) => {
    //             console.log(result);
    //             if (result.insertedId) {
    //                 alert("add to cart");
    //             } else {
    //                 alert("Not added");
    //             }
    //         });

    return (
        <Container className='my-5' >
            <div >

                <div >
                    <Row>
                        <Col xs={12} md={6}>
                            <img className='img-fluid' src={order.image} alt="" />
                        </Col>
                        <Col xs={12} md={6} className='my-auto text-start'>
                            <h4>{order.travelerName}</h4>
                            <h4>{order.travelLocation}</h4>
                            <h5>{order.travelCategory}</h5>
                            <p>{order.description}</p>
                            {/* <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-label-group">
                                    <input type="text" defaultValue={user.email} className="text-center form-control p-2" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                                </div>
                                <br />
                                <div className="form-label-group">
                                    <input type="text" className="text-center form-control p-2" placeholder="Address" {...register("address", { required: true, maxLength: 200 })} />
                                </div>
                                <br />
                                <div className="form-label-group mb-3">
                                    <p>Give Your Personal Rating</p>
                                    <select {...register("rating", { required: true })}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>


                                <input className='login-btn' type="submit" />



                            </form> */}

                            {/* <button
                                onClick={() => handleAddToCart(order, user.email)}
                                className="btn btn-warning m-2 "
                            >
                                buy now
                            </button> */}
                        </Col>
                        {/* <Card.Body className='d-md-flex justify-content-center w-md-50'>
                            <div className="containerTwo">
                                <div className="boxTwo">
                                    <img src={order.fimage} />
                                </div>
                                <div className="boxTwo">
                                    <img src={order.fimage2} />
                                </div>


                            </div>
                        </Card.Body> */}
                    </Row>
                </div>

            </div>
        </Container>
    );
};

export default Order;