import { Alert } from 'bootstrap';
import React, { useState } from 'react';
import { Button, Col, Row, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import './Register.css'
import useAuth from '../../hooks/useAuth';

import { useHistory } from 'react-router-dom';
const Register = () => {
    const [show, setShow] = useState(true);
    const history = useHistory()
    const { registerUser, user, isLoading, authError } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        if (data.Password !== data.Retype_Password) {


            alert('Your password didnt match')
            return

        }
        e.target.reset()
        registerUser(data.Email, data.Password, data.Name, history)
    };
    console.log(errors);

    return (
        <div>
            <Row>
                <Col className='m-auto margin'> {!isLoading && <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='py-2 px-5' type="name" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} /> <br /><br />
                    <input className='py-2 px-5' type="email" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} /> <br /><br />
                    <input className='py-2 px-5' type="password" type='password' placeholder="Password" {...register("Password", { required: true })} /> <br /><br />
                    <input className='py-2 px-5' type="password" type='password' placeholder="Retype_Password" {...register("Retype_Password", { required: true })} /> <br /><br />

                    <input className='register-btn' type="submit" />
                    <br />
                    <br />

                    <NavLink style={{ textDecoration: 'none' }} to='/login' >
                        <Button variant="outline-warning">Already Registered? Please Login</Button>
                    </NavLink>
                </form>}
                    {isLoading && <Spinner animation="border" />}</Col>
                <Col><img className='img-fluid reg-img' src="https://ecurater.com/wp-content/uploads/2020/10/login1.png" alt="" /></Col>
            </Row>
            {/* {user?.email && <Alert>Register Successful</Alert>



            } */}
            {/* {
                authError && <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>

                </Alert>
            } */}


        </div>
    );
};

export default Register;