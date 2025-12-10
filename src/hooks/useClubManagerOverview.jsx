// hooks/useClubManagerOverview.jsx
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

// /**
//  * Custom hook to fetch Club Manager Overview
//  * @param {string} managerEmail - Manager's email
//  * @param {string} [role] - Optional role filter (e.g., "member")
//  * @returns {Object} { data, isLoading, isError, refetch }
//  */
const useClubManagerOverview = (managerEmail, role) => {
  const axiosSecure = useAxiosSecure();

  const { data, isLoading, isError, refetch } = useQuery(
    ["clubManagerOverview", managerEmail, role],
    async () => {
      if (!managerEmail) {
        throw new Error("Manager email is required");
      }

      const params = { managerEmail };
      if (role) params.role = role;

      const response = await axiosSecure.get("/club-manager-overview", { params });
      return response.data;
    },
    {
      enabled: !!managerEmail, // Only run if managerEmail is provided
      staleTime: 5 * 60 * 1000, // cache for 5 minutes
    }
  );

  return { data, isLoading, isError, refetch };
};

export default useClubManagerOverview;








