import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth);

    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const supplier = e.target.supplier.value;
        const img = e.target.img.value;
        const price = parseInt(e.target.price.value);
        const quantity = parseInt(e.target.quantity.value);
        const description = e.target.description.value;
        e.target.reset();
        const newAddededItem = { name, email, supplier, img, price, quantity, description }

        axios.post('http://localhost:5000/bikeitems', newAddededItem)
        console.log(newAddededItem)
    }

    return (
        <div className='w-100 md:w-1/2 mx-auto border-2 p-5 shadow-md my-10 rounded-lg'>
            <h2 className='text-3xl font-bold text-center py-2 mb-3'>Add Item</h2>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <input className='border-2 mb-3 py-2 px-3 rounded-md' type="text" name="name" id="name" placeholder='Enter item name' required />
                <input className='border-2 mb-3 py-2 px-3 rounded-md' type="email" name="email" id="email" value={user.email} placeholder='Enter Your email' disabled />
                <input className='border-2 mb-3 py-2 px-3 rounded-md' type="text" name="supplier" id="supplier" placeholder='Enter item supplier' required />
                <input className='border-2 mb-3 py-2 px-3 rounded-md' type="text" name="img" id="img" placeholder='Enter item img' required />
                <input className='border-2 mb-3 py-2 px-3 rounded-md' type="number" name="price" id="price" placeholder='Item price' required />
                <input className='border-2 mb-3 py-2 px-3 rounded-md' type="number" name="quantity" id="quantity" placeholder='Item quantity' required />
                <input className='border-2 mb-3 py-2 px-3 rounded-md' type="text" name="description" id="description" placeholder='Enter item description' required />
                <input className='mb-3 py-2 px-3 bg-blue-700 hover:bg-blue-900 duration-700 text-lg text-slate-100 cursor-pointer rounded-md' type="submit" value="Add to inventory" required />
            </form>
        </div>
    );
};

export default AddItem;