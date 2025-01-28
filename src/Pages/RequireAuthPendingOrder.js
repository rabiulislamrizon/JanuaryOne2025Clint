import React from 'react';
import auth from '../firebase.init'; // Corrected path for firebase.init
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Shared/Loading';


const RequireAuthPendingOrder = ({ children }) => {
    const [user, loading] = useAuthState(auth); // Removed 'error' since it's not being used
    const location = useLocation();

    if (loading) {
        return <Loading />;
    }

    if (!user) {
        return <Navigate to="/register-general" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuthPendingOrder;
