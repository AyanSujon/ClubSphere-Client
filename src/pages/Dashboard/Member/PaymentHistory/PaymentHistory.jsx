import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const userEmail = user?.email;
  const role = user?.role;

  // Fetch payments using TanStack Query v5
  const paymentsQuery = useQuery({
    queryKey: ['memberPayments', userEmail],
    queryFn: async () => {
      const res = await axiosSecure.get(`/member/my-payments?userEmail=${userEmail}&role=${role}`);
      return res.data;
    },
    enabled: !!userEmail, // only fetch if userEmail exists
  });

  const { data: payments = [], isLoading, isError } = paymentsQuery;

  if (isLoading) return <div>Loading payments...</div>;
  if (isError) return <div>Error fetching payments.</div>;

  // Format date to "MMM DD, YYYY, hh:mm AM/PM"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: 'numeric', month: 'short', day: '2-digit',
      hour: '2-digit', minute: '2-digit', hour12: true
    };
    return date.toLocaleString('en-US', options);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Club / Event</th>
            <th>Amount ($)</th>
            <th>Type</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">No payments found</td>
            </tr>
          ) : (
            payments.map(payment => (
              <tr key={payment._id}>
                <td>{payment.eventTitle || payment.clubId}</td>
                <td>{payment.amount}</td>
                <td>{payment.paymentType}</td>
                <td>{formatDate(payment.createdAt)}</td>
                <td className="flex items-center gap-1">
                  {payment.status === 'paid' ? (
                    <span className="text-green-600 flex items-center">
                      <FaCheckCircle className="mr-1" /> Paid
                    </span>
                  ) : (
                    <span className="text-red-600 flex items-center">
                      <FaTimesCircle className="mr-1" /> Pending
                    </span>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
