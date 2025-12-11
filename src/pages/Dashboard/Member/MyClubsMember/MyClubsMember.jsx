import React from 'react';
import { FaEye, FaCheckCircle } from 'react-icons/fa';

const MyClubsMember = () => {
  const clubs = [
    {
      _id: "693abad016c2eae056311176",
      clubName: "Photography Club",
      location: "New York, NY",
      status: "active",
      expiryDate: "2026-12-11T12:36:32.242+00:00",
    },
    {
      _id: "693abad016c2eae056311177",
      clubName: "Cooking Club",
      location: "Los Angeles, CA",
      status: "inactive",
      expiryDate: "2025-10-01T12:00:00.000+00:00",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Clubs</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Club Name</th>
              <th>Location</th>
              <th>Membership Status</th>
              <th>Expiry Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {clubs.map((club) => (
              <tr key={club._id}>
                <td>{club.clubName}</td>
                <td>{club.location}</td>
                <td>
                  {club.status === "active" ? (
                    <span className="badge badge-success gap-2 flex items-center">
                      <FaCheckCircle /> Active
                    </span>
                  ) : (
                    <span className="badge badge-error">Inactive</span>
                  )}
                </td>
                <td>{new Date(club.expiryDate).toLocaleDateString()}</td>
                <td>
                  <button className="btn btn-sm btn-primary flex items-center gap-1">
                    <FaEye /> View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClubsMember;
