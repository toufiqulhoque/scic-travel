import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleService = (props) => {
    const { _id, name, image, travelerName, travelLocation, travelCategory, description, cost, status } = props.service
    console.log(image);
    const showPosts = (postStatus) => {
        if (postStatus == 'Activate') {
            return <Col className='p-3 ' >
                <Card className='h-100 hover-card card-border flex-md-row ' >
                    <Card.Img className='img1' variant="top" src={image} height='300' />
                    <Card.Body className='text-start'>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p className='fw-bolder m-0'>Name: {travelerName}</p>
                        </Card.Text>
                        <Card.Text>
                            <p className='fw-bolder m-0'>Location: {travelLocation}</p>
                        </Card.Text>
                        <Card.Text>
                            <p className='fw-bolder m-0'>Category: {travelCategory}</p>
                        </Card.Text>
                        <Card.Text>
                            <p className='m-0' >Description: {description.slice(0, 160)}</p>
                        </Card.Text>
                        <Card.Text>
                            <p className='fw-bolder m-0'>Cost: {cost}</p>
                        </Card.Text>
                        {/* <Link to={`/services/${service._id}`}><button>update</button></Link> */}
                        <br />
                        <Link to={`/services/${_id}`}>
                            <Button variant="outline-warning">Detail</Button>
                        </Link>



                    </Card.Body>
                </Card>
            </Col>

        }
    }
    return (
        <div>
            {showPosts(status)}
        </div>
    );
};

export default SingleService;