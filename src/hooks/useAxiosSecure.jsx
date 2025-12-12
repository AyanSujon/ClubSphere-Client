// import axios from 'axios';
// import React from 'react';


// const axiosSecure = axios.create({
//     baseURL: 'http://localhost:3000'
// })


// const useAxiosSecure = () => {
//     return axiosSecure;
// };

// export default useAxiosSecure;















import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import useAuth from './useAuth';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000'
})

const useAxiosSecure = () => {
    const { user, signOutUserFunction} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // intercept request
        const reqInterceptor = axiosSecure.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${user?.accessToken}`
            return config
        })

        // interceptor response
        const resInterceptor = axiosSecure.interceptors.response.use((response) => {
            return response;
        }, (error) => {
            console.log(error);

            const statusCode = error.status;
            if (statusCode === 401 || statusCode === 403) {
                signOutUserFunction()
                    .then(() => {
                        navigate('/login')
                    })
            }


            return Promise.reject(error);
        })

        return () => {
            axiosSecure.interceptors.request.eject(reqInterceptor);
            axiosSecure.interceptors.response.eject(resInterceptor);
        }

    }, [user, signOutUserFunction, navigate])

    return axiosSecure;
};

export default useAxiosSecure;