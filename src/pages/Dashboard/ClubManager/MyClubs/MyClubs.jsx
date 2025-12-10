
import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const MyClubs = () => {
  const axiosSecure = useAxiosSecure();

  const managerEmail = "ayansujonbd@gmail.com"; // can be dynamic
  const role = "manager";

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

  // Ensure data is an array
  const clubsArray = Array.isArray(data) ? data : data?.clubs || [];

  // Calculate summary
  const totalClubs = clubsArray.length;
  const totalMembers = clubsArray.reduce(
    (sum, club) => sum + (club.membersCount || 0),
    0
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Clubs</h1>

      {/* Summary */}
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

      {/* Clubs List */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Clubs List</h2>
        {clubsArray.length === 0 ? (
          <p>No clubs found.</p>
        ) : (
          <ul className="space-y-2">
            {clubsArray.map((club) => (
              <li key={club._id} className="p-3 border rounded shadow-sm">
                <p><strong>{club.clubName}</strong></p>
                <p>Members: {club.membersCount}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MyClubs;