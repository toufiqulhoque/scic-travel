import React from 'react';
import RatingCars from '../../Rating/RatingCars';


import Banner from '../Banner/Banner';
import HomeExtra from '../HomeExtra/HomeExtra';
import Service from '../Service/Service';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <RatingCars></RatingCars>
            <Slider></Slider>
            <HomeExtra></HomeExtra>
        </div>
    );
};

export default Home;