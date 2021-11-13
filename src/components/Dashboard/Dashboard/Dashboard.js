import React from 'react';
import { Button, Col, Nav, Row } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import ManageAllOrder from '../../ManageAllOrder/ManageAllOrder';
import { useHistory } from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllCars from '../ManageAllCars/ManageAllCars';
import Payment from '../Payment/Payment';
import AddCars from './AddCars/AddCars';
import MyOrder from '../../MyOrder/MyOrder';
import './Dashboard.css'
import PrivateRoute from '../../PrivateRoute/PrivateRoute';






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
                    className='navitem text-decoration-none text-white mb-2'
                    exact to="/manageAllOrder"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                >
                    All orders
                </NavLink>
                <br />
                <NavLink
                    className='navitem text-decoration-none text-white mb-2 '
                    exact to="/addCars"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                >
                    Add Cars
                </NavLink>
                <br />
                <NavLink
                    className='navitem text-decoration-none text-white mb-2'
                    exact to="/manageAllCars"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                >
                    Manage All Cars
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
                    className='navitem text-decoration-none text-white '
                    exact to="/myOrder"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                >
                    My Order
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

                                <PrivateRoute exact path='/manageAllOrder'>
                                    <ManageAllOrder></ManageAllOrder>
                                </PrivateRoute>
                                <PrivateRoute exact path='/addCars'>
                                    <AddCars></AddCars>
                                </PrivateRoute>
                                <PrivateRoute exact path='/manageAllCars'>
                                    <ManageAllCars></ManageAllCars>
                                </PrivateRoute>
                                <PrivateRoute exact path='/myOrder'>
                                    <MyOrder></MyOrder>
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