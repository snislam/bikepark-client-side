import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ManageCard from './ManageCard/ManageCard';

const ManageInventory = () => {
    const [products, setProducts] = useState([]);

    // delete button function
    const handleDelete = (id) => {
        const confirm = window.confirm("Are sure to delete thi item?");
        if (confirm) {
            axios.delete(`http://localhost:5000/bikeitems/${id}`)
                .then(res => {
                    console.log(res)
                })
            axios.get(`http://localhost:5000/bikeitems`)
                .then(data => {
                    setProducts(data.data)
                    toast("Delete Successful")
                });
        } else {
            toast('Okay dear, I am keeping it up ')
        }

    }

    useEffect(() => {
        axios.get(`http://localhost:5000/bikeitems`)
            .then(data => {
                setProducts(data.data)
            });
    }, [])
    return (
        <div>
            <h2 className='text-center py-10 bg-purple-500 text-5xl font-bold text-white mb-5'>All Products Item</h2>
            <div className='container mx-auto px-2'>
                {
                    products.map(product => <ManageCard key={product._id} product={product} handleDelete={() => handleDelete(product._id)} />)
                }
            </div>
        </div>
    );
};

export default ManageInventory;