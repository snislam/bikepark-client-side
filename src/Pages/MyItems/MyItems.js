import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ManageCard from '../ManageInventory/ManageCard/ManageCard';

const MyItems = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);
    console.log(user)
    const email = user.email;

    useEffect(() => {
        axios.get(`http://localhost:5000/bikeitems?email=${email}`)
            .then(response => {
                setItems(response.data)
            })
    }, [email])

    return (
        <div>
            <h1 className='text-3xl py-5 bg-purple-800 text-center text-slate-50 font-medium'>Hey <span className='text-blue-400'>{user.displayName ? user.displayName : "Mr/Mis."} </span> Welcome to Bike Park. Here is the collection of your items.</h1>
            <div>
                {
                    items.map(item => <ManageCard key={item._id} product={item} />)
                }
            </div>
        </div>
    );
};

export default MyItems;