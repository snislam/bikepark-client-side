import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../images/banner-2.jpg';

const Banner = () => {
    return (
        <div className='container mx-auto flex flex-col-reverse md:flex-row justify-between items-center my-5'>
            <div className='pr-10 md:mt-0 mt-10'>
                <h1 className='text-3xl font-bold mb-5'><span className='text-purple-800'>BIKE PARK</span> is the best Bike collection hub of Bangladesh</h1>
                <p className='text-lg text-slate-600 mb-5'>Bangladesh's best bikes collection hub is our. we provide the best quality services with thousands plus items and more than hundred services related to bike safety and ride.</p>
                <button className='bg-purple-600 duration-700 hover:bg-purple-800 py-3 px-7 text-white'><Link to='/inventory'>Visit Inventory</Link></button>
            </div>
            <div>
                <img src={img} alt="bike park" />
            </div>
        </div>
    );
};

export default Banner;