import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home/Home';

import NotFound from './components/NotFound/NotFound';
import Order from './components/Home/Order/Order';
import AuthProvider from './components/context/AuthProvider';
import Register from './components/Login/Register';
import Login from './components/Login/Login';


import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import AllSpots from './components/AllSpots/AllSpots';
import AddExperience from './components/Dashboard/Dashboard/AddExperience/AddExperience';






function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute exact path='/allspots'>
              <AllSpots></AllSpots>
            </PrivateRoute>
            <PrivateRoute exact path='/services/:id'>
              <Order></Order>
            </PrivateRoute>



            <Route exact path='/register'>
              <Register></Register>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute exact path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute exact path='/addExperience'>
              <AddExperience></AddExperience>
            </PrivateRoute>
            <PrivateRoute exact path='/makeAdmin'>
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
