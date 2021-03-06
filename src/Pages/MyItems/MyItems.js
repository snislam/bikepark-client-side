import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import PageTitle from '../../Common/Helmet/PageTitle';
import auth from '../../firebase.init';
import ManageCard from '../ManageInventory/ManageCard/ManageCard';

const MyItems = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);
    const email = user.email;


    // delete button function
    const handleDelete = (id) => {
        const confirm = window.confirm("Are sure to delete thi item?");
        if (confirm) {
            axios.delete(`https://enigmatic-depths-65126.herokuapp.com/bikeitems/${id}`)
                .then(res => {
                    console.log(res)
                })
            axios.get(`https://enigmatic-depths-65126.herokuapp.com/mybikeitems?email=${email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            })
                .then(response => {
                    console.log(response.data)
                    setItems(response.data)
                })
        } else {
            toast('Okay dear, I am keeping it up ')
        }

    }

    useEffect(() => {
        axios.get(`https://enigmatic-depths-65126.herokuapp.com/mybikeitems?email=${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(response => {
                console.log(response.data)
                setItems(response.data)
            })
    }, [email, items])

    return (
        <div>
            <PageTitle title="My Items" />
            <h1 className='text-3xl py-5 bg-purple-800 text-center text-slate-50 font-medium'>Hey <span className='text-blue-400'>{user.displayName ? user.displayName : "Mr/Mis."} </span> Welcome to Bike Park. Here is the collection of your items.</h1>
            <div>
                {
                    items.map(item => <ManageCard key={item._id} product={item} handleDelete={() => handleDelete(item._id)} />)
                }
            </div>
        </div>
    );
};

export default MyItems;