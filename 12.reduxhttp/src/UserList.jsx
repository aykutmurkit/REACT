/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import useDispatch from 'react-redux';
import { getAllUsers } from './redux/userSlice';

function UserList() {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllUsers())
    },[])
    
return(
    <div>userList</div>
  )
}


export default UserList