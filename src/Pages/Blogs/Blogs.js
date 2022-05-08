import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Blog from './Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/blogs')
            .then(resposne => {
                setBlogs(resposne.data)
            })
    }, [])

    return (
        <div className='py-5'>
            <h1 className='text-center text-5xl font-semibold py-5'>Our Blogs</h1>
            <div className='container mx-auto px-5'>
                {
                    blogs.map(blog => <Blog key={blog._id} blog={blog} />)
                }
            </div>
        </div>
    );
};

export default Blogs;