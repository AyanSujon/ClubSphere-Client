// // EventsManagement.jsx
// import React from "react";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { FaCalendarAlt, FaMapMarkerAlt, FaDollarSign, FaEdit, FaTrash } from "react-icons/fa";
// import useAxiosSecure from "../../../../hooks/useAxiosSecure";
// import { toast } from "react-hot-toast";
// import { Link } from "react-router";
// import useAuth from "../../../../hooks/useAuth";

// const EventsManagement = () => {
//   const axiosSecure = useAxiosSecure();
//   const queryClient = useQueryClient();
//   const {user}=useAuth();

//   // Fetch events for manager
//   const { data: events = [], isLoading, isError } = useQuery({
//     queryKey: ["events"],
//     queryFn: async () => {
//       try {
//         const managerEmail = user?.email; 
//         const res = await axiosSecure.get(`/events?managerEmail=${managerEmail}`);
//         return res.data;
//       } catch (error) {
//         toast.error("Failed to fetch events");
//         console.error(error);
//         return [];
//       }
//     },
//   });

//   // Delete event mutation
//   const deleteEventMutation = useMutation({
//     mutationFn: async (eventId) => {
//       return await axiosSecure.delete(`/events/${eventId}`);
//     },
//     onSuccess: () => {
//       toast.success("Event deleted successfully");
//       queryClient.invalidateQueries(["events"]);
//     },
//     onError: () => {
//       toast.error("Failed to delete event");
//     },
//   });

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this event?")) {
//       deleteEventMutation.mutate(id);
//     }
//   };

//   if (isLoading) return <p className="text-center mt-5">Loading events...</p>;
//   if (isError) return <p className="text-center mt-5 text-red-500">Failed to load events.</p>;

//   return (
//     <div className="p-5">
//       <h2 className="text-2xl font-bold mb-5">Events Management</h2>
//       <div className="overflow-x-auto">
//         <table className="table table-zebra w-full">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Date</th>
//               <th>Location</th>
//               <th>Event Fee</th>
//               <th>Max Attendees</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {events.map((event) => (
//               <tr key={event._id}>
//                 <td>{event.title}</td>
//                 <td>
//                   <FaCalendarAlt className="inline mr-1 text-gray-500" />
//                   {new Date(event.eventDate).toLocaleString("en-US", {
//                     year: "numeric",
//                     month: "short",
//                     day: "numeric",
//                     hour: "numeric",
//                     minute: "2-digit",
//                     hour12: true, // ensures AM/PM format
//                   })}
//                 </td>
//                 <td>
//                   <FaMapMarkerAlt className="inline mr-1 text-gray-500" />
//                   {event.location}
//                 </td>
//                 <td>
//                   {event.eventFee > 0 && <FaDollarSign className="inline mr-1 text-gray-500" />}
//                   {event.eventFee}
//                 </td>
//                 <td>{event.maxAttendees}</td>
//                 <td className="flex gap-2">
//                   <Link to={`${event._id}/edit`} className="btn btn-sm btn-primary flex items-center gap-1">
//                     <FaEdit /> Edit
//                   </Link>
//                   {/* <button className="btn btn-sm btn-primary flex items-center gap-1">
//                     <FaEdit /> Edit
//                   </button> */}
//                   <button
//                     className="btn btn-sm btn-secondary flex items-center gap-1"
//                     onClick={() => handleDelete(event._id)}
//                   >
//                     <FaTrash /> Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//             {events.length === 0 && (
//               <tr>
//                 <td colSpan="6" className="text-center">
//                   No events found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default EventsManagement;


















// EventsManagement.jsx
import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { FaCalendarAlt, FaMapMarkerAlt, FaDollarSign, FaEdit, FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";

const EventsManagement = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const { user } = useAuth();

  // Fetch events for manager
  const { data: events = [], isLoading, isError } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      try {
        const managerEmail = user?.email;
        const res = await axiosSecure.get(`/events?managerEmail=${managerEmail}`);
        return res.data;
      } catch (error) {
        Swal.fire("Error", "Failed to fetch events", "error");
        console.error(error);
        return [];
      }
    },
  });

  // Delete event mutation
  const deleteEventMutation = useMutation({
    mutationFn: async (eventId) => {
      return await axiosSecure.delete(`/events/${eventId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["events"]);
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteEventMutation.mutate(id, {
          onSuccess: () => {
            Swal.fire('Deleted!', 'Your event has been deleted.', 'success');
          },
          onError: () => {
            Swal.fire('Error!', 'Failed to delete event.', 'error');
          }
        });
      }
    });
  };

  if (isLoading) return <p className="text-center mt-5">Loading events...</p>;
  if (isError) return <p className="text-center mt-5 text-red-500">Failed to load events.</p>;

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-5">Events Management</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Location</th>
              <th>Event Fee</th>
              <th>Max Attendees</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event._id}>
                <td>{event.title}</td>
                <td>
                  <FaCalendarAlt className="inline mr-1 text-gray-500" />
                  {new Date(event.eventDate).toLocaleString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </td>
                <td>
                  <FaMapMarkerAlt className="inline mr-1 text-gray-500" />
                  {event.location}
                </td>
                <td>
                  {event.eventFee > 0 && <FaDollarSign className="inline mr-1 text-gray-500" />}
                  {event.eventFee}
                </td>
                <td>{event.maxAttendees}</td>
                <td className="flex gap-2">
                  <Link to={`${event._id}/edit`} className="btn btn-sm btn-primary flex items-center gap-1">
                    <FaEdit /> Edit
                  </Link>
                  <button
                    className="btn btn-sm btn-secondary flex items-center gap-1"
                    onClick={() => handleDelete(event._id)}
                  >
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
            {events.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center">
                  No events found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventsManagement;
