import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-bg py-5'>
            <Container>
                <div className='d-flex text-white '>
                    <Link to='/home' className='text-decoration-none text-white '><h6 >COMPANY</h6></Link>
                    <Link to='/home' className='ms-3 text-decoration-none text-white '><h6 >CAREERS</h6></Link>
                    <Link to='/home' className='ms-3 text-decoration-none text-white '><h6>CONTACT US</h6></Link>
                    <Link to='/home' className='ms-3 text-decoration-none text-white '><h6>MEDIA CENTER</h6></Link>
                    <Link to='/home' className='ms-3 text-decoration-none text-white '><h6 >PRIVACY&LEGAL</h6></Link>
                    <Link to='/home' className='ms-3 text-decoration-none text-white '><h6 >COOKIE SETTING</h6></Link>
                    <Link to='/home' className='ms-3 text-decoration-none text-white '><h6>SITE MAP</h6></Link>
                    <Link to='/home' className='ms-3 text-decoration-none text-white '><h6>NEWSLETTER</h6></Link>
                    <span className='d-flex ms-auto'>
                        <h5 className='ms-3 footer-icon-single'><FaFacebook /></h5>
                        <h5 className='ms-3 footer-icon-single'><FaTwitter /></h5>
                        <h5 className='ms-3 footer-icon-single'><FaLinkedin /></h5>
                        <h5 className='ms-3 footer-icon-single'><FaInstagram /></h5>
                    </span>
                </div>

                <div className=' text-white text-start py-5'>
                    <p>The consumption adn emission valuesin the website refer to your geographical IP.This value might be unrealistic if you navigate using VPN ot if the position of your internet provider is imprecise.If you believe you are incorrectly geolocalized, contact your dealer to get valied consumption and emission information in your area.</p>
                    <h6>Copyright Lamborghini sole shareholder company part of Audi Group </h6>
                    <p>All rights reserved Toufiq.</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;