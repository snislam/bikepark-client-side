import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../../firebase.init';
import { useSignInWithGoogle, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import useLoadingSpin from '../../Common/hooks/useLoadingSpin';


const Register = () => {
    const [err, setErr] = useState('');
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const [signInWithGoogle, user1, , error] = useSignInWithGoogle(auth);
    const [sendEmailVerification, , errorSendVerification] = useSendEmailVerification(auth);
    const [loader, showLoader, hideLoader] = useLoadingSpin();

    useEffect(() => {
        if (user1) {
            navigate(from, { replace: true })
        }

        if (error || errorSendVerification) {
            setErr(error.message || errorSendVerification.message)
        }
    }, [error, from, navigate, user1, errorSendVerification])

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const email = e.target.elements.email?.value;
        const password = e.target.elements.password?.value;

        // email velidity test
        const regEmail = /\S+@\S+\.\S+/;
        const validEmail = regEmail.test(email);


        if (!validEmail) {
            setErr('Enter valid email');
            return;
        } else {
            setErr('');
        }

        showLoader();
        createUserWithEmailAndPassword(auth, email, password)
            .then(user => {
                navigate('/');
                hideLoader()
                if (!user?.user?.emailVerified) {
                    sendEmailVerification();
                    toast('Verification email sent');
                }
            })
            .catch(err => {
                setErr(err.message)
            })

    };
    return (
        <div className='my-10 flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Create Your Account
                </h1>

                {loader}
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input
                            type='text'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='name'
                            placeholder='Your Email'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                            required
                        />
                    </div>

                    <div>
                        <p className='text-red-500'>{err}</p>
                    </div>

                    {/* <div>
                        <p>
                            {
                                user.
                            }
                        </p>
                    </div> */}

                    <div>
                        <p>Haven't Account? <span className='text-blue-500'><Link to='/login'>Log In to account</Link></span></p>
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className='bg-gray-500 duration-500 hover:bg-gray-700 py-2 w-full text-slate-200'
                        >
                            Create Account
                        </button>
                    </div>
                </form>
                <div className='mt-5'>
                    <div className='flex justify-evenly items-center'>
                        <div className='left-bar'></div>
                        <div className='or-div px-5'>OR</div>
                        <div className='right-bar'></div>
                    </div>
                    <div>
                        <button onClick={() => signInWithGoogle()} className='bg-blue-700 hover:bg-blue-900 w-full py-2 text-white duration-700 mt-4'>SignIn With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;