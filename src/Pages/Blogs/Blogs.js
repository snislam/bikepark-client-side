import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PageTitle from '../../Common/Helmet/PageTitle';
import Blog from './Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('https://enigmatic-depths-65126.herokuapp.com/blogs')
            .then(resposne => {
                setBlogs(resposne.data)
            })
    }, [])

    return (
        <div className='py-5'>
            <PageTitle title="Blogs" />
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