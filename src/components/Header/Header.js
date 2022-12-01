import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { store } from '../../app/store';
import { logOutUser } from '../../features/Users/UserSlice';
import './Header.css'
const Header = () => {
    const user = store.getState().users.user
    const navigate = useNavigate()
    const dispatch =useDispatch()
    console.log(user)
    console.log(user)
    const handleLogout = () =>{
        dispatch(logOutUser())
        navigate('/')
    }
    return (
        <div className='header-style'>
            <div><Link className='logo' to='/'><p>Users</p></Link></div>
            <div className='header-routes'>
                <Link className='header-route' to='/'><p>Home</p></Link>
                {
                    user?.email ?
                    <button onClick={handleLogout} className='header-button'>Logout</button>
                    :
                    <Link className='header-route' to='/login'><p>Login</p></Link>

                }
            </div>
        </div>
    );
};

export default Header;