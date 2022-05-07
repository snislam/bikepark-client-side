import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const StockUpdate = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5000/inventory/${id}`)
            .then((data) => {
                setItem(data.data);
            })
    }, [id])

    const handleDeliver = id => {
        const { quantity, ...rest } = item;
        const newQuantity = quantity - 1;
        if (newQuantity === 0) {

        }
        const newItem = { quantity: newQuantity, ...rest }
        setItem(newItem)

        axios.put(`http://localhost:5000/inventory/${id}`, newItem)

    }

    const handleAddQtSubmit = e => {
        e.preventDefault();
        const addQuantity = parseInt(e.target.number.value);
        e.target.number.value = '';
        const { quantity, ...rest } = item;
        const newQuantity = quantity + addQuantity;
        const newItem = { quantity: newQuantity, ...rest }
        setItem(newItem)

        axios.put(`http://localhost:5000/inventory/${id}`, newItem)
    }

    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 my-5 mx-5 py-5 px-5 border-2'>
                <div>
                    <img src={item.img} alt={item.name} />
                </div>
                <div>
                    <h3 className='text-2xl font-semibold'>Product name: {item.name}</h3>
                    <p className='text-slate-700 font-semibold my-2'>Supplier: <span className='text-normal font-normal'>{item.supplier}</span></p>
                    <p className='text-slate-700 font-semibold mb-2'>Product Price: <span className='text-normal font-normal'>${item.price}</span></p>
                    <p className='text-slate-700 font-semibold mb-2'>Product Quantity: <span className='text-normal font-normal'>{item.quantity}</span></p>
                    <p className='text-slate-700 font-semibold mb-2'>About Product: <span className='text-normal font-normal'>{item.description}</span></p>
                    <p><button onClick={() => handleDeliver(item._id)} className='bg-purple-500 hover:bg-purple-700 duration-500 py-2 w-48 text-slate-100'>Delivered</button></p>
                    <div className='py-5 '>
                        <form className='flex flex-col text-left' onSubmit={handleAddQtSubmit}>
                            <input className='w-48 border-2 p-2' type="number" name="number" id="" placeholder='Enter restock quantity' />
                            <input className='w-48 bg-blue-700 hover:bg-blue-900 duration-700 text-slate-100 py-2 mt-3' type="submit" value="Add Products" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StockUpdate;