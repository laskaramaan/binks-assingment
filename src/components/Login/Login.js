import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../features/Users/UserSlice';
import './Login.css'
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogin = (e) =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        dispatch(loginUser({email: email, password: password}))
        navigate('/')
        
    }
    return (
        <div>
            <form className='form-style' onSubmit={handleLogin}>
                <div className='input-div'>
                    <p className='form-label'>Email</p>
                    <input type="text" name='email' id='email' required/>
                </div>
                <div className='input-div'>
                    <p className='form-label'>Password</p>
                    <input type="password" name='password' id='password' required/>
                </div>
                <div>
                    <input className='login-btn' type="submit" value="Login" />
                </div>
            </form>
        </div>
    );
};

export default Login;