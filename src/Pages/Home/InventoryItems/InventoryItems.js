import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCard from './ItemCard/ItemCard';

const InventoryItems = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/bikeitems`)
            .then(data => {
                const productsItem = data.data;
                if (productsItem.length > 6) {
                    const newProductsItem = productsItem.slice(0, 6);
                    setProducts(newProductsItem);
                } else {
                    setProducts(productsItem)
                }
            });
    }, [])

    return (
        <div className='bg-gray-100 py-5'>
            <div className='container mx-auto'>
                <h1 className='text-5xl text-center font-semibold py-5 mb-4'>Our Items</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-2'>
                    {
                        products.map(product => <ItemCard key={product.id} product={product} />)
                    }
                </div>
                <div className='py-5 flex justify-center items-center'>
                    <Link className='bg-purple-500 hover:bg-purple-700 duration-700 mt-3 py-3 px-10 text-white rounded-md' to='/inventory'>Manage Inventory</Link>
                </div>
            </div>
        </div>
    );
};

export default InventoryItems;