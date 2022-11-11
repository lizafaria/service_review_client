import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase.init';
import LoadingScreen from '../SharedPageSection/LoadingScreen';

const RequireAuth = ({ children }) => {
    let location = useLocation();
    
    const [user, loading, error] = useAuthState(auth);
    const varify = user?.emailVerified || user?.providerId;
    if (loading) {
        return <LoadingScreen/>
    }
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if(varify == false){
        return <Navigate to="/verify" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;