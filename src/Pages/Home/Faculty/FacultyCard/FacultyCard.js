import React from 'react';

const FacultyCard = ({ user }) => {
    const { name, img, role } = user;
    return (
        <div className='border-2 rounded-lg'>
            <img src={img} alt={name} />
            <div className='p-4'>
                <p className='text-lg font-medium'>{name}</p>
                <p className='text-md font-normal'>{role}</p>
            </div>
        </div>
    );
};

export default FacultyCard;