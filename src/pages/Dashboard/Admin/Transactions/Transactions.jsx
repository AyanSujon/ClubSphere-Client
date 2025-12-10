



// import React from 'react';
// import usePayments from '../../../../hooks/usePayments';
// import useAuth from '../../../../hooks/useAuth';

// const Transactions = () => {
//   const { payments, isLoading, isError } = usePayments();
//     const { user } = useAuth();

//   if (isLoading) {
//     return (
//       <div className="flex justify-center py-10">
//         <span className="loading loading-spinner loading-lg text-primary"></span>
//       </div>
//     );
//   }

//   if (isError) {
//     return (
//       <div className="text-center text-red-600 py-10">
//         Failed to load payments.
//       </div>
//     );
//   }

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-semibold mb-4">Payments / Transactions</h2>

//       <div className="overflow-x-auto shadow-lg rounded-xl border border-base-300">
//         <table className="table table-zebra w-full">
//           {/* HEAD */}
//           <thead className="bg-base-200">
//             <tr>
//               <th>#</th>
//               <th>Photo</th>
//               <th>User Email</th>
//               <th>Amount</th>
//               <th>Type</th>
//               <th>Club / Event Name</th>
//               <th>Date</th>
//             </tr>
//           </thead>

//           {/* BODY */}
//           <tbody>
//             {payments.map((item, index) => (
//               <tr key={item._id}>
//                 <td>{index + 1}</td>

//                 {/* PHOTO (if you add photoURL later) */}
//                 <td>
//                   <div className="avatar">
//                     <div className="w-12 h-12 rounded-full border">
//                       <img
//                         src={
//                           user?.photoURL ||
//                           "https://i.ibb.co/4pDNDk1/avatar-placeholder.png"
//                         }
//                         alt="User"
//                       />
//                     </div>
//                   </div>
//                 </td>

//                 <td>{item.userEmail}</td>
//                 <td>${item.amount}</td>

//                 <td>
//                   <span className="badge badge-primary badge-sm capitalize">
//                     {item.paymentType}
//                   </span>
//                 </td>

//                 {/* Event Title OR Club Name */}
//                 <td>{item.eventTitle || "N/A"}</td>

//                 {/* Formatted date */}
//                 <td>{new Date(item.createdAt).toLocaleDateString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Transactions;





import React, { useState } from 'react';
import usePayments from '../../../../hooks/usePayments';
import useAuth from '../../../../hooks/useAuth';

const Transactions = () => {
  const { payments, isLoading, isError } = usePayments();
  const { user } = useAuth();
  const [filter, setFilter] = useState('all'); // default: show all

  if (isLoading) {
    return (
      <div className="flex justify-center py-10">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-600 py-10">
        Failed to load payments.
      </div>
    );
  }

  // Filter payments based on type
  const filteredPayments =
    filter === 'all'
      ? payments
      : payments.filter((item) => item.paymentType === filter);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Payments / Transactions</h2>

      {/* Filter Dropdown */}
      <div className="mb-4 flex justify-between items-center gap-4 ">
        <label className="font-medium">Filter by Type:</label>
        <select
          className="select select-bordered w-48"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="club">Club</option>
          <option value="event">Event</option>
        </select>
      </div>

      <div className="overflow-x-auto shadow-lg rounded-xl border border-base-300">
        <table className="table table-zebra w-full">
          {/* HEAD */}
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>User Email</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Club / Event Name</th>
              <th>Date</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {filteredPayments.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>

                {/* PHOTO (if you add photoURL later) */}
                <td>
                  <div className="avatar">
                    <div className="w-12 h-12 rounded-full border">
                      <img
                        src={
                          user?.photoURL ||
                          'https://i.ibb.co/4pDNDk1/avatar-placeholder.png'
                        }
                        alt="User"
                      />
                    </div>
                  </div>
                </td>

                <td>{item.userEmail}</td>
                <td>${item.amount}</td>

                <td>
                  <span className="badge badge-primary badge-sm capitalize">
                    {item.paymentType}
                  </span>
                </td>

                <td>{item.eventTitle || 'N/A'}</td>

                <td>{new Date(item.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredPayments.length === 0 && (
          <div className="text-center py-6 text-gray-500">
            No payments found for selected type.
          </div>
        )}
      </div>
    </div>
  );
};

export default Transactions;
