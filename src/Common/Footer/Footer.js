import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-gray-700 w-full pt-10 pb-3 px-20'>
            <div className=' grid grid-cols-1 md:grid-cols-3 gap-5 justify-center'>
                <div>
                    <h2 className='text-white text-lg font-semibold underline underline-offset-8'>Important Link</h2>
                    <ul className='ml-1 text-slate-200'>
                        <Link className='block w-100 mb-2 mt-3' to='/'>Home</Link>
                        <Link className='block w-100 mb-2' to='/inventory'>Manage Inventory</Link>
                        <Link className='block w-100 mb-2' to='/myitems'>My Items</Link>
                        <Link className='block w-100 mb-2' to='/additem'>Add Items</Link>
                    </ul>
                </div>
                <div>
                    <h2 className='text-white text-lg font-semibold underline underline-offset-8'>About Us</h2>
                    <p className='text-white pr-20 pt-5'>This is made for managing our inventory. We are the best bike collection hub in Bangladesh</p>
                </div>
                <div>
                    <h2 className='text-white text-lg font-semibold underline underline-offset-8'>Contact Us</h2>
                    <p className='text-white pr-20 pt-5'>Email: najmulbge17@gmail.com <br /> Mobi: 01303164150</p>
                </div>
            </div>
            <p className='text-center text-slate-400 text-sm mt-5'>Copyright &copy; {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;