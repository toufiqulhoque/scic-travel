import React from 'react';
import { Button, ButtonGroup, Container, Dropdown, DropdownButton, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'



const Header = () => {
    const { user, logout, admin } = useAuth()

    const isAdmin = () => {
        if (admin === true) {
            return <div>
                <NavLink
                    className='nav-text-style text-decoration-none '
                    to="/home"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "#DA9B29"
                    }}
                >
                    Home
                </NavLink>
                <NavLink
                    className='nav-text-style text-decoration-none ms-4'
                    to="/allspots"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "#DA9B29"
                    }}
                >
                    All Spots
                </NavLink>

                <span><DropdownButton variant='outline-warning' id="dropdown-basic-button">

                    <Dropdown.Item><Link className='text-decoration-none text-black' to='/dashboard'>Dashboard</Link></Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><Button variant='outline-warning' onClick={logout}>Logout</Button></Dropdown.Item>

                </DropdownButton></span>
                {user?.email ? <p></p> :
                    <Link to='/login'><Button variant='outline-warning'>Login</Button></Link>}
            </div>
        }
        else {
            return <div>
                <NavLink
                    className='nav-text-style text-decoration-none '
                    to="/home"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "#DA9B29"
                    }}
                >
                    Home
                </NavLink>
                <NavLink
                    className='nav-text-style text-decoration-none ms-4 me-2'
                    to="/allspots"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "#DA9B29"
                    }}
                >
                    All Spots
                </NavLink>
                {user?.email && <Link className='text-decoration-none me-3 ' to='/dashboard'><Button variant=' btn-outline-warning ms-2'>{user.displayName} Dashboard</Button></Link>}
                {user?.email ? <Button variant='outline-warning' onClick={logout}>Logout</Button> :
                    <Link to='/login'><Button variant='outline-warning'>Login</Button></Link>}
            </div>
        }
    }

    return (
        <div>
            <Navbar className='nav-bar' expand="lg">
                <Container>
                    <Navbar.Brand>
                        <NavLink to='/home'>
                            <img

                                alt=""
                                src="https://i.pinimg.com/originals/8f/73/72/8f737206f5aeadf11abe1cfbd78d6b8e.png"
                                height="100"
                                width='100'

                                className="d-inline-block"
                            />
                        </NavLink>


                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '200px' }}
                            navbarScroll
                        >
                            {isAdmin()}



                            <span className='mx-3'>



                            </span>




                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;