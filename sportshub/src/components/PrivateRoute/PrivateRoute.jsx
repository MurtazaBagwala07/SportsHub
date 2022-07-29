import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {token} = useSelector((store)=>store.auth)

  return token ? (
    children
  ) : (
    <Navigate to='/' state={{from : location}} replace={true}/>
  )
}
