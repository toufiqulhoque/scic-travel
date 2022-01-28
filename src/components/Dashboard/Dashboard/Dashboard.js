// import React from 'react';
// import { Button, Col, Nav, Row } from 'react-bootstrap';

import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddExperience from "./AddExperience/AddExperience";
import ManageBlogs from "./ManageBlogs/ManageBlogs";

// import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';

// import { useHistory } from "react-router-dom";
// import MakeAdmin from '../MakeAdmin/MakeAdmin';

// import Payment from '../Payment/Payment';


// import './Dashboard.css'
// import PrivateRoute from '../../PrivateRoute/PrivateRoute';
// import AddExperience from './AddExperience/AddExperience';
// import ManageBlogs from './ManageBlogs/ManageBlogs';







// const Dashboard = () => {
//     const { user, logout, admin } = useAuth();
//     const history = useHistory();

//     const isAdmin = () => {
//         if (admin === true) {
//             return <div>
//                 <NavLink
//                     className='navitem text-decoration-none text-white mb-2'
//                     exact to="/makeadmin"
//                     activeStyle={{
//                         fontWeight: "bold",
//                         color: "red"
//                     }}
//                 >
//                     Make admin
//                 </NavLink>
//                 <br />


//                 <NavLink
//                     className='navitem text-decoration-none text-white mb-2 '
//                     exact to="/addExperience"
//                     activeStyle={{
//                         fontWeight: "bold",
//                         color: "red"
//                     }}
//                 >
//                     Add Experience
//                 </NavLink>
//                 <br />
//                 <NavLink
//                     className='navitem text-decoration-none text-white mb-2 '
//                     exact to="/manageBlogs"
//                     activeStyle={{
//                         fontWeight: "bold",
//                         color: "red"
//                     }}
//                 >
//                     ManageBlogs
//                 </NavLink>



//             </div>
//         }
//         else {
//             return <div>
//                 <NavLink
//                     className='navitem text-decoration-none text-white mb-2'
//                     exact to="/payment"
//                     activeStyle={{
//                         fontWeight: "bold",
//                         color: "red"
//                     }}
//                 >
//                     Payment
//                 </NavLink>
//                 <br />
//                 <NavLink
//                     className='navitem text-decoration-none text-white mb-2 '
//                     exact to="/addExperience"
//                     activeStyle={{
//                         fontWeight: "bold",
//                         color: "red"
//                     }}
//                 >
//                     Add Experience
//                 </NavLink>


//             </div>
//         }
//     }



//     const logOutButton = () => {
//         logout();
//         history.push('/login')

//     }
//     return (
//         <div className='bg-dash'>
//             <div className="container">
//                 <h2 className="text-white">Dashboard</h2>
//                 <Row>
//                     <Router>
//                         <Col sm={4} >
//                             <div className='d-flex flex-column'>
//                                 {isAdmin()}
//                                 <Button variant='outline-warning' onClick={logOutButton}>Logout</Button>

//                             </div>
//                         </Col>

//                         <Col sm={8}>
//                             <Switch>
//                                 <Route exact path='/'>
//                                     <MakeAdmin></MakeAdmin>
//                                 </Route>

//                                 <PrivateRoute exact path='/makeadmin'>
//                                     <MakeAdmin></MakeAdmin>
//                                 </PrivateRoute>


//                                 <PrivateRoute exact path='/addExperience'>
//                                     <AddExperience></AddExperience>
//                                 </PrivateRoute>


//                                 <PrivateRoute exact path='/manageBlogs'>
//                                     <ManageBlogs></ManageBlogs>
//                                 </PrivateRoute>

//                             </Switch>
//                         </Col>
//                     </Router>
//                 </Row>

//             </div>
//         </div>
//     );
// };

// export default Dashboard;

const Dashboard = () => {
    const { admin } = useAuth()
    const isAdmin = () => {
        if (admin === true) {
            return <div><Container className='my-5 '>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row >
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link className='text-dark' eventKey="first">Add Movies</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className='text-dark' eventKey="second">AddExperience</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className='text-dark' eventKey="third">Manage Blogs</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <MakeAdmin></MakeAdmin>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <AddExperience></AddExperience>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <ManageBlogs></ManageBlogs>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container></div>
        }
        else {
            return <Container className='my-5 '>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row >
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link className='text-dark' eventKey="first">Add Movies</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className='text-dark' eventKey="second">AddExperience</Nav.Link>
                                </Nav.Item>

                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <MakeAdmin></MakeAdmin>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <AddExperience></AddExperience>
                                </Tab.Pane>


                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        }
    }

    return (
        <div>
            <h2 className="text-dark">Dashboard</h2>
            <div>
                {isAdmin()}
            </div>
        </div>
    );
};

export default Dashboard;