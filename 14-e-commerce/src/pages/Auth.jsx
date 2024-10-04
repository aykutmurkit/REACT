import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/slices/authSlice';

function Auth() {

    const dispatch = useDispatch();
    
    dispatch(login());

  return (
    <div>Auth</div>
  )
}

export default Auth