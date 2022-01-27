import React from 'react';
import { Col, Row } from 'react-bootstrap';
import RatingCars from '../../Rating/RatingCars';


import Banner from '../Banner/Banner';
import HomeExtra from '../HomeExtra/HomeExtra';
import Service from '../Service/Service';
import Slider from '../Slider/Slider';
import Sidebar from './Sidebar/Sidebar';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Row className=''>
                <Col className='col-md-9 design'><Service></Service></Col>
                <Col className='col-md-3 design'><Sidebar></Sidebar></Col>

            </Row>
            <RatingCars></RatingCars>


        </div>
    );
};

export default Home;