import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';

const AddExperience = () => {
    const { user, admin } = useAuth()

    const { register, handleSubmit, formState: { errors, } } = useForm();
    const onSubmit = (inputData, e) => {
        fetch('https://safe-citadel-14001.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(inputData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('user add successfully')
                    e.target.reset('')
                }
            })
        e.preventDefault();
    }
    const isAdmin = () => {
        if (admin === true) {
            return <div><input className='p-3 ' value='active' type="text" placeholder="" {...register("status", {})} /> <br /><br /></div>
        }
        else {
            return <div><input className='p-3 ' value='pending' type="text" placeholder="" {...register("status", {})} /> <br /><br /></div>
        }
    }





    return (
        <div>
            <h2 className='text-white'>Add Experiences</h2>
            <form className='order-form' onSubmit={handleSubmit(onSubmit)}>
                <input className='p-3 ' type="url" placeholder="image" {...register("image", {})} /> <br /><br />
                <input className='p-3' type="text" placeholder="travelerName" {...register("travelerName", {})} /> <br /> <br />
                <input className='p-3' defaultValue={user.email} type="text" placeholder="email" {...register("email", {})} /> <br /> <br />
                <input className='p-3' type="text" placeholder="travelLocation" {...register("travelLocation", {})} /> <br /> <br />
                <input className='p-3' type="text" placeholder="description" {...register("description", {})} /> <br /> <br />
                <input className='p-3' type="text" placeholder="travelCategory" {...register("travelCategory", {})} /> <br /> <br />
                <input className='p-3 ' type="text" placeholder="cost" {...register("cost", {})} /> <br /><br />
                {isAdmin()}


                {/* <input type="url" placeholder="price" {...register("price", {})} /> <br /> */}

                <input className='btn btn-warning' type="submit" />

            </form>
        </div>
    );
};

export default AddExperience;