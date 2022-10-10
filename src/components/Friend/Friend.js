import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'
const Friend = ({friend}) => {
    const {id,name, email, username} = friend
    return (
        <div className='friend'>
            <h4>{name}</h4>
            <p><small>{email}</small></p>
            <h5><Link to={`/friend/${id}`}>{username}</Link></h5>
        </div>
    );
};

export default Friend;