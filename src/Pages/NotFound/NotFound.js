import React from 'react';

const NotFound = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='border-2 py-20 px-10 shadow-lg'>
                <h1 className='text-5xl font-bold'>Opps! No result found</h1>
                <p className='text-lg mt-5'>Please try again with another link</p>
            </div>
        </div>
    );
};

export default NotFound;