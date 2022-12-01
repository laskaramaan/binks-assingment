import React from 'react';
import { useParams } from 'react-router-dom';
import { store } from '../../app/store';
import './UserDetails.css'
const UserDetails = () => {
    const users = store.getState().users.users
    const {uuid} = useParams()
    const selectedUser = users.results.find(user => user.login.uuid == uuid);
    console.log(selectedUser)
    return (
        <div className='details-div'>
            <div>
                <img className='img-style' src={selectedUser?.picture?.large} alt="" />
            </div>
            <div>
                <h3>{selectedUser?.name?.title + " " +selectedUser?.name?.first + " " + selectedUser?.name?.last}</h3>
                <p>{selectedUser.email}</p>
            </div>
        </div>
    );
};

export default UserDetails;