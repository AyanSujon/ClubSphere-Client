// import { useQuery } from "@tanstack/react-query";
// import useAxios from "./useAxios";


// const usePayments = (filters = {}) => {
//   const axiosInstance = useAxios();

//   const {
//     userEmail,
//     clubId,
//     status,
//     method,
//     startDate,
//     endDate,
//     minAmount,
//     maxAmount,
//   } = filters;

//   // Build dynamic query params
//   const queryParams = new URLSearchParams();

//   if (userEmail) queryParams.append("userEmail", userEmail);
//   if (clubId) queryParams.append("clubId", clubId);
//   if (status) queryParams.append("status", status); // e.g., paid, pending, failed
//   if (method) queryParams.append("method", method); // e.g., stripe, paypal, bkash
//   if (startDate) queryParams.append("startDate", startDate);
//   if (endDate) queryParams.append("endDate", endDate);
//   if (minAmount) queryParams.append("minAmount", minAmount);
//   if (maxAmount) queryParams.append("maxAmount", maxAmount);

//   const {
//     data: payments = [],
//     isLoading,
//     isError,
//   } = useQuery({
//     queryKey: ["payments", filters],
//     queryFn: async () => {
//       const res = await axiosInstance.get(
//         `/payments?${queryParams.toString()}`
//       );
//       return res.data;
//     },
//   });

//   return { payments, isLoading, isError };
// };

// export default usePayments;



import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const usePayments = (filters = {}) => {
  const axiosInstance = useAxios();

  const {
    userEmail,
    clubId,
    eventId,
    status,
    paymentType,   // event / membership / donation etc.
    minAmount,
    maxAmount,
    startDate,
    endDate,
  } = filters;

  const queryParams = new URLSearchParams();

  if (userEmail) queryParams.append("userEmail", userEmail);
  if (clubId) queryParams.append("clubId", clubId);
  if (eventId) queryParams.append("eventId", eventId);
  if (status) queryParams.append("status", status); // paid, failed, pending
  if (paymentType) queryParams.append("paymentType", paymentType);

  if (minAmount) queryParams.append("minAmount", minAmount);
  if (maxAmount) queryParams.append("maxAmount", maxAmount);

  if (startDate) queryParams.append("startDate", startDate);
  if (endDate) queryParams.append("endDate", endDate);

  const {
    data: payments = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["payments", filters],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/payments?${queryParams.toString()}`
      );
      return res.data;
    },
  });

  return { payments, isLoading, isError };
};

export default usePayments;
