import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FacultyCard from './FacultyCard/FacultyCard';

const Faculty = () => {
    const [faculty, setFaculty] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/faculty')
            .then(res => {
                setFaculty(res.data)
            })
    }, [])

    return (
        <div className='py-5 bg-gray-50'>
            <div className='container mx-auto px-5'>
                <h1 className='text-4xl font-bold text-center py-5 mb-3'>Bike Park Team</h1>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 py-5'>
                    {
                        faculty.map(user => <FacultyCard key={user._id} user={user} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Faculty;