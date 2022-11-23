import React from 'react';
import { Navigate } from 'react-router-dom';


const LoginRequired = (props) => {
    if (props.valid) {
        return (props.children)
    } else {
        return <Navigate to="/login" />
    }
}

export  { LoginRequired }
