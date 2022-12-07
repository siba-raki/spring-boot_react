import React from 'react';
import { Navigate } from 'react-router-dom';


const Dashboard = (props) => {
    if (localStorage.getItem('valid') && localStorage.getItem('rol') === 'admin') {
        return (props.children)
    } else {
        return <Navigate to="/login" />
    }
}

export  { Dashboard }
