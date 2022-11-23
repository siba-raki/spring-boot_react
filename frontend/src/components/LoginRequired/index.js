import React from 'react';
import { Navigate } from 'react-router-dom';


const LoginRequired = (props) => {
    if (localStorage.getItem('valid')) {
        return (props.children)
    } else {
        return <Navigate to="/login" />
    }
}

export  { LoginRequired }
