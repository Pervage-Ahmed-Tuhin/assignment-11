import axios from "axios";
import { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Authprovider/AuthProvider";


const axiosSecure = axios.create({
    baseURL: 'https://food-sharing-server-site.vercel.app',
    withCredentials: true
});

const useAxiosSecure = () => {
    const { LogOutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('error tracked in the interceptor', error.response)
            if (error.response.status === 401 || error.response.status === 403) {
                console.log('logout the user')
                LogOutUser()
                    .then(() => {
                        navigate('/login')
                    })
                    .catch(error => console.log(error))
            }
        })
    }, [])

    return axiosSecure;
};

export default useAxiosSecure;