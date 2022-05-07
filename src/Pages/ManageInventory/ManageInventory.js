import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ManageCard from './ManageCard/ManageCard';

const ManageInventory = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('fakedb.json')
            .then(data => {
                setProducts(data.data)
            });
    }, [])
    return (
        <div>
            <h2 className='text-center py-10 bg-purple-500 text-5xl font-bold text-white mb-5'>All Products Item</h2>
            <div className='container mx-auto px-2'>
                {
                    products.map(product => <ManageCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default ManageInventory;