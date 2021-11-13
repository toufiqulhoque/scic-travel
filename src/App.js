import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home/Home';
import AllCars from './components/AllCars/AllCars';
import NotFound from './components/NotFound/NotFound';
import Order from './components/Home/Order/Order';
import AuthProvider from './components/context/AuthProvider';
import Register from './components/Login/Register';
import Login from './components/Login/Login';
import ManageAllOrder from './components/ManageAllOrder/ManageAllOrder';
import MyOrder from './components/MyOrder/MyOrder';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';





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
            <Route exact path='/allcars'>
              <AllCars></AllCars>
            </Route>
            <Route exact path='/services/:id'>
              <Order></Order>
            </Route>
            <Route exact path='/manageAllOrder'>
              <ManageAllOrder></ManageAllOrder>
            </Route>
            <Route exact path='/myOrder'>
              <MyOrder></MyOrder>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/dashboard'>
              <Dashboard></Dashboard>
            </Route>
            <Route exact path='/makeAdmin'>
              <MakeAdmin></MakeAdmin>
            </Route>
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
