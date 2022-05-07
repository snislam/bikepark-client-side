import React from 'react';

const AddItem = () => {
    return (
        <div className='w-100 md:w-1/2 mx-auto border-2 p-5 shadow-md my-10 rounded-lg'>
            <h2 className='text-3xl font-bold text-center py-2 mb-3'>Add Item</h2>
            <form className='flex flex-col'>
                <input className='border-2 mb-3 py-2 px-3 rounded-md' type="text" name="name" id="name" placeholder='Enter item name' />
                <input className='border-2 mb-3 py-2 px-3 rounded-md' type="email" name="email" id="email" placeholder='Enter Your email' />
                <input className='border-2 mb-3 py-2 px-3 rounded-md' type="text" name="supplier" id="supplier" placeholder='Enter item supplier' />
                <input className='border-2 mb-3 py-2 px-3 rounded-md' type="text" name="img" id="img" placeholder='Enter item img' />
                <input className='border-2 mb-3 py-2 px-3 rounded-md' type="number" name="price" id="price" placeholder='Item price' />
                <input className='border-2 mb-3 py-2 px-3 rounded-md' type="number" name="quantity" id="quantity" placeholder='Item quantity' />
                <input className='border-2 mb-3 py-2 px-3 rounded-md' type="text" name="description" id="description" placeholder='Enter item description' />
                <input className='mb-3 py-2 px-3 bg-blue-700 hover:bg-blue-900 duration-700 text-lg text-slate-100 cursor-pointer rounded-md' type="submit" value="Add to inventory" />
            </form>
        </div>
    );
};

export default AddItem;