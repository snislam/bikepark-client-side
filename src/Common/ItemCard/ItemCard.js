import React from 'react';

const ItemCard = ({ product }) => {
    const { name, price, img, supplier, quantity, description } = product
    return (
        <div className='border'>
            <img src={img} alt={name} />
            <div className='pt-2 px-4 pb-3'>
                <h1 className='text-xl  font-semibold'>{name}</h1>
                <p className='my-3'><small>Supplier: <span className='text-yellow-700 font-bold'>{supplier}</span></small></p>
                <p className='mb-2 text-slate-900'>Price: ${price}</p>
                <p className='mb-2 text-slate-900'>Quantity: {quantity}</p>
                <p className='text-md font-medium text-slate-900'>{description}</p>
                <button className='bg-gray-500 duration-700 hover:bg-gray-700 text-white mt-4 py-2 px-5'>Stock Update</button>
            </div>
        </div>
    );
};

export default ItemCard;