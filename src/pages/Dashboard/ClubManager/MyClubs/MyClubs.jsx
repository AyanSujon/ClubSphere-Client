


// import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import { FaEye, FaEdit } from "react-icons/fa";
// import useAxiosSecure from "../../../../hooks/useAxiosSecure";
// import { Link, useParams } from "react-router";
// import useClubs from "../../../../hooks/useClubs";

// const MyClubs = () => {
//     const axiosSecure = useAxiosSecure();

//     const managerEmail = "ayansujonbd@gmail.com"; // can be dynamic
//     const role = "manager";

//     const { data, isLoading, isError } = useQuery({
//         queryKey: ["myClubs", managerEmail, role],
//         queryFn: async () => {
//             const response = await axiosSecure.get(
//                 `/my-clubs?managerEmail=${managerEmail}&role=${role}`
//             );
//             return response.data;
//         },
//     });

//     if (isLoading) return <p>Loading...</p>;
//     if (isError) return <p>Something went wrong!</p>;

//     const clubsArray = Array.isArray(data) ? data : data?.clubs || [];

//     const totalClubs = clubsArray.length;
//     const totalMembers = clubsArray.reduce(
//         (sum, club) => sum + (club.membersCount || 0),
//         0
//     );

//     return (
//         <div className="p-4">
//             <h1 className="text-2xl font-bold mb-4">My Clubs</h1>

//             {/* Summary */}
//             <div className="flex gap-6 mb-6">
//                 <div className="bg-blue-100 p-4 rounded shadow">
//                     <p className="text-gray-700">Total Clubs Managed</p>
//                     <p className="text-xl font-bold">{totalClubs}</p>
//                 </div>
//                 <div className="bg-green-100 p-4 rounded shadow">
//                     <p className="text-gray-700">Total Members</p>
//                     <p className="text-xl font-bold">{totalMembers}</p>
//                 </div>
//             </div>

//             {/* Clubs Table */}
//             <div>
//                 <h2 className="text-xl font-semibold mb-2">Clubs List</h2>
//                 {clubsArray.length === 0 ? (
//                     <p>No clubs found.</p>
//                 ) : (
//                     <div className="overflow-x-auto">
//                         <table className="table w-full table-zebra">
//                             <thead>
//                                 <tr>
//                                     <th>Clubs Title</th>
//                                     <th>Members</th>
//                                     <th>Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {clubsArray.map((club) => (
//                                     <tr key={club._id}>
//                                         <td>{club.clubName}</td>
//                                         <td>{club.membersCount}</td>
//                                         <td className="flex gap-2">
//                                             <Link to={`/dashboard/manager/my-clubs/${club._id}`} className="btn btn-sm btn-info flex items-center gap-1">
//                                                 <FaEye /> View
//                                             </Link>

//                                             <Link
//                                             managerEmail={managerEmail}
//                                                 to={`/dashboard/manager/my-clubs/${club._id}/edit`}
//                                                 className="btn btn-sm btn-warning flex items-center gap-1"
//                                             >
//                                                 <FaEdit /> Edit
//                                             </Link>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default MyClubs;


























import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FaEye, FaEdit } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router";

const MyClubs = () => {
  const axiosSecure = useAxiosSecure();

  // Manager email (can be dynamic)
  const managerEmail = "ayansujonbd@gmail.com";
  const role = "manager";

  // Fetch manager's clubs
  const { data, isLoading, isError } = useQuery({
    queryKey: ["myClubs", managerEmail, role],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/my-clubs?managerEmail=${managerEmail}&role=${role}`
      );
      return response.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong!</p>;

  const clubsArray = Array.isArray(data) ? data : data?.clubs || [];

  // Summary stats
  const totalClubs = clubsArray.length;
  const totalMembers = clubsArray.reduce(
    (sum, club) => sum + (club.membersCount || 0),
    0
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Clubs</h1>

      {/* Summary Cards */}
      <div className="flex gap-6 mb-6">
        <div className="bg-blue-100 p-4 rounded shadow">
          <p className="text-gray-700">Total Clubs Managed</p>
          <p className="text-xl font-bold">{totalClubs}</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow">
          <p className="text-gray-700">Total Members</p>
          <p className="text-xl font-bold">{totalMembers}</p>
        </div>
      </div>

      {/* Clubs Table */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Clubs List</h2>
        {clubsArray.length === 0 ? (
          <p>No clubs found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full table-zebra">
              <thead>
                <tr>
                  <th>Club Title</th>
                  <th>Members</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {clubsArray.map((club) => (
                  <tr key={club._id}>
                    <td>{club.clubName}</td>
                    <td>{club.membersCount}</td>
                    <td className="flex gap-2">
                      {/* View Button */}
                      <Link
                        to={`/dashboard/manager/my-clubs/${club._id}`}
                        className="btn btn-sm btn-info flex items-center gap-1"
                      >
                        <FaEye /> View
                      </Link>

                      {/* Edit Button - pass managerEmail via state */}
                      <Link
                        to={`/dashboard/manager/my-clubs/${club._id}/edit`}
                        state={{ managerEmail }}
                        className="btn btn-sm btn-warning flex items-center gap-1"
                      >
                        <FaEdit /> Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyClubs;