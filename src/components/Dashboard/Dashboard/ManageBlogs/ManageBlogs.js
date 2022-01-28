import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';


const ManageBlogs = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('https://safe-citadel-14001.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data.users))

    }, [service]);

    // activate post
    const handleApprove = id => {
        const proceed = window.confirm('Publish this post?')

        if (proceed) {
            const url = `https://safe-citadel-14001.herokuapp.com/
services/${id}`;
            fetch(url, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        alert('Posted');
                    } else {
                        alert('Error Unkown, Cant post this')
                    }
                })
        }

    }


    //Delete user 
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure you want to delete')
        if (proceed) {
            const url = `https://safe-citadel-14001.herokuapp.com/
services/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingUsers = service.filter(user => user._id !== id)
                        setService(remainingUsers)
                    }
                })
        }

    }

    const postStatus = (id, values) => {
        if (values.status == 'Activate') {
            return <Button onClick={() => handleApprove(id)} variant="outline-dark" className='mx-auto my-1 p-1 disabled'>Post</Button>
        }
        else {
            return <Button onClick={() => handleApprove(id)} variant="outline-dark" className='mx-auto my-1 p-1 '>Post</Button>
        }
    }
    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>

                        <th className='text-dark'>Traveler Name</th>
                        <th className='text-dark'>Image</th>
                        <th className='text-dark'>Traveler Location</th>
                        <th className='text-dark'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {service.map(values => <tr>
                        <td className='text-dark'>{values.travelerName}</td>
                        <td  ><img className='img-fluid w-25' src={values.image} alt="" /></td>
                        <td className='text-dark'>{values.travelLocation}</td>
                        <td className='text-dark'>{values.status}</td>
                        <td className='text-dark'>
                            {postStatus(values._id, values)}
                            <Button variant="outline-dark" onClick={() => handleDeleteUser(values._id)}>DELETE</Button></td>

                    </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageBlogs;