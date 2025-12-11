// import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import { FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
// import useAxiosSecure from "../../../../hooks/useAxiosSecure";
// import useAuth from "../../../../hooks/useAuth";

// const MyEventsMember = () => {
//   const axiosSecure = useAxiosSecure();
//   const { user } = useAuth();

//   // User Auth Data
//   const userEmail = user?.email;
//   const role = user?.role;

//   // Fetch My Events (Event Registrations)
//   const { data: events = [], isLoading } = useQuery({
//     queryKey: ["myEvents", userEmail, role],
//     queryFn: async () => {
//       const res = await axiosSecure.get(
//         `/member/my-events?userEmail=${userEmail}&role=${role}`
//       );
//       return res.data;
//     },
//     enabled: !!userEmail, // Wait until user loads
//   });

//   // Format Date in AM/PM
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleString("en-US", {
//       dateStyle: "medium",
//       timeStyle: "short",
//     });
//   };

//   if (isLoading)
//     return (
//       <div className="text-center py-20 text-lg font-semibold">
//         Loading My Events...
//       </div>
//     );

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
//         <FaCalendarAlt /> My Events
//       </h2>

//       <div className="overflow-x-auto">
//         <table className="table table-zebra w-full">
//           <thead>
//             <tr className="bg-base-200">
//               <th>Event Title</th>
//               <th>Club</th>
//               <th>Date</th>
//               <th>Status</th>
//             </tr>
//           </thead>

//           <tbody>
//             {events.length === 0 ? (
//               <tr>
//                 <td colSpan="4" className="text-center py-6">
//                   No event registrations found.
//                 </td>
//               </tr>
//             ) : (
//               events.map((event) => (
//                 <tr key={event._id}>
//                   <td className="font-semibold">{event.eventTitle}</td>
//                   <td>{event.clubName}</td>
//                   <td>{formatDate(event.registeredAt)}</td>
//                   <td>
//                     <span
//                       className={`badge ${
//                         event.status === "registered"
//                           ? "badge-success"
//                           : "badge-ghost"
//                       }`}
//                     >
//                       <FaCheckCircle className="mr-1" />
//                       {event.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MyEventsMember;















import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

const MyEventsMember = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const userEmail = user?.email;
  const role = user?.role;

  // Fetch user's event registrations
  const { data: registrations = [], isLoading } = useQuery({
    queryKey: ["myEvents", userEmail],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/member/my-events?userEmail=${userEmail}&role=${role}`
      );
      return res.data;
    },
    enabled: !!userEmail,
  });

  // Fetch event title and club name for each registration
  const { data: eventsData = [], isLoading: loadingEvents } = useQuery({
    queryKey: ["eventsData", registrations],
    queryFn: async () => {
      // Fetch all events and clubs to map IDs
      const [eventsRes, clubsRes] = await Promise.all([
        axiosSecure.get("/events"), // all events
        axiosSecure.get("/clubs"),  // all clubs
      ]);
      return { events: eventsRes.data, clubs: clubsRes.data };
    },
    enabled: registrations.length > 0,
  });

  const getEventTitle = (eventId) =>
    eventsData.events?.find((e) => e._id === eventId)?.title || "Unknown Event";

  const getClubName = (clubId) =>
    eventsData.clubs?.find((c) => c._id === clubId)?.name || "Unknown Club";

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  if (isLoading || loadingEvents)
    return (
      <div className="text-center py-20 text-lg font-semibold">
        Loading My Events...
      </div>
    );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <FaCalendarAlt /> My Events
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="bg-base-200">
              <th>Event Title</th>
              <th>Club</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {registrations.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-6">
                  No event registrations found.
                </td>
              </tr>
            ) : (
              registrations.map((reg) => (
                <tr key={reg._id}>
                  <td className="font-semibold">{getEventTitle(reg.eventId)}</td>
                  <td>{getClubName(reg.clubId)}</td>
                  <td>{formatDate(reg.registeredAt)}</td>
                  <td>
                    <span
                      className={`badge ${
                        reg.status === "registered"
                          ? "badge-success"
                          : "badge-ghost"
                      }`}
                    >
                      <FaCheckCircle className="mr-1" />
                      {reg.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEventsMember;
