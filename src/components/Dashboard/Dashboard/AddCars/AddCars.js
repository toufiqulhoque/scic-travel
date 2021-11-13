import React from 'react';
import { useForm } from 'react-hook-form';

const AddCars = () => {
    const { register, handleSubmit, formState: { errors, } } = useForm();
    const onSubmit = (inputData, e) => {
        fetch('http://localhost:5000/services', {
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
    return (
        <div>
            <h2 className='text-white'>Add a Cars</h2>
            <form className='order-form' onSubmit={handleSubmit(onSubmit)}>
                <input className='p-3 ' type="url" placeholder="image" {...register("image", {})} /> <br /><br />
                <input className='p-3' type="text" placeholder="name" {...register("name", {})} /> <br /> <br />
                <input className='p-3 ' type="text" placeholder="bodytype" {...register("bodytype", {})} /> <br /><br />
                <input className='p-3 ' type="description" placeholder="description" {...register("description", {})} /> <br /><br />

                {/* <input type="url" placeholder="price" {...register("price", {})} /> <br /> */}

                <input className='btn btn-warning' type="submit" />

            </form>
        </div>
    );
};

export default AddCars;