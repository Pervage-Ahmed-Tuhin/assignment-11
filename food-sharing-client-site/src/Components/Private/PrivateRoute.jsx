import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Authprovider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loader } = useContext(AuthContext);
    if (loader) {
        return <div className="flex justify-center items-center">
            <span className="mt-[50%] md:mt-[40%] loading loading-spinner loading-lg text-2xl"></span>
        </div>

    }

    if (!user) {

        return <Navigate state={location?.pathname || '/'} to="/login"></Navigate>

    }

    // if (!user) {
    //     return <Navigate to="/login" />;
    // }

    return children;
};

export default PrivateRoute;