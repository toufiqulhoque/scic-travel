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
                    to="/allcars"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "#DA9B29"
                    }}
                >
                    All Cars
                </NavLink>
                <span><DropdownButton variant='outline-warning' id="dropdown-basic-button" title={user.displayName}>
                    <Dropdown.Item><Link className='text-decoration-none text-black' to='/manageAllOrder'>Manage All Order</Link></Dropdown.Item>
                    <Dropdown.Item><Link className='text-decoration-none text-black' to='/myOrder'>My Order</Link></Dropdown.Item>
                    <Dropdown.Item><Link className='text-decoration-none text-black' to='/makeAdmin'>Make Admin</Link></Dropdown.Item>
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
                    className='nav-text-style text-decoration-none ms-4'
                    to="/allcars"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "#DA9B29"
                    }}
                >
                    All Cars
                </NavLink>
                <Link className='text-decoration-none me-3 ' to='/dashboard'><Button variant=' btn-outline-warning ms-2'>Dashboard</Button></Link>
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
                                src="https://listcarbrands.com/wp-content/uploads/2016/03/logo-Lamborghini.png"
                                width="200"

                                className="d-inline-block "
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

                            {/* <NavLink
                                className='nav-text-style text-decoration-none'
                                to="/manageAllOrder"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#F7B614"
                                }}
                            >
                                Manage All Order
                            </NavLink> */}

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