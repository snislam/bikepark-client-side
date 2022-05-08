import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useLoadingSpin from '../../Common/hooks/useLoadingSpin';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [err, setErr] = useState('');
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [signInWithGoogle, user1, , error] = useSignInWithGoogle(auth);
    // const [sendPasswordResetEmail, , error1] = useSendPasswordResetEmail(auth);
    const [loader, showLoader, hideLoader] = useLoadingSpin();

    useEffect(() => {
        if (user || user1) {
            navigate(from, { replace: true })
        }

        if (error) {
            setErr(error.message)
        }
    }, [error, from, navigate, user, user1])

    const handleFormSubmit = (e) => {
        e.preventDefault();
        showLoader();
        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        signInWithEmailAndPassword(auth, email, password)
            .then(user => {
                hideLoader()
                console.log(user.user)
            })
            .catch(err => {
                setErr(err.message)
            })

        console.log(email, password);
    };

    const handleResetPassword = () => {

    }

    return (
        <div className='h-screen flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Log in to your account
                </h1>

                {loader}
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                        />
                    </div>

                    <div>
                        <p className='text-red-500'>{err}</p>
                    </div>
                    <div>
                        <p onClick={handleResetPassword} className='text-blue-500 cursor-pointer'>Reset Password</p>
                    </div>

                    <div>
                        <p>Haven't Account? <span className='text-red-700'><Link to='/register'>Create Account</Link></span></p>
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className='bg-gray-500 duration-500 hover:bg-gray-700 py-2 w-full text-slate-200'
                        >
                            Login
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
        </div >
    );
};

export default Login;