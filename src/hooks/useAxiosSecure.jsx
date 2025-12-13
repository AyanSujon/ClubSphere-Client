// import axios from 'axios';
// import React from 'react';


// const axiosSecure = axios.create({
//     baseURL: 'https://club-sphere-api.vercel.app'
// })


// const useAxiosSecure = () => {
//     return axiosSecure;
// };

// export default useAxiosSecure;





// import axios from 'axios';
// import React, { useEffect } from 'react';
// import useAuth from './useAuth';


// const axiosSecure = axios.create({
//     baseURL: 'https://club-sphere-api.vercel.app'
// })


// const useAxiosSecure = () => {
//     const {user}= useAuth();

// useEffect(()=> {
//     axiosSecure.interceptors.request.use(config => {
//         config.headers.Authorization = `Bearer ${user?.accessToken}`
//         return config
//     })
// },[user])

//     return axiosSecure;
// };

// export default useAxiosSecure;













import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import useAuth from './useAuth';

const axiosSecure = axios.create({
    baseURL: 'https://club-sphere-api.vercel.app',
});

const useAxiosSecure = () => {
    const { user, loading, signOutUserFunction } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        // request interceptor
        if (!loading && user) {
            const reqInterceptor = axiosSecure.interceptors.request.use(async config => {
                const token = user && (await user.getIdToken());
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            });
            // response interceptor
            const resInterceptor = axiosSecure.interceptors.response.use(
                response => response,
                error => {
                    const statusCode = error.response?.status;
                    if (statusCode === 401 || statusCode === 403) {
                        signOutUserFunction().then(() => {
                            navigate('/login');
                        });
                    }
                    return Promise.reject(error);
                }
            );

            // eject interceptors on cleanup
            return () => {
                axiosSecure.interceptors.request.eject(reqInterceptor);
                axiosSecure.interceptors.response.eject(resInterceptor);
            };

        }

    }, [user, signOutUserFunction, navigate]);

    return axiosSecure;
};

export default useAxiosSecure;
