// // ManageUsers.jsx
// import React from "react";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import useAxiosSecure from "../../../../hooks/useAxiosSecure";

// const ManageUsers = () => {
//   const axiosSecure = useAxiosSecure();
//   const queryClient = useQueryClient();

//   // Fetch users using custom hook
//   const { data: users = [], isLoading, isError } = useQuery({
//     queryKey: ["users"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/users");
//       return res.data;
//     },
//   });

//   // Mutation to change user role
//   const changeRoleMutation = useMutation({
//     mutationFn: async ({ userId, role }) => {
//       const res = await axiosSecure.patch(`/users/${userId}/role`, { role });
//       return res.data;
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["users"] });
//     },
//   });

//   const handleChangeRole = (userId, role) => {
//     changeRoleMutation.mutate({ userId, role });
//   };

//   if (isLoading) return <p>Loading users...</p>;
//   if (isError) return <p>Error fetching users</p>;

//   return (
//     <div>
//       <div className="p-4">
//         <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
//       </div>
//       <div className="overflow-x-auto">
//       <table className="table w-full">
//         <thead>
//           <tr>
//             <th>
//               <input type="checkbox" className="checkbox" />
//             </th>
//             <th>Photo</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Role</th>
//             <th>Created At</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user._id}>
//               <th>
//                 <input type="checkbox" className="checkbox" />
//               </th>
//               <td>
//                 <div className="avatar">
//                   <div className="mask mask-squircle h-12 w-12">
//                     <img
//                       src={user.photoURL || "https://via.placeholder.com/40"}
//                       alt={user.name}
//                     />
//                   </div>
//                 </div>
//               </td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.role}</td>
//               <td>{new Date(user.createdAt).toLocaleDateString()}</td>
//               <td>
//                 <select
//                   className="select select-bordered select-sm w-full max-w-xs"
//                   value={user.role}
//                   onChange={(e) => handleChangeRole(user._id, e.target.value)}
//                 >
//                   <option value="admin">Admin</option>
//                   <option value="clubManager">Club Manager</option>
//                   <option value="member">Member</option>
//                 </select>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//         <tfoot>
//           <tr>
//             <th></th>
//             <th>Photo</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Role</th>
//             <th>Created At</th>
//             <th>Actions</th>
//           </tr>
//         </tfoot>
//       </table>
//     </div>
//     </div>
//   );
// };

// export default ManageUsers;














import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [filterRole, setFilterRole] = useState("all");

  // Fetch users using custom hook
  const { data: users = [], isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  // Mutation to change user role
  const changeRoleMutation = useMutation({
    mutationFn: async ({ userId, role }) => {
      const res = await axiosSecure.patch(`/users/${userId}/role`, { role });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const handleChangeRole = (userId, role) => {
    changeRoleMutation.mutate({ userId, role });
  };

  if (isLoading) return <p>Loading users...</p>;
  if (isError) return <p>Error fetching users</p>;

  // Filter users by role
  const filteredUsers =
    filterRole === "all"
      ? users
      : users.filter((user) => user.role === filterRole);

  return (
    <div>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Manage Users</h1>

        {/* Filter by Role */}
        <div className="mb-4 flex justify-between items-center">
          <label className="mr-2 font-medium">Filter by Role:</label>
          <select
            className="select select-bordered select-sm"
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
          >
            <option value="all">All</option>
            <option value="admin">Admin</option>
            <option value="clubManager">Club Manager</option>
            <option value="member">Member</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <input type="checkbox" className="checkbox" />
              </th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user._id}>
                <th>
                  <input type="checkbox" className="checkbox" />
                </th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={user.photoURL || "https://via.placeholder.com/40"}
                        alt={user.name}
                      />
                    </div>
                  </div>
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                <td>
                  <select
                    className="select select-bordered select-sm w-full max-w-xs"
                    value={user.role}
                    onChange={(e) => handleChangeRole(user._id, e.target.value)}
                  >
                    <option value="admin">Admin</option>
                    <option value="clubManager">Club Manager</option>
                    <option value="member">Member</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
