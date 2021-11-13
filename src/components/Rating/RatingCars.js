import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import Rating from "react-rating";



const RatingCars = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()
    useEffect(() => {
        fetch('https://limitless-peak-03324.herokuapp.com/addOrders')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                console.log(data)
            });

    },
        []);



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
                                                <Rating initialRating={order.rating}
                                                    emptySymbol={<BsStar />}
                                                    fullSymbol={<BsStarFill />}
                                                    readonly />
                                            </Card.Text>


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

export default RatingCars;