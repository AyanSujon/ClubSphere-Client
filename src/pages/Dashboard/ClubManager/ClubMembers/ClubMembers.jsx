


// // ClubMembers.jsx
// import React, { useState } from "react";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { FaCalendarAlt } from "react-icons/fa";
// import useAxiosSecure from "../../../../hooks/useAxiosSecure";
// import { toast } from "react-hot-toast";

// const ClubMembers = () => {
//   const axiosSecure = useAxiosSecure();
//   const queryClient = useQueryClient();
//   const [selectedDates, setSelectedDates] = useState({}); // store selected date per member

//   // Fetch club members
//   const { data, isLoading, isError } = useQuery({
//     queryKey: ["clubMembers"],
//     queryFn: async () => {
//       const response = await axiosSecure.get(
//         "/club-members?managerEmail=ayansujonbd@gmail.com&role=manager"
//       );
//       return response.data.data;
//     },
//   });

//   // Mutation to set expiration date
//   const expireMembershipMutation = useMutation({
//     mutationFn: async ({ memberId, expireDate }) => {
//       const response = await axiosSecure.patch(`/club-members/${memberId}/expire`, {
//         expireDate,
//       });
//       return response.data;
//     },
//     onSuccess: () => {
//       toast.success("Membership expiration date set!");
//       queryClient.invalidateQueries(["clubMembers"]);
//     },
//     onError: () => {
//       toast.error("Failed to set expiration date.");
//     },
//   });

//   if (isLoading) return <p className="text-center py-10">Loading members...</p>;
//   if (isError) return <p className="text-center py-10 text-red-500">Error fetching members.</p>;

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Club Members</h2>
//       <div className="overflow-x-auto">
//         <table className="table table-zebra w-full">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Status</th>
//               <th>Join Date</th>
//               <th>Expire Date</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data && data.length > 0 ? (
//               data.map((member) => (
//                 <tr key={member._id}>
//                   <td>{member.userEmail.split("@")[0]}</td>
//                   <td>{member.userEmail}</td>
//                   <td>
//                     <span
//                       className={`badge ${
//                         member.status === "active" ? "badge-success" : "badge-error"
//                       }`}
//                     >
//                       {member.status}
//                     </span>
//                   </td>
//                   <td>{new Date(member.joinedAt).toLocaleDateString()}</td>
//                   <td>
//                     {member.status !== "expired" ? (
//                       <input
//                         type="date"
//                         className="input input-sm input-bordered"
//                         value={selectedDates[member._id] || ""}
//                         onChange={(e) =>
//                           setSelectedDates((prev) => ({
//                             ...prev,
//                             [member._id]: e.target.value,
//                           }))
//                         }
//                       />
//                     ) : (
//                       "Expired"
//                     )}
//                   </td>
//                   <td>
//                     {member.status !== "expired" && selectedDates[member._id] && (
//                       <button
//                         className="btn btn-sm btn-error gap-2 flex items-center"
//                         onClick={() =>
//                           expireMembershipMutation.mutate({
//                             memberId: member._id,
//                             expireDate: selectedDates[member._id],
//                           })
//                         }
//                       >
//                         <FaCalendarAlt /> Set Expire
//                       </button>
//                     )}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="6" className="text-center">
//                   No members found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ClubMembers;















// ClubMembers.jsx
import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { FaCalendarAlt } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import useAuth from "../../../../hooks/useAuth";

const ClubMembers = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [selectedDates, setSelectedDates] = useState({}); // store selected date per member
const {user} = useAuth();
  // Fetch club members
  const { data, isLoading, isError } = useQuery({
    queryKey: ["clubMembers"],
    queryFn: async () => {
      const response = await axiosSecure.get(
        // `/club-members?managerEmail=${user.email}&role=${user.role}`
        "/club-members?managerEmail=ayansujonbd@gmail.com&role=manager"
      );
      return response.data.data;
    },
  });

  // Mutation to set expiration date or delete membership
  const expireOrDeleteMutation = useMutation({
    mutationFn: async ({ memberId, expireDate }) => {
      if (!expireDate) {
        // Delete if no date
        const response = await axiosSecure.delete(`/club-members/${memberId}`);
        return response.data;
      } else {
        // Otherwise set expiration date
        const response = await axiosSecure.patch(`/club-members/${memberId}/expire`, {
          expireDate,
        });
        return response.data;
      }
    },
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries(["clubMembers"]);
    },
    onError: () => {
      toast.error("Failed to update membership.");
    },
  });

  if (isLoading) return <p className="text-center py-10">Loading members...</p>;
  if (isError) return <p className="text-center py-10 text-red-500">Error fetching members.</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Club Members</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Join Date</th>
              <th>Expire Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((member) => (
                <tr key={member._id}>
                  <td>{member.userEmail.split("@")[0]}</td>
                  <td>{member.userEmail}</td>
                  <td>
                    <span
                      className={`badge ${
                        member.status === "active" ? "badge-success" : "badge-error"
                      }`}
                    >
                      {member.status}
                    </span>
                  </td>
                  <td>{new Date(member.joinedAt).toLocaleDateString()}</td>
                  <td>
                    {member.status !== "expired" ? (
                      <input
                        type="date"
                        className="input input-sm input-bordered"
                        value={selectedDates[member._id] || ""}
                        onChange={(e) =>
                          setSelectedDates((prev) => ({
                            ...prev,
                            [member._id]: e.target.value,
                          }))
                        }
                      />
                    ) : (
                      "Expired"
                    )}
                  </td>
                  <td>
                    {member.status !== "expired" && (
                      <button
                        className="btn btn-sm btn-error gap-2 flex items-center"
                        onClick={() =>
                          expireOrDeleteMutation.mutate({
                            memberId: member._id,
                            expireDate: selectedDates[member._id], // if empty, it will delete
                          })
                        }
                      >
                        <FaCalendarAlt /> Set Expire
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No members found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClubMembers;
