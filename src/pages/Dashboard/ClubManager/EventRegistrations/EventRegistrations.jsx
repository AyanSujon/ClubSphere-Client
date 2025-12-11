import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FaUserCircle } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import useAuth from "../../../../hooks/useAuth";

const EventRegistrations = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth(); // dynamic manager
  const photoURL = user?.photoURL;

  const managerEmail = user?.email;
  const role = user?.role || "manager";

  const { data: registrations = [], isLoading, isError } = useQuery({
    queryKey: ["eventRegistrations", managerEmail, role],
    queryFn: async () => {
      if (!managerEmail || !role) return [];

      try {
        const res = await axiosSecure.get(
          "/event-registrations",
          {
            params: { managerEmail, role },
          }
        );
        return res.data;
      } catch (error) {
        toast.error("Failed to fetch event registrations");
        throw error;
      }
    },
    enabled: !!managerEmail && !!role, // only run if email & role available
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <p className="text-red-500 text-center mt-4">
        Failed to load event registrations
      </p>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-5">Event Registrations</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Email</th>
              <th>Status</th>
              <th>Registered At</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((reg, index) => (
              <tr key={index}>
                <td>
                  {
                    photoURL ? (
                      <img
                        src={photoURL}
                        alt="User"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <FaUserCircle className="text-3xl text-gray-500" />
                    )
                  }
                </td>

                <td>{reg.userEmail}</td>

                <td>
                  <span
                    className={`px-2 py-1 rounded-full text-white ${reg.status === "registered"
                        ? "bg-green-500"
                        : "bg-red-500"
                      }`}
                  >
                    {reg.status === "registered" ? "Registered" : "Cancelled"}
                  </span>
                </td>


                <td>
                  {new Date(reg.registeredAt).toLocaleString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {registrations.length === 0 && (
          <p className="text-center mt-4 text-gray-500">
            No event registrations found.
          </p>
        )}
      </div>
    </div>
  );
};

export default EventRegistrations;












