import React from 'react';
import img from '../../../images/banner-2.jpg';

const Banner = () => {
    return (
        <div className='container mx-auto flex flex-col-reverse md:flex-row justify-between items-center my-5'>
            <div className='pr-10 md:mt-0 mt-10'>
                <h1 className='text-3xl font-bold mb-5'>BIKE PARK is the best collection hub of Bangladesh</h1>
                <p className='text-lg text-slate-600 mb-5'>Bangladesh's best bikes collection hub is our. we provide the best quality services with thousands plus items and more than hundred services related to bike safety and ride.</p>
                <button className='bg-gray-600 duration-700 hover:bg-gray-800 py-3 px-7 text-white'>Vigit Inventory</button>
            </div>
            <div>
                <img src={img} alt="bike park" />
            </div>
        </div>
    );
};

export default Banner;