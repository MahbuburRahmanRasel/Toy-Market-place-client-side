import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user } = useContext(AuthContext);

    const location = useLocation()
    console.log(location)

    

    if (user?.email){
        return children
    }


    return (
        <>
        {

            <Navigate to= '/login'  state={{from:location}} replace ></Navigate>
        }
        </>
    );
};

export default PrivateRoute;