import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2021/09_21_restyle/gw_aven_05.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/aventador/aventador-svj-roadster/family/gallery/02_Gallery-Gateway-Famiglia.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2021/09_21_restyle/gw_aven_06.jpg"
                    alt="Third slide"
                />


            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;