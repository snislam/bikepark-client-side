import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-700 w-full pt-10 pb-3 px-20'>
            <div className=' flex flex-col md:flex-row justify-between items-start'>
                <div>
                    <h2 className='text-white text-lg font-semibold underline underline-offset-8'>Important Link</h2>
                    <ul className='ml-1 text-slate-200'>
                        <li>Home</li>
                        <li>Manage Inventory</li>
                        <li>My Items</li>
                        <li>Add Items</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-white text-lg font-semibold underline underline-offset-8'>Important Link</h2>
                    <ul className='ml-1 text-slate-200'>
                        <li>Home</li>
                        <li>Manage Inventory</li>
                        <li>My Items</li>
                        <li>Add Items</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-white text-lg font-semibold underline underline-offset-8'>Important Link</h2>
                    <ul className='ml-1 text-slate-200'>
                        <li>Home</li>
                        <li>Manage Inventory</li>
                        <li>My Items</li>
                        <li>Add Items</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-white text-lg font-semibold underline underline-offset-8'>Important Link</h2>
                    <ul className='ml-1 text-slate-200'>
                        <li>Home</li>
                        <li>Manage Inventory</li>
                        <li>My Items</li>
                        <li>Add Items</li>
                    </ul>
                </div>
            </div>
            <p className='text-center text-slate-400 text-sm mt-5'>Copyright &copy; {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;