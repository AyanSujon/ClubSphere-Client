// import { useQuery } from '@tanstack/react-query';
// import React from 'react';
// import useAxiosSecure from './useAxiosSecure';
// import useAuth from './useAuth';



// const useRole = () => {
//     const { user } = useAuth();
//     const axiosSecure = useAxiosSecure();

//     const { isLoading: roleLoading, data: role = 'admin' } = useQuery({
//         queryKey: ['user-role', user?.email],
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/users/${user.email}/role`);
            
//             return res.data?.role || 'admin';
//         }
//     })

//     return { role, roleLoading };
// };

// export default useRole;



import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';


const useRole = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  console.log(user)
  const { data: role, isLoading: roleLoading } = useQuery({
    queryKey: ['user-role', user?.email],
    queryFn: async () => {
      if (!user?.email) {
        throw new Error('No user email available'); 
      }
      const res = await axiosSecure.get(`/users/${user.email}/role`);
       return res.data?.role || 'member';
    },
    enabled: !!user?.email, // query only runs if user.email exists
    retry: false, // optional: prevent retrying failed calls
  });

  return { role, roleLoading };
};

export default useRole;


































