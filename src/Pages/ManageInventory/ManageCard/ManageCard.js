import React from 'react';
import { Link } from 'react-router-dom';

const ManageCard = ({ product }) => {
    const { name, img, price, quantity, id } = product;
    return (
        <li className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 my-5 justify-items-center content-center items-center'>
            <div><img className='w-20 h-20 rounded-full' src={img} alt="" /></div>
            <div className='text-lg text-purple-800'>{name}</div>
            <div className='text-lg text-slate-800'>{price}</div>
            <div className='text-lg font-medium'>{quantity}</div>
            <div><button className='bg-red-500 hover:bg-red-700 duration-500 text-slate-200  py-2 px-7 rounded-md'>Delete</button></div>
            <div><Link to={`/inventory/${id}`} className='bg-blue-500 hover:bg-blue-700 duration-500  text-slate-200 py-2 px-7 rounded-md'>Update</Link></div>
        </li>
    );
};

export default ManageCard;