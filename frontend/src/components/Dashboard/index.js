import React from 'react';
import { Navigate } from 'react-router-dom';


const Dashboard = (props) => {
    if (props.valid && props.rol === 'admin') {
        return (props.children)
    } else {
        return <Navigate to="/login" />
    }
}

export  { Dashboard }
