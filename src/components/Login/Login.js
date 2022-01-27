import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const history = useHistory()
    const location = useLocation();
    const { loginUser, user, isLoading, authError } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        console.log(data)
        e.target.reset()
        loginUser(data.Email, data.Password, location, history)
    }


    console.log(errors);
    return (
        <Row >
            <Col className='m-auto margin'><form onSubmit={handleSubmit(onSubmit)}>
                <input className='py-2 px-5' type="email" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} /> <br /><br />
                <input className='py-2 px-5' type="password" type='password' placeholder="Password" {...register("Password", { required: true })} /> <br /><br />

                <input className='login-btn' type="submit" />
                <br />
                <br />

                <NavLink style={{ textDecoration: 'none' }} to='/register' >
                    <Button variant="outline-warning">New User? Please Register</Button>
                </NavLink>
            </form></Col>
            <Col><img className='img-fluid log-img' src='https://ecurater.com/wp-content/uploads/2020/10/login1.png' alt="" /></Col>
        </Row>
    );
};

export default Login;