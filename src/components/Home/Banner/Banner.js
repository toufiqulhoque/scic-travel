import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <header>
                <Carousel fade >
                    <Carousel.Item >
                        <img
                            className="d-block w-100 hero"
                            src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>“Travel is the only thing you buy that makes you richer”</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 hero"
                            src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>“The journey is my home” </h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 hero"
                            src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>“To travel is to live”</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </header>
        </div>
    );
};

export default Banner;