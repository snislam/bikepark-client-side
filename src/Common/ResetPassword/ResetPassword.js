import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useLoadingSpin from '../hooks/useLoadingSpin';

const ResetPassword = () => {
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [loader, showLoader, hideLoader] = useLoadingSpin();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        showLoader();
        const email = e.target.email.value;
        e.target.reset();
        sendPasswordResetEmail(email);
        toast('Email sent')
        hideLoader();
        navigate('/login')
    }

    return (
        <div className='my-5'>
            <h1 className='text-center text-2xl font-semiboldpy-3'>Reset Password by email</h1>
            <form onSubmit={handleSubmit} className='flex flex-col w-1/2 mx-auto p-10 my-10 border-2 rounded-lg shadow-lg'>
                <input className='w-100 border-2 py-3 px-2 mb-3' type="email" name="email" placeholder='Enter your email' required />
                <input className='w-100 bg-blue-700 duration-500 hover:bg-blue-900 text-lg font-semibold text-white py-3 px-2' type="submit" value="Reset" />
                {loader}
            </form>
        </div>
    );
};

export default ResetPassword;