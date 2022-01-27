import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import HomeExtra from '../HomeExtra/HomeExtra';
import Service from '../Service/Service';
import Slider from '../Slider/Slider';
import Sidebar from './Sidebar/Sidebar';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Row className='bg-dark'>
                <Col className='col-md-9 col-sm-12  '><Service></Service></Col>
                <Col className='col-md-3 col-sm-12 '><Sidebar></Sidebar></Col>

            </Row>



        </div>
    );
};

export default Home;