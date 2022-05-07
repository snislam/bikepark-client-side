import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ItemCard from '../../../Common/ItemCard/ItemCard';

const InventoryItems = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('fakedb.json')
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
        <div className='bg-gray-50 py-5'>
            <div className='container mx-auto'>
                <h1 className='text-3xl text-center font-semibold py-5'>Our Items</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-2'>
                    {
                        products.map(product => <ItemCard key={product.id} product={product} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default InventoryItems;