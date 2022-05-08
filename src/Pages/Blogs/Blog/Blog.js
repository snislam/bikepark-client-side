import React from 'react';

const Blog = ({ blog }) => {
    const { question, answer } = blog;
    return (
        <div className='p-5 my-3 border-2'>
            <h1 className='text-2xl font-semibold mb-3'>{question}</h1>
            <p className='text-normal'>{answer}</p>
        </div>
    );
};

export default Blog;