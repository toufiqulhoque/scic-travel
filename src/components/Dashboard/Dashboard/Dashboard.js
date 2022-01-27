import React from 'react';
import { Button, Col, Nav, Row } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import { useHistory } from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';

import Payment from '../Payment/Payment';


import './Dashboard.css'
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import AddExperience from './AddExperience/AddExperience';







const Dashboard = () => {
    const { user, logout, admin } = useAuth();
    const history = useHistory();

    const isAdmin = () => {
        if (admin === true) {
            return <div>
                <NavLink
                    className='navitem text-decoration-none text-white mb-2'
                    exact to="/makeadmin"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                >
                    Make admin
                </NavLink>
                <br />


                <NavLink
                    className='navitem text-decoration-none text-white mb-2 '
                    exact to="/addExperience"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                >
                    Add Experience
                </NavLink>



            </div>
        }
        else {
            return <div>
                <NavLink
                    className='navitem text-decoration-none text-white mb-2'
                    exact to="/payment"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                >
                    Payment
                </NavLink>
                <br />
                <NavLink
                    className='navitem text-decoration-none text-white mb-2 '
                    exact to="/addExperience"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                >
                    Add Experience
                </NavLink>


            </div>
        }
    }



    const logOutButton = () => {
        logout();
        history.push('/login')

    }
    return (
        <div className='bg-dash'>
            <div className="container">
                <h2 className="text-white">Dashboard</h2>
                <Row>
                    <Router>
                        <Col sm={4} >
                            <div className='d-flex flex-column'>
                                {isAdmin()}
                                <Button variant='outline-warning' onClick={logOutButton}>Logout</Button>

                            </div>
                        </Col>

                        <Col sm={8}>
                            <Switch>
                                <Route exact path='/'>
                                    <MakeAdmin></MakeAdmin>
                                </Route>

                                <PrivateRoute exact path='/makeadmin'>
                                    <MakeAdmin></MakeAdmin>
                                </PrivateRoute>


                                <PrivateRoute exact path='/addExperience'>
                                    <AddExperience></AddExperience>
                                </PrivateRoute>


                                <PrivateRoute exact path='/payment'>
                                    <Payment></Payment>
                                </PrivateRoute>

                            </Switch>
                        </Col>
                    </Router>
                </Row>

            </div>
        </div>
    );
};

export default Dashboard;