// ManageClubs.jsx
import React from "react";
import useClubs from "../../../../hooks/useClubs";

const ManageClubs = () => {
  const { clubs = [], isLoading, isError } = useClubs();

  if (isLoading) return <p className="text-center mt-10">Loading clubs...</p>;
  if (isError) return <p className="text-center mt-10 text-red-500">Error loading clubs</p>;

  const handleActionChange = (clubName, action) => {
    console.log(`Action "${action}" for club:`, clubName);
    // Here you can call API to approve/reject
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Clubs</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Club Name</th>
              <th>Manager Email</th>
              <th>Status</th>
              <th>Membership Fee</th>
              <th>Members Count</th>
              <th>Events Count</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {clubs.map((club) => (
              <tr key={club.clubName}>
                <td className="font-semibold">{club.clubName}</td>
                <td>{club.managerEmail}</td>
                <td>
                  <span
                    className={`badge ${
                      club.status === "approved"
                        ? "badge-success"
                        : club.status === "pending"
                        ? "badge-warning"
                        : "badge-error"
                    }`}
                  >
                    {club.status}
                  </span>
                </td>
                <td>${club.membershipFee}</td>
                <td>{club.membersCount || 0}</td>
                <td>{club.eventsCount || 0}</td>
                <td>
                  {club.status === "pending" ? (
                    <select
                      className="select select-bordered select-sm w-full"
                      defaultValue=""
                      onChange={(e) => handleActionChange(club.clubName, e.target.value)}
                    >
                      <option value="" disabled>
                        Select Action
                      </option>
                      <option value="approve">Approve</option>
                      <option value="reject">Reject</option>
                    </select>
                  ) : (
                    <span className="text-gray-500">No Actions</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClubs;
