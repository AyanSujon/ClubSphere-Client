import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FaUsers, FaMoneyBillWave, FaRegCalendarAlt, FaUniversity } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ClubManager = () => {
  const axiosSecure = useAxiosSecure();

  // YOUR MANAGER EMAIL
  const managerEmail = "ayansujonbd@gmail.com"; // <-- change dynamically if needed

  // FETCH MANAGER OVERVIEW DATA
  const { data: overview = {}, isLoading } = useQuery({
    queryKey: ["club-manager-overview", managerEmail],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/club-manager-overview?managerEmail=${managerEmail}`
      );
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center mt-10">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Club Manager Overview</h1>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

        <div className="card bg-base-200 p-6 shadow rounded-xl border border-base-300">
          <FaUniversity className="text-4xl text-primary mb-3" />
          <h2 className="text-xl font-semibold">Clubs Managed</h2>
          <p className="text-3xl font-bold">{overview.clubs?.total || 0}</p>
        </div>

        <div className="card bg-base-200 p-6 shadow rounded-xl border border-base-300">
          <FaUsers className="text-4xl text-secondary mb-3" />
          <h2 className="text-xl font-semibold">Total Members</h2>
          <p className="text-3xl font-bold">{overview.members?.total || 0}</p>
        </div>

        <div className="card bg-base-200 p-6 shadow rounded-xl border border-base-300">
          <FaRegCalendarAlt className="text-4xl text-accent mb-3" />
          <h2 className="text-xl font-semibold">Total Events</h2>
          <p className="text-3xl font-bold">{overview.events?.total || 0}</p>
        </div>

        <div className="card bg-base-200 p-6 shadow rounded-xl border border-base-300">
          <FaMoneyBillWave className="text-4xl text-green-500 mb-3" />
          <h2 className="text-xl font-semibold">Total Payments</h2>
          <p className="text-xl font-bold">
            {overview.payments?.totalPayments || 0} <br />
            <span className="text-sm text-gray-600">
              Amount: ${overview.payments?.totalAmount || 0}
            </span>
          </p>
        </div>

      </div>

      {/* DETAILS TABLE */}
      <div className="overflow-x-auto rounded-xl border border-base-300 shadow-lg">
        <table className="table">
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Club Name</th>
              <th>Club ID</th>
              <th>Category</th>
            </tr>
          </thead>

          <tbody>
            {overview.clubsList?.length > 0 ? (
              overview.clubsList.map((club, index) => (
                <tr key={club._id}>
                  <td>{index + 1}</td>
                  <td className="font-semibold">{club.name}</td>
                  <td>{club._id}</td>
                  <td>{club.category}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-6">
                  No clubs found for this manager
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ClubManager;
