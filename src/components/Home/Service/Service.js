import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Service.css'
import SingleService from './SingleService';


const Service = () => {
    const [services, setServices] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)
    // const randomSpot = services.sort((first, second) => 0.5 - Math.random());
    const size = 10;
    useEffect(() => {
        fetch(`https://safe-citadel-14001.herokuapp.com/
services?page=${page}&&size=${size}`)
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

                        services.length === 0 ? <Spinner className='mx-auto' animation="border " /> : services.map(service => <SingleService
                            key={service._id}
                            service={service}
                        ></SingleService>

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