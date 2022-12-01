import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchedAsyncUser, getAllUsers } from '../../features/Users/UserSlice';
import './Home.css'
const Home = () => {
    const dispatch = useDispatch()
    const users = useSelector(getAllUsers)

    console.log(users);
    useEffect(() => {
        dispatch(fetchedAsyncUser())
    }, [dispatch])
    return (
        <div>
            {
                users?.results?.map(user => <Link to={`/userDetails/${user.login.uuid}`}><div className='name-card-style'><h3>{user.name.title + " " + user.name.first + " " + user.name.first}</h3></div></Link>)
            }
        </div>
    );
};

export default Home;